from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from  django.http import Http404

from django.db.models  import Q

from .serializers import PatronSerializer, MemberShipCardSerializer
from .models import Patron, MembershipCard



class PatronList(APIView):
    """
        Retruns a  list of all Patrons
    """

    def get(self, request, format=None):
        patrons = Patron.objects.all()
        serializer = PatronSerializer(patrons, many=True, context={'request':request})
        return Response(serializer.data)



class PatronDetail(APIView):
    """
        Returns the details of a single Patron
    """

    def get_object(self, pk):
        try:
            return Patron.objects.get(pk=pk)
        except Patron.DoesNotExist:
            raise Http404

    def get(self, request, pk,  format=None):
        patron = self.get_object(pk=pk)
        serializer = PatronSerializer(patron, context={'request': request})
        return Response(serializer.data)
    
class PatronSearch(APIView):
    """
        Search for a parton by name, email or id
    """

    def get(self, request, q,  format=None):
        print(q)
        patrons = Patron.objects.filter(Q(first_name__icontains=q) |Q(last_name__icontains=q) | Q(email__icontains=q)| Q(id__icontains=q))
        serializer = PatronSerializer(patrons, context={'request': request}, many=True)
        return Response(serializer.data)
    

        
    
class MembershipCardDetail(APIView):
    """
        Returns the details of a single membership card
    """

    def get_object(self, pk):
        try:
            return MembershipCard.objects.get(pk=pk)
        except MembershipCard.DoesNotExist:
            raise Http404

    def get(self, request, pk,  format=None):
        card= self.get_object(pk=pk)
        serializer = PatronSerializer(card, context={'request': request})
        return Response(serializer.data)
    
