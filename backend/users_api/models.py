import uuid
from django.db import models

class Member(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    date_joined = models.DateField(auto_now_add=True)
    profile_image = models.ImageField(upload_to='profile', default='blank-profile.png' )

    def get_full_name(self):
        return self.first_name + ' ' + self.last_name
    
    def __str__(self):
        return self.get_full_name()


class MembershipCard(models.Model):
    id = models.UUIDField(primary_key=True)
    member = models.ForeignKey(Member, on_delete=models.CASCADE, related_name='card')
    date_issued = models.DateField(auto_now=True)
    expiry_date = models.DateField()

    def __str__(self):
        return self.member.get_full_name() + "'s card"