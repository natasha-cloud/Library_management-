from django.urls import path
from . import views

urlpatterns = [
    path('api/patrons/', views.PatronList.as_view(), name='patron-list'),
    path('api/patron_detail/<uuid:pk>/', views.PatronDetail.as_view(), name='patron-detail'),
    path('api/serach/patron/<str:q>/', views.PatronSearch.as_view(), name='patron-search'),
    path('api/membershipcard_detail/<uuid:pk>/', views.MembershipCardDetail.as_view(), name='membershipcard-detail'),

]