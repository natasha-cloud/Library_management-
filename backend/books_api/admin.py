from django.contrib import admin


from .models import Book, BookCopy, BookSeries ,Author, Genre, SubGenre


admin.site.register(Book)
admin.site.register(BookSeries)
admin.site.register(BookCopy)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(SubGenre)
