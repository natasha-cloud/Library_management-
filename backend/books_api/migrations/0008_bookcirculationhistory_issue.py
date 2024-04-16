# Generated by Django 5.0.3 on 2024-04-16 01:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books_api', '0007_alter_author_options_author_date_modified'),
        ('users_api', '0003_patron_last_updated'),
    ]

    operations = [
        migrations.CreateModel(
            name='BookCirculationHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('check_out_date', models.DateTimeField(auto_now=True)),
                ('return_date', models.DateTimeField(blank=True, null=True)),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='books_api.book')),
                ('book_copy', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='books_api.bookcopy')),
                ('patron', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users_api.patron')),
            ],
        ),
        migrations.CreateModel(
            name='Issue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('check_out_date', models.DateTimeField(auto_now=True)),
                ('return_date', models.DateTimeField(blank=True, null=True)),
                ('fine', models.CharField(default='$10', max_length=10)),
                ('paid', models.BooleanField(default=False, verbose_name='Fine paid')),
                ('book_status', models.CharField(choices=[('R', 'Returned'), ('L', 'Lost')], max_length=20)),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='books_api.book')),
                ('book_copy', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='books_api.bookcopy')),
                ('patron', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='check_out', to='users_api.patron')),
            ],
        ),
    ]