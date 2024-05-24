from django.urls import path 
from . import views

urlpatterns = [
    path('',views.log_in, name = 'Log_in'),
    path('Sign_Up',views.sign_Up, name = 'Sign_Up'),
]