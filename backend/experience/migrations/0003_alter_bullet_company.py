# Generated by Django 4.1.1 on 2022-10-04 02:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('experience', '0002_alter_experience_logo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bullet',
            name='company',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='experience.experience'),
        ),
    ]