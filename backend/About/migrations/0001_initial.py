# Generated by Django 4.1.1 on 2022-10-01 03:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=1000)),
            ],
            options={
                'verbose_name': 'About',
                'verbose_name_plural': 'About',
            },
        ),
    ]
