from django.db import models
from django.core.mail import send_mail
# Create your models here.


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField()
    time = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Contacts'

    def __str__(self) -> str:
        return f'{self.name}, {self.email}, {self.time}'

    # def save(self):
    #     send_mail(

    #     )
    #     return super().save()
    