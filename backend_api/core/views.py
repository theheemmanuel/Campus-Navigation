from django.shortcuts import render
from core.serializers import NavigationSerializer
from core.models import NavigationModel
from rest_framework.viewsets import ModelViewSet

# Create your views here.

class NavigationViewset(ModelViewSet):
    queryset = NavigationModel.objects.all()
    serializer_class = NavigationSerializer