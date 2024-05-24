from django.shortcuts import render
from addnewjop.models import Job

# Create your views here.

def HomePage(request):

# return render(request, 'ViewAllJobs/HomePage.html') 
# def get_job_data(request):
    all_jobs = Job.objects.all() 
    return render(request, 'ViewAllJobs/HomePage.html', {'all_jobs': all_jobs})