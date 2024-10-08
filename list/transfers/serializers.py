from rest_framework import serializers
from transfers import models
from utils import numbers


class TransferSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Transfer
        fields = '__all__'

class TransferListSerializer(serializers.ModelSerializer):
    d9_token = serializers.SerializerMethodField()
    usdt_token = serializers.SerializerMethodField()
    fee_token = serializers.SerializerMethodField()

    class Meta:
        model = models.Transfer
        fields = '__all__'

    def get_d9_token(self, obj):
        return numbers.DecimalTruncation(3).format_d9(obj.d9)

    def get_usdt_token(self, obj):
        return numbers.DecimalTruncation(3).format_usdt(obj.usdt)

    def get_fee_token(self, obj):
        return numbers.DecimalTruncation(9).format_d9(obj.fee)


class GreenPointTransferSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.GreenPointTransfer
        fields = '__all__'

class GreenPointTransferListSerializer(serializers.ModelSerializer):

    merchant_green_point = serializers.SerializerMethodField()
    consumer_green_points = serializers.SerializerMethodField()
    fee_token = serializers.SerializerMethodField()

    class Meta:
        model = models.GreenPointTransfer
        fields = '__all__'

    def get_merchant_green_pointn(self, obj):
        return numbers.DecimalTruncation(3).format_usdt(obj.merchant_points)

    def get_consumer_green_points(self, obj):
        return numbers.DecimalTruncation(3).format_usdt(obj.consumer_points)

    def get_fee_token(self, obj):
        return numbers.DecimalTruncation(9).format_d9(obj.fee)


class SwapTransferSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.SwapTransfer
        fields = '__all__'


class SwapTransferListSerializer(serializers.ModelSerializer):

    d9_token = serializers.SerializerMethodField()
    usdt_token = serializers.SerializerMethodField()
    fee_token = serializers.SerializerMethodField()
    d9_rate = serializers.SerializerMethodField()
    usdt_rate = serializers.SerializerMethodField()

    class Meta:
        model = models.SwapTransfer
        fields = '__all__'

    def get_d9_token(self, obj):
        return numbers.DecimalTruncation(3).format_d9(obj.d9)

    def get_d9_rate(self, obj):
        res = float(numbers.format_d9(obj.d9)) / float(numbers.format_usdt(obj.usdt))
        return numbers.DecimalTruncation(3).format(res)

    def get_usdt_rate(self, obj):
        res = float(numbers.format_usdt(obj.usdt)) / float(numbers.format_d9(obj.d9))
        return numbers.DecimalTruncation(3).format(res)

    def get_usdt_token(self, obj):
        return numbers.DecimalTruncation(3).format_usdt(obj.usdt)

    def get_fee_token(self, obj):
        return numbers.DecimalTruncation(9).format_d9(obj.fee)


class D9TransferSerializer(serializers.Serializer):
    from_address = serializers.CharField(required=True)
    to_address = serializers.CharField(required=True)

class USDTTransferSerializer(serializers.Serializer):
    from_address = serializers.CharField(required=True)
    to_address = serializers.CharField(required=True)