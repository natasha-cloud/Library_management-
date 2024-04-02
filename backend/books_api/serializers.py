from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField


from books_api.models import Book, Author, BookSeries, Genre

class BookSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = "__all__"