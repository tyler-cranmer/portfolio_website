from django.urls import path
from .views import Technology

urlpatterns=[
    path('', Technology.as_view())
]