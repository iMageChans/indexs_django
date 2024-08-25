from django.urls import path, include
from rest_framework.routers import DefaultRouter
from transfers import views
from transfers.views import D9TransfersViewSet, USDTTransfersViewSet, SwapTransferVolumeAPIView

router = DefaultRouter()
router.register(r'transfers', views.TransfersViewSet, basename='transfers')
router.register(r'green/point/transfers', views.GreenPointTransferViewSet, basename='greenpoint-transfers')
router.register(r'swap/transfers', views.SwapTransferViewSet, basename='swap-transfers')

urlpatterns = [
    path('', include(router.urls)),
    path('transfers/d9/', D9TransfersViewSet.as_view(), name='transfers-d9'),
    path('transfers/usdt/', USDTTransfersViewSet.as_view(), name='transfers-usdt'),
    path('swap/transfers/day/', SwapTransferVolumeAPIView.as_view(), name='swap-transfer-24h-volume'),
]