from rest_framework import serializers
from .models import Project, Tag, Technology

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name', )

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ('name', )

class ProjectSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    technologies = TechnologySerializer(many=True)
    class Meta:
        model=Project
        fields=('name', 'description', 'link', 'image', 'tags', 'technologies')