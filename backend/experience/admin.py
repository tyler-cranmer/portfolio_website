
from django.contrib import admin
from .models import Experience, Bullet

# Register your models here.

class ExperienceAdmin(admin.ModelAdmin):
    list_display = ( 'id', 'company')
    list_display_links = ('id', 'company')
    # search_fields = ('company, bullets')

admin.site.register(Experience, ExperienceAdmin)
admin.site.register(Bullet)

