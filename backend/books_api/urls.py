from django.urls import path

from . import views

urlpatterns = [
    path('api/',views.ApiList.as_view(), name='apis' ),
    path('api/books/', views.BookList.as_view(), name='book-list'),
    path('api/add/book/', views.CreateBook.as_view(), name='add-book'),
    path('api/search/book/<str:q>/', views.BookSearch.as_view(), name='search-book'),
    path('api/book/<int:pk>/', views.BookDetail.as_view(), name='book-detail'),
    path('api/book_copy/<int:pk>/', views.BookCopyDetail.as_view(), name='bookcopy-detail'),
    path('api/search/author/<str:q>/', views.AuthorSearch.as_view(), name='search-author'),
    path('api/book_authors/', views.AuthorList.as_view(), name='author-list'),
    path('api/create/book/author/', views.CreateAuthor.as_view(), name='create-author'),
    path('api/book_author/<int:pk>/', views.AuthorDetail.as_view(), name='author-detail'),
    path('api/book_genre/<int:pk>/', views.GenreDetail.as_view(), name='genre-detail'),
    path('api/book_categories/', views.CategoryList.as_view(), name='category-list'),
    path('api/book_category/<int:pk>/', views.CategoryDetail.as_view(), name='category-detail'),
    path('api/book_series/', views.BookSeriesList.as_view(), name='bookseries-list'),
    path('api/book_series/<int:pk>/', views.BookSeriesDetail.as_view(), name='bookseries-detail')
]