from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name



class Genre(models.Model):
    name = models.CharField(max_length=100)
    

    def __str__(self):
        return self.name

class SubGenre(models.Model):
    name = models.CharField(max_length=100)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE,  related_name='sub_genres')

    def __str__(self):
        return self.name + ' ' + self.genre.name
    
class BookSeries(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='series')

    class Meta:
        verbose_name_plural = 'Book Series'

    def __str__(self):
        return self.title + ' by ' + self.author.name

class Book(models.Model):
    title = models.CharField(max_length=150)
    authors= models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books')
    image = models.ImageField(upload_to='books', default='image_not_found.jpg')
    publiser = models.CharField(max_length=40)
    summery = models.TextField()
    series = models.ForeignKey(BookSeries, on_delete=models.CASCADE, related_name="series_books", blank=True, null=True)
    position_in_series = models.PositiveIntegerField(blank=True, null=True)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    language = models.CharField(default='English', max_length=30)
  

    def __str__(self):
        return self.title
    
class BookCopy(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='copies')
    ISBN = models.PositiveIntegerField()
    is_issued = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = 'Book Copies'

    def __str__(self):
        return self.book.title
    