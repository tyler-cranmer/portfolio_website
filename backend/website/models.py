from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.


class Project(models.Model):
    tag = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    image = models.CharField(max_length=250)
    description = models.TextField()
    technology = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Experience(models.Model):
    company = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    website = models.CharField(max_length=100)
    slug = models.CharField(max_length=100)
    logo = models.CharField(max_length=100)
    alt = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class ExpBullet(models.Model):
    experience = models.ForeignKey(Experience, related_name = 'bullet', on_delete=models.DO_NOTHING )
    bullet = models.TextField()