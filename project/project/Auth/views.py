from django.shortcuts import render
from addnewjop.models import Job


# Create your views here.
def log_in(request):
    return render(request, 'Auth/Log_in.html')
def sign_Up(request):
    return render(request, 'Auth/Sign_Up.html')   
