from django.shortcuts import render

from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from books_api.serializers import BookSerializer
from .models import Book

class BookList(APIView):
    """
        Retruns a  list of all books
    """

    def get(self, request, format=None):
        books = Book.objects.all()
        serializer = BookSerializer(books , many=True)
        return Response(serializer.data)


