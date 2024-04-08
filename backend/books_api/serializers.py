from rest_framework.serializers import HyperlinkedModelSerializer, ModelSerializer , HyperlinkedRelatedField


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
            'id', 'url', 'name', 'image' , 'series'
        ]

class BookSerializer(HyperlinkedModelSerializer):
    authors = AuthorSerializer(many=True, read_only=True)
    copies = BookCopySerializer(many=True, read_only=True)
    class Meta:
        model = Book
        fields =[
            'id','url', 'title', 'authors', 'image',
            'publisher', 'summery', 'series',
            'position_in_series', 'category', 'genres' ,'copies',
            'language'
        ]

class BookSeriesSerializer(HyperlinkedModelSerializer):
    series_books = HyperlinkedRelatedField(many=True,  view_name='book-detail', read_only=True )
    class Meta:
        model = BookSeries
        fields = [
            'id','url','title', 'author', 'series_books'
        ]

class GenreSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Genre
        fields = [
              'id', 'url', 'name', 'category'
        ]

class CategorySerializer(HyperlinkedModelSerializer):
    category_books = BookSerializer(many=True)
    genres = GenreSerializer(many=True)

    class Meta:
        model = Category
        fields = [
           'id', 'url', 'name', 'category_books', 'genres'
        ]






        