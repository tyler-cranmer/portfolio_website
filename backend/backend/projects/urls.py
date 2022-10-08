from django.urls import path
from .views import Project

urlpatterns=[
    path('', Project.as_view()),
]