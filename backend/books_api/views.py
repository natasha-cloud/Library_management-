from django.http import Http404
from django.db.models import Q
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
            'patrons' : reverse('patron-list', request=request, format=None),
            'authors' : reverse('author-list', request=request, format=None),
            
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


class AuthorList(APIView):
    """
        Returns a list of all authors
    """

    def get(self, request, format=None):
        authors = Author.objects.all()
        serializer = AuthorSerializer(authors , many=True, context={'request':request})
        return Response(serializer.data)

class AuthorSearch(APIView):
    """
        Search for author by name or by year
    """

    def get(self, request, q,  format=None):
        authors = Author.objects.filter(Q(name__icontains=q)| Q(birth_year__icontains=q) | Q(death_year__icontains=q)).distinct()
        serializer = AuthorSerializer(authors , many=True, context={'request':request})
        return Response(serializer.data)

class CreateAuthor(APIView):
    parser_classes = [MultiPartParser, FormParser]
    
    def post(self, request, format=None):
        data = request.data
        print(data)
        serializer = AuthorSerializer(data=data, context={'request': request})
        
        if serializer.is_valid():
            author = serializer.save()
            print(type(author))
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)


class BookSearch(APIView):
    """
        Search for a book by title, author or ISBN
    """
    def get(self, request, q,  format=None):
        books = Book.objects.filter(Q(title__icontains=q) |Q(authors__name__icontains=q) | Q(copies__ISBN__icontains=q)| Q(id__icontains=q)).distinct()
        serializer = BookSerializer(books, context={'request': request}, many=True)
        return Response(serializer.data)
    

class CreateBook(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, format=None):
        data = request.data
        genres = request.data.get('genre_list')
        authors = request.data.get('author_list')
        author_list = self.parseListString(authors)
        genre_list = self.parseListString(genres)
        serializer = BookSerializer(data=data, context={'request': request})
        
        if serializer.is_valid():
            book = serializer.save()
            for genre_id in genre_list:
                book.genres.add(Genre.objects.get(id=genre_id))
                book.save()
            for author_id in author_list:
                book.authors.add(Author.objects.get(id=author_id))
                book.save()

            
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    def parseListString(self, genre_str):
        genre_list = genre_str.split(',')
        return genre_list 
    
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


        
    
 

