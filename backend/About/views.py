from rest_framework import generics
from .models import About
from .serializers import AboutSerializer

# Create your views here.

class About(generics.ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer
   