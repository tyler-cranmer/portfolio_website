from django.shortcuts import render
from rest_framework import generics
from .models import Project
from .serializers import ProjectSerializer

class Project(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = None
# Create your views here.
