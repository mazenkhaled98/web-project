from django.urls import path
from . import views
urlpatterns = [
    path('job/<str:title>/', views.edit_jop, name='edit_jop'),

]
