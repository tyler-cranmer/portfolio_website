
from django.contrib import admin
from .models import Experience, Bullet

# Register your models here.

class ExperienceAdmin(admin.ModelAdmin):
    list_display = ( 'id', 'company', 'title')
    list_display_links = ('id', 'company')
    search_fields = ('id', 'company')

admin.site.register(Experience, ExperienceAdmin)
admin.site.register(Bullet)

