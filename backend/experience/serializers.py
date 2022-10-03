from rest_framework import serializers
from .models import Experience, Bullet

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ('id', 'company', 'title', 'duration', 'location', 'website', 'slug', 'logo', 'alt', 'bullets')

class BulletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bullet
        fields = ('bullet', )