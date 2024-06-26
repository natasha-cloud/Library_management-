# Generated by Django 5.0.3 on 2024-04-17 05:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books_api', '0008_bookcirculationhistory_issue'),
    ]

    operations = [
        migrations.AlterField(
            model_name='issue',
            name='book_status',
            field=models.CharField(choices=[('R', 'Returned'), ('L', 'Lost'), ('I', 'Issued'), ('A', 'Available')], default='A', max_length=20),
        ),
    ]
