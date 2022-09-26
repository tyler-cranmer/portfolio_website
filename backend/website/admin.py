from django.contrib import admin
from . import models
# Register your models here.

@admin.register(models.Project)

class ProjectAdmin(admin.ModelAdmin):
    list_display = [
        'title'
    ]

class BulletInlineModel(admin.TabularInline):
    model = models.ExpBullet
    fields = [
        'bullet'
    ]

@admin.register(models.Experience)

class ExperienceAdmin(admin.ModelAdmin):
    list_display = [
        'company'
    ]

    inlines = [
        BulletInlineModel,
    ]

