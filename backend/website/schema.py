import graphene
from graphene_django import DjangoObjectType, DjangoListField
from .models import Project, Experience, ExpBullet

class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = ('id', 'tag', 'title', 'image', 'description', 'technology')

class ExperienceType(DjangoObjectType):
    class Meta:
        model = Experience
        fields = ('id', 'company', 'title', 'duration', 'location', 'website', 'slug', 'logo', 'alt')

class ExpBulletType(DjangoObjectType):
    class Meta:
        model = ExpBullet
        fields = ('experience', 'bullet')

class Query(graphene.ObjectType):

    all_experience = DjangoListField(ExperienceType)
    # all_experience = graphene.Field(ExperienceType, id=graphene.Int())
    all_bullets = graphene.Field(ExpBulletType, id=graphene.Int())
    

    # def resolve_all_experience(root, info, id):
    #     return Experience.objects(pk=id)
    def resolve_all_bullets(root,info,id):
        return ExpBullet.objects.filter(experience=id)


schema = graphene.Schema(query=Query)