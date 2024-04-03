# Generated by Django 5.0.3 on 2024-04-01 18:07

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=40)),
                ('last_name', models.CharField(max_length=40)),
                ('email', models.EmailField(max_length=254)),
                ('phone_number', models.CharField(blank=True, max_length=15, null=True)),
                ('date_joined', models.DateField(auto_now_add=True)),
                ('profile_image', models.ImageField(default='blank-profile.png', upload_to='profile')),
            ],
        ),
        migrations.CreateModel(
            name='MembershipCard',
            fields=[
                ('id', models.UUIDField(primary_key=True, serialize=False)),
                ('date_issued', models.DateField(auto_now=True)),
                ('expiry_date', models.DateField()),
                ('member', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='card', to='users_api.member')),
            ],
        ),
    ]