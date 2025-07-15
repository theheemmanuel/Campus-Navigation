from django.urls import path, include
from rest_framework.routers import DefaultRouter
from core.views import NavigationViewset

router= DefaultRouter()
router.register(r"navigation", NavigationViewset, basename="navigation")

urlpatterns = [
    path("", include(router.urls))
]
