from rest_framework import serializers
from .models import Contact


class CreateContactSerializer(serializers.ModelSerializer):
    class Meta:
        model= Contact
        fields=('name', 'email', 'subject', 'message')

