# Generated by Django 4.1.1 on 2022-09-12 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_books_delete_users'),
    ]

    operations = [
        migrations.AlterField(
            model_name='books',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]