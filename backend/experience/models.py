from django.db import models
from .validators import validate_file_extension
# Create your models here.

class Experience(models.Model):
    company = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    website = models.CharField(max_length=100)
    slug = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='image', validators=[validate_file_extension])
    alt = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = 'Experiences'

    def __str__(self):
        return f'{self.company}, {self.title}'

class Bullet(models.Model):
    bullet = models.CharField(max_length=250)
    company = models.ForeignKey(Experience, on_delete=models.CASCADE, null = True)

    class Meta:
        verbose_name_plural = 'Bullets'

    def __str__(self):
        return self.bullet
