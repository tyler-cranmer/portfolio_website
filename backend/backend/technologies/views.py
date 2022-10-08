from rest_framework import generics
from .models import Technology
from .serializers import TechnologySerializer
# Create your views here.


class Technology(generics.ListAPIView):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer