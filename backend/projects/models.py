from django.db import models

# Create your models here.
class Tag(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Technology(models.Model):
    name = models.CharField(max_length=30)

    class Meta:
        verbose_name_plural = 'Technologies'

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    link = models.CharField(max_length=250)
    image = models.ImageField(upload_to='image')
    tags = models.ManyToManyField(Tag)
    technologies = models.ManyToManyField(Technology)
    
    def __str__(self):
        return self.name

