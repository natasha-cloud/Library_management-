from django.contrib import admin

from .models import  MembershipCard, Patron



admin.site.register(Patron)
admin.site.register(MembershipCard)
