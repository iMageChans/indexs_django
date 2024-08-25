from django.contrib import admin
from .models import Transfer, GreenPointTransfer, SwapTransfer

@admin.register(Transfer)
class TransferAdmin(admin.ModelAdmin):
    list_display = ('event_id', 'block_number', 'extrinsic_hash', 'from_address', 'to_address', 'timestamp', 'd9', 'usdt', 'actions')
    search_fields = ('event_id', 'from_address', 'to_address', 'block_hash', 'extrinsic_hash', 'actions')

@admin.register(GreenPointTransfer)
class GreenPointTransferAdmin(admin.ModelAdmin):
    list_display = ('event_id', 'block_number', 'extrinsic_hash', 'from_address', 'to_address', 'timestamp', 'merchant_points', 'consumer_points', 'actions')
    search_fields = ('event_id', 'from_address', 'to_address', 'block_hash', 'extrinsic_hash', 'actions')

@admin.register(SwapTransfer)
class SwapTransferAdmin(admin.ModelAdmin):
    list_display = ('event_id', 'block_number', 'extrinsic_hash', 'from_address', 'to_address', 'timestamp', 'd9', 'usdt', 'actions')
    search_fields = ('event_id', 'from_address', 'to_address', 'block_hash', 'extrinsic_hash', 'actions')

