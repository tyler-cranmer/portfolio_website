from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import CreateContactSerializer
# from .models import Contact
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.



@api_view(['POST'])
def ContactView(request):
    # if request.method == 'GET':
    #     queryset = Contact.objects.all()
    #     serializer = CreateContactSerializer(queryset, many=True)
    #     return Response(serializer.data)
    if request.method == 'POST':
        serializer = CreateContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user_name = serializer.data['name']
            user_email = serializer.data['email']
            user_subject = serializer.data['subject']
            user_message = serializer.data['message']
            message = f'From: {user_name}\n\nEmail: {user_email} \n\nMessage:\n{user_message}'
            send_mail (
                user_subject,
                message,
                settings.EMAIL_HOST_USER,
                ['tylerc.developer@gmail.com'],

            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)