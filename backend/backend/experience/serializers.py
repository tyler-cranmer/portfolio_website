from rest_framework import serializers
from .models import Experience, Bullet


class BulletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bullet
        fields = ('bullet', )

class ExperienceSerializer(serializers.ModelSerializer):
    bullets = BulletSerializer(many=True, read_only=True, source='bullet_set')
    class Meta:
        model = Experience
        fields = ('id', 'company', 'title', 'duration', 'location', 'website', 'slug', 'logo', 'alt', 'bullets')
