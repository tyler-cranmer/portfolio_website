from django.contrib import admin
from .models import Project, Tag, Technology
# Register your models here.


class ProjectAdmin(admin.ModelAdmin):
    list_display = ( 'id', 'name')
    list_display_links = ('id', 'name')
    search_fields = ('name', 'tags', 'technologies')
    list_per_page = 20


admin.site.register(Project, ProjectAdmin)
admin.site.register(Tag)
admin.site.register(Technology)
