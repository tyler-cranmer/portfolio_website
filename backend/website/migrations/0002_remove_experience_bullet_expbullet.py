# Generated by Django 4.1.1 on 2022-09-26 00:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='experience',
            name='bullet',
        ),
        migrations.CreateModel(
            name='ExpBullet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bullet', models.CharField(max_length=250)),
                ('experience', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='bullets', to='website.experience')),
            ],
        ),
    ]
