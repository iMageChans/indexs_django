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
from django.db.models import Sum
from utils import numbers


class CustomPagination(PageNumberPagination):
    page_size = 30
    page_size_query_param = 'page_size'
    max_page_size = 100

class TransfersViewSet(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    GenericViewSet,
):
    queryset = models.Transfer.objects.all()
    serializer_class = serializers.TransferSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            validated_data = serializer.validated_data
            instance, created = models.Transfer.objects.update_or_create(
                event_id=validated_data['event_id'],
                defaults=validated_data
            )
            headers = self.get_success_headers(serializer.data)
            status_code = status.HTTP_201_CREATED if created else status.HTTP_200_OK
            return Response(serializer.data, status=status_code, headers=headers)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_success_headers(self, data):
        try:
            return {'Location': str(data[api_settings.URL_FIELD_NAME])}
        except (TypeError, KeyError):
            return {}


class GreenPointTransferViewSet(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    GenericViewSet,
):
    queryset = models.GreenPointTransfer.objects.all()
    serializer_class = serializers.GreenPointTransferSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            instance, created = models.GreenPointTransfer.objects.update_or_create(
                event_id=validated_data['event_id'],
                defaults=validated_data
            )
            headers = self.get_success_headers(serializer.data)
            status_code = status.HTTP_201_CREATED if created else status.HTTP_200_OK
            return Response(serializer.data, status=status_code, headers=headers)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def get_success_headers(self, data):
        try:
            return {'Location': str(data[api_settings.URL_FIELD_NAME])}
        except (TypeError, KeyError):
            return {}


class SwapTransferViewSet(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    GenericViewSet,
):
    queryset = models.SwapTransfer.objects.all()
    serializer_class = serializers.SwapTransferSerializer

    def create(self, request, *args, **kwargs):

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            instance, created = models.SwapTransfer.objects.update_or_create(
                event_id=validated_data['event_id'],
                defaults=validated_data
            )
            headers = self.get_success_headers(serializer.data)
            status_code = status.HTTP_201_CREATED if created else status.HTTP_200_OK
            return Response(serializer.data, status=status_code, headers=headers)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def get_success_headers(self, data):
        try:
            return {'Location': str(data[api_settings.URL_FIELD_NAME])}
        except (TypeError, KeyError):
            return {}


class D9TransfersViewSet(APIView):
    pagination_class = CustomPagination

    def post(self, request):
        serializer = serializers.D9TransferSerializer(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            transfer = models.Transfer.objects.filter(
                Q(from_address=validated_data['from_address']) | Q(to_address=validated_data['to_address']))
            paginator = self.pagination_class()
            paginated_transfers = paginator.paginate_queryset(transfer, request)

            # 返回分页后的数据
            return paginator.get_paginated_response(serializers.TransferSerializer(paginated_transfers, many=True).data)

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
                Q(to_address="D9ToUSDTConversion") |
                Q(to_address="USDTToD9Conversion") |
                Q(to_address="SubscriptionExtended") |
                Q(to_address="USDTMerchantPaymentSent") |
                Q(to_address="GivePointsUSDT") |
                Q(to_address="USDTTransfer")
            )
            paginator = self.pagination_class()
            paginated_transfers = paginator.paginate_queryset(transfer, request)

            # 返回分页后的数据
            return paginator.get_paginated_response(serializers.TransferSerializer(paginated_transfers, many=True).data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class SwapTransferVolumeAPIView(APIView):

    def get(self, request, *args, **kwargs):
        # 获取当前时间
        now = timezone.now()

        # 计算24小时前的时间
        last_24_hours = now - timezone.timedelta(hours=24)

        # 查询过去24小时内的交易记录
        transfers = models.SwapTransfer.objects.filter(timestamp__gte=last_24_hours)

        # 计算交易量（交易数量）
        transaction_count = transfers.count()

        # 计算USDT的总和
        usdt_sum = sum(int(transfer.usdt) for transfer in transfers if transfer.usdt)

        # 返回结果
        return Response({
            'transaction_count': transaction_count,
            'total_usdt': numbers.DecimalTruncation(3).format_usdt(usdt_sum),
        })

