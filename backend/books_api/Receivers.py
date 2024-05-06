from django.db.models.signals import post_save
from django.dispatch import receiver
from books_api.models import Issue
from datetime import timedelta

@receiver(post_save, sender=Issue)
def set_return_date(sender, **kwargs):
    kwargs['instance'].return_date = kwargs['instance'].check_out_date + timedelta(weeks=1)
