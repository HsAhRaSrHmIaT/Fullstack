from rest_framework import serializers #type: ignore
from .models import Pizza

class PizzaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pizza
        fields = '__all__'  # Or list specific fields if you want
