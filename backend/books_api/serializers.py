from rest_framework.serializers import HyperlinkedModelSerializer , BooleanField , HyperlinkedRelatedField, CharField


from books_api.models import Book, BookCopy ,Author, BookSeries, Genre, Category


class BookCopySerializer(HyperlinkedModelSerializer):
    class Meta:
        model = BookCopy
        fields = [
            'id', 'url', 'book', 'ISBN', 'is_issued'
        ]


class AuthorSerializer(HyperlinkedModelSerializer):
    series = HyperlinkedRelatedField(many=True, view_name='bookseries-detail', read_only=True)
    class Meta:
        model = Author
        fields = [
            'id', 'url', 'name', 'image' , 'series', 'birth_year', 'death_year'
        ]

class GenreSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Genre
        fields = [
              'id', 'url', 'name', 'category'
        ]
        


class BookSerializer(HyperlinkedModelSerializer):
    authors = AuthorSerializer(many=True, read_only=True)
    genres = GenreSerializer(many=True, read_only=True)
    copies = BookCopySerializer(many=True, read_only=True)
    is_book_available = BooleanField(source='is_available', read_only=True)
    book_no_available = CharField(source='no_available', read_only=True)
    book_no_borrowed = CharField(source='no_borrowed', read_only=True)

    class Meta:
        model = Book
        depth = 1
        fields =[
            'id','url', 'title', 'authors', 'image',
            'publisher', 'summery', 'series', 'genres',
            'position_in_series', 'category' ,'copies',
            'language', 'is_book_available', 'book_no_available', 'book_no_borrowed'        ]
        
class CategorySerializer(HyperlinkedModelSerializer):
    category_books = BookSerializer(many=True)
    genres = GenreSerializer(many=True)

    class Meta:
        model = Category
        fields = [
           'id', 'url', 'name', 'category_books', 'genres'
        ]

class BookSeriesSerializer(HyperlinkedModelSerializer):
    series_books = HyperlinkedRelatedField(many=True,  view_name='book-detail', read_only=True )
    class Meta:
        model = BookSeries
        fields = [
            'id','url','title', 'author', 'series_books'
        ]









        