# Generated by Django 4.1.1 on 2022-10-01 04:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('About', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='about',
            options={},
        ),
        migrations.AddField(
            model_name='about',
            name='image',
            field=models.ImageField(null=True, upload_to='files/about'),
        ),
    ]
