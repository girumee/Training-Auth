# Generated by Django 4.2.2 on 2023-06-29 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='is_admin',
            field=models.BooleanField(default=False),
        ),
    ]
