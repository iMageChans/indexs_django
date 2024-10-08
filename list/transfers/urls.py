from django.urls import path
from transfers.views import (D9TransfersViewSet,
                             USDTTransfersViewSet,
                             SwapTransferVolumeAPIView,
                             SwapTransferListViewSet,
                             SwapTransferUsersListViewSet,
                             SwapTransferListQViewSet,
                             TransferFromAddressCountView)


urlpatterns = [
    path('transfers/d9/', D9TransfersViewSet.as_view(), name='transfers-d9'),
    path('transfers/usdt/', USDTTransfersViewSet.as_view(), name='transfers-usdt'),
    path('swap/transfers/', SwapTransferListViewSet.as_view(), name='swap-transfer'),
    path('swap/users/transfers/', SwapTransferUsersListViewSet.as_view(), name='swap-user-transfer'),
    path('swap/q/transfers/', SwapTransferListQViewSet.as_view(), name='swap-q-transfer'),
    path('swap/transfers/day/', SwapTransferVolumeAPIView.as_view(), name='swap-transfer-24h-volume'),
    path('transfers/count/', TransferFromAddressCountView.as_view(), name='transfers-count'),
]