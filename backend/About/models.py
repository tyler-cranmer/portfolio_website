from django.db import models

# Create your models here.
class About(models.Model):
    description = models.CharField(max_length = 1000)
    # image = models.ImageField()

    class Meta:
        verbose_name = 'About'
        verbose_name_plural = 'About'

    def __str__(self):
        return self.descrip