from django.shortcuts import render
from addnewjop.models import Job

# Create your views here.

def HomePage(request):

# return render(request, 'ViewAllJobs/HomePage.html') 
# def get_job_data(request):

    company = request.GET.get('company')
    all_jobs = Job.objects.all()

    if company:
        all_jobs = Job.objects.filter(company_name=company)
    else :
        all_jobs = []
    return render(request, 'ViewAllJobs/HomePage.html', {'all_jobs': all_jobs})