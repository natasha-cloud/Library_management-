# Generated by Django 5.0.3 on 2024-04-24 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books_api', '0012_alter_issue_check_out_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='issue',
            name='check_in_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
