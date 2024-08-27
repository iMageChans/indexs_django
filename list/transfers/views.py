from rest_framework.viewsets import mixins, GenericViewSet
from transfers import models
from transfers import serializers
from rest_framework import status
from rest_framework.response import Response
from rest_framework.settings import api_settings
from rest_framework.views import APIView
from django.db.models import Q
from rest_framework.pagination import PageNumberPagination
from django.utils import timezone
from utils import numbers
from datetime import timedelta


class CustomPagination(PageNumberPagination):
    page_size = 30
    page_size_query_param = 'page_size'
    max_page_size = 100


class SwapTransferListViewSet(APIView):
    pagination_class = CustomPagination

    def get(self, request):
        transfer = models.SwapTransfer.objects.all().order_by('-block_number')
        paginator = self.pagination_class()
        paginated_transfers = paginator.paginate_queryset(transfer, request)
        return paginator.get_paginated_response(
            serializers.SwapTransferListSerializer(paginated_transfers, many=True).data)


class D9TransfersViewSet(APIView):
    pagination_class = CustomPagination

    def post(self, request):
        serializer = serializers.D9TransferSerializer(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            transfer = (models.Transfer.objects.filter(
                Q(from_address=validated_data['from_address']) | Q(to_address=validated_data['to_address']))
                        .order_by('-block_number'))
            paginator = self.pagination_class()
            paginated_transfers = paginator.paginate_queryset(transfer, request)

            return paginator.get_paginated_response(
                serializers.TransferListSerializer(paginated_transfers, many=True).data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class USDTTransfersViewSet(APIView):
    pagination_class = CustomPagination

    def post(self, request):
        serializer = serializers.USDTTransferSerializer(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            transfer = models.Transfer.objects.filter(
                Q(from_address=validated_data['from_address']) | Q(to_address=validated_data['to_address'])).filter(
                Q(actions="LiquidityAdded") |
                Q(actions="LiquidityRemoved") |
                Q(actions="D9ToUSDTConversion") |
                Q(actions="USDTToD9Conversion") |
                Q(actions="SubscriptionExtended") |
                Q(actions="USDTMerchantPaymentSent") |
                Q(actions="GivePointsUSDT") |
                Q(actions="USDTTransfer")
            ).order_by('-block_number')
            paginator = self.pagination_class()
            paginated_transfers = paginator.paginate_queryset(transfer, request)

            return paginator.get_paginated_response(
                serializers.TransferListSerializer(paginated_transfers, many=True).data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SwapTransferVolumeAPIView(APIView):

    def get(self, request, *args, **kwargs):
        now = timezone.now()

        # 获取前一天和前两天的时间范围
        last_24_hours = now - timedelta(hours=24)
        last_48_hours = now - timedelta(hours=48)

        # 获取前一天和前两天的数据
        transfers_last_24_hours = models.SwapTransfer.objects.filter(timestamp__gte=last_24_hours)
        transfers_last_48_to_24_hours = models.SwapTransfer.objects.filter(timestamp__gte=last_48_hours,
                                                                           timestamp__lt=last_24_hours)

        # 计算前一天的交易数量和 USDT 总和
        transaction_count_last_24_hours = transfers_last_24_hours.count()
        usdt_sum_last_24_hours = sum(int(transfer.usdt) for transfer in transfers_last_24_hours if transfer.usdt)

        # 计算前两天的交易数量和 USDT 总和
        transaction_count_last_48_to_24_hours = transfers_last_48_to_24_hours.count()
        usdt_sum_last_48_to_24_hours = sum(
            int(transfer.usdt) for transfer in transfers_last_48_to_24_hours if transfer.usdt)

        # 计算交易数量的环比增长率
        if transaction_count_last_48_to_24_hours > 0:
            transaction_count_change_rate = ((transaction_count_last_24_hours - transaction_count_last_48_to_24_hours) / transaction_count_last_48_to_24_hours) * 100
        else:
            transaction_count_change_rate = None  # 或者设置为 0, 表示无增长

        # 计算 USDT 总和的环比增长率
        if usdt_sum_last_48_to_24_hours > 0:
            usdt_sum_change_rate = ((usdt_sum_last_24_hours - usdt_sum_last_48_to_24_hours) / usdt_sum_last_48_to_24_hours) * 100
        else:
            usdt_sum_change_rate = None  # 或者设置为 0, 表示无增长

        return Response({
            'transaction_count_last_24_hours': transaction_count_last_24_hours,
            'transaction_count_last_48_to_24_hours': transaction_count_last_48_to_24_hours,
            'transaction_count_change_rate': numbers.DecimalTruncation(2).format(transaction_count_change_rate),
            'usdt_sum_last_24_hours': usdt_sum_last_24_hours,
            'usdt_sum_last_48_to_24_hours': usdt_sum_last_48_to_24_hours,
            'usdt_sum_change_rate': numbers.DecimalTruncation(2).format(usdt_sum_change_rate)
        })
