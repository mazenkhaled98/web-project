from django.shortcuts import render


# Create your views here.
def log_in(request):
    return render(request, 'Auth/Log_in.html')
def sign_Up(request):
    return render(request, 'Auth/Sign_Up.html')   
def HomePage(request):
    return render(request, 'Auth/HomePage.html') 
