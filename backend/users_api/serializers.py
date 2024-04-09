from rest_framework.serializers import HyperlinkedModelSerializer, CharField, ModelSerializer

from .models import Patron, MembershipCard


class PatronSerializer(HyperlinkedModelSerializer):
    full_name = CharField(source='get_full_name')
    class Meta:
        model = Patron
        fields = [ 
            'id', 'url', 'first_name', 'last_name', 'email',
            'phone_number', 'date_joined', 'last_updated', 'profile_image','full_name'
            ]
       
        

class MemberShipCardSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = MembershipCard
        fields = [
            'id', 'url', 'patron', 'date_issued', 'expiry_date'
        ]