from django.shortcuts import render
from rest_framework import generics
from .models import Experience
from .serializers import ExperienceSerializer
# Create your views here.

class Experience(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer