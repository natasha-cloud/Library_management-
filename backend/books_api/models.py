from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=40)
    image = models.ImageField(upload_to='authors' , default='blank-profile.png')

    def __str__(self):
        return self.name



class Category(models.Model):
    name = models.CharField(max_length=100)
    

    def __str__(self):
        return self.name

class Genre(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE,  related_name='genres')

    def __str__(self):
        return self.name + ' ' + self.category.name
    
class BookSeries(models.Model):
    title = models.CharField(max_length=100)
    author = models.ManyToManyField(Author, related_name='series')

    class Meta:
        verbose_name_plural = 'Book Series'

    def __str__(self):
        return self.title + ' book series'

class Book(models.Model):
    title = models.CharField(max_length=150)
    authors= models.ManyToManyField(Author, related_name='books')
    image = models.ImageField(upload_to='books', default='image_not_found.jpg')
    publisher = models.CharField(max_length=40)
    summery = models.TextField()
    series = models.ForeignKey(BookSeries, on_delete=models.CASCADE, related_name="series_books", blank=True, null=True)
    position_in_series = models.PositiveIntegerField(blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='category_books')
    genres = models.ManyToManyField(Genre)
    language = models.CharField(default='English', max_length=30)
  

    def __str__(self):
        return self.title
    
    def is_available(self):
        return self.copies.filter(is_issued=False).count() > 0
    
class BookCopy(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='copies')
    ISBN = models.PositiveIntegerField()
    is_issued = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = 'Book Copies'

    def __str__(self):
        return self.book.title
    