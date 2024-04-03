# Generated by Django 5.0.3 on 2024-04-02 01:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='bookcopy',
            options={'verbose_name_plural': 'Book Copies'},
        ),
        migrations.AlterModelOptions(
            name='bookseries',
            options={'verbose_name_plural': 'Book Series'},
        ),
        migrations.AddField(
            model_name='book',
            name='series',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='series_books', to='books_api.bookseries'),
        ),
    ]