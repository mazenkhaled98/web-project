from django.urls import path
from . import views
urlpatterns = [
    path('job/<str:title>/', views.deletejob, name='deletejob'),

]
