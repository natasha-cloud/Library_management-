from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Author(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name



class Genre(models.Model):
    name = models.CharField(max_length=30)
    

    def __str__(self):
        return self.name

class SubGenre(models.Model):
    name = models.CharField(max_length=30)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE,  related_name='sub_genres')

    def __str__(self):
        return self.name
    

class Book(models.Model):
    title = models.CharField(max_length=30)
    authors= models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books')
    image = models.ImageField(upload_to='books', default='image_not_found.jpg')
    publiser = models.CharField(max_length=40)
    summery = models.TextField()
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    ISBN = models.PositiveBigIntegerField(default=0)
    language = models.CharField(default='English', max_length=30)
    available_copies = models.PositiveIntegerField(default=0)
    borrowed_copies = models.PositiveIntegerField(default=0)


    def __str__(self):
        return self.title
    