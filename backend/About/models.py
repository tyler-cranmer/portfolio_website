from django.db import models
from django.utils.translation import gettext_lazy as _



# Create your models here.
class About(models.Model):
    description = models.CharField(max_length = 1000)
    image = models.ImageField(_("Image"), upload_to='image', null=True)


    def __str__(self):
        return self.description