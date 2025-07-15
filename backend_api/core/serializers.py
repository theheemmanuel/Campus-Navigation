from rest_framework import serializers
from core.models import NavigationModel

class NavigationSerializer(serializers.ModelSerializer):
    class Meta:
        model = NavigationModel
        fields = '__all__'