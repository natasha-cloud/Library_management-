from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser


from books_api.serializers import BookSerializer, BookCopySerializer, BookSeriesSerializer, AuthorSerializer, CategorySerializer,  GenreSerializer
from .models import Book, BookCopy, BookSeries,Author, Genre, Category



class ApiList(APIView):
    """
        Returns a list of all available APIs
    """

    def get(self, request, format=None):
        return Response({
            'books': reverse('book-list', request=request, format=None),
            'book-series': reverse('bookseries-list', request=request, format=None),
            
        })
    
class BookList(APIView):
    """
        Retruns a  list of all books
    """

    def get(self, request, format=None):
        books = Book.objects.all()
        serializer = BookSerializer(books , many=True, context={'request':request})
        return Response(serializer.data)

class BookDetail(APIView):
    """
        Returns the details of a single book
    """

    def get_object(self, pk):
        try:
            return Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            raise Http404

    def get(self, request, pk,  format=None):
        book = self.get_object(pk=pk)
        serializer = BookSerializer(book, context={'request': request})
        return Response(serializer.data)
    

class CreateBook(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, format=None):
        data = request.data
        serializer = BookSerializer(data=data, context={'request': request})
        
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
class BookCopyDetail(APIView):
    """
        Returns the details of a single book copy
    """

    def get_object(self, pk):
        try:
            return BookCopy.objects.get(pk=pk)
        except BookCopy.DoesNotExist:
            raise Http404

    def get(self, request, pk,  format=None):
        book = self.get_object(pk=pk)
        serializer = BookCopySerializer(book, context={'request': request})
        return Response(serializer.data)
    
class BookSeriesList(APIView):
    """
        Return a list of all book series
    """
    def get(self,request, format=None):
        book_series = BookSeries.objects.all()
        serializer = BookSeriesSerializer(book_series, many=True, context={'request': request})
        return Response(serializer.data)

class BookSeriesDetail(APIView):
    """
        Returns a single book series
    """

    def get_object(self, pk):
        try:
            return BookSeries.objects.get(pk=pk)
        except BookSeries.DoesNotExist:
            raise Http404
        
    def get(self, request, pk,  format=None):
        book_series = self.get_object(pk=pk)
        serializer = BookSerializer(book_series, context={'request': request})
        return Response(serializer.data)


class AuthorDetail(APIView):
    """
        Returns the details of a single book author
    """

    def get_object(self, pk):
        try:
            return Author.objects.get(pk=pk)
        except Author.DoesNotExist:
            raise Http404

    def get(self, request, pk,  format=None):
        author = self.get_object(pk=pk)
        serializer = AuthorSerializer(author, context={'request': request})
        return Response(serializer.data)
        
class GenreDetail(APIView):
    """
        Returns the details of a single book genre
    """

    def get_object(self, pk):
        try:
            return Genre.objects.get(pk=pk)
        except Genre.DoesNotExist:
            raise Http404

    def get(self, request, pk,  format=None):
        genre = self.get_object(pk=pk)
        serializer = GenreSerializer(genre, context={'request': request})
        return Response(serializer.data)
    
class CategoryDetail(APIView):
    """
        Returns the details of a single book category
    """

    def get_object(self, pk):
        try:
            return Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            raise Http404

    def get(self, request, pk,  format=None):
        category = self.get_object(pk=pk)
        serializer = CategorySerializer(category, context={'request': request})
        return Response(serializer.data)

class CategoryList(APIView):
    """
    Returns  a list of all Categories

    """
    
    def get(self, request, format=None):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True, context={'request':request})
        return Response(serializer.data)


        
    
 

