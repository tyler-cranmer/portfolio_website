from django.contrib import admin
from .models import Contact
# Register your models here.

class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'time')
    list_display_links = ('id','name', 'email')
    search_fields=('id', 'name', 'email')
admin.site.register(Contact, ContactAdmin)