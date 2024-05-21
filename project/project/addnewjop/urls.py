from django.urls import path
from . import views
urlpatterns = [
    path('', views.add, name='addjop'),
    path('add/', views.add_new_job, name='add_new_job'),
    
]
