from django import forms
from django.shortcuts import render, redirect
from addnewjop.models import Job
from .models import JobApplication

from django.contrib import messages


def home(request):
    return render(request, 'applications/home.html')


def apply_for_job(request):
    class JobApplicationForm(forms.ModelForm):
        class Meta:
            model = JobApplication
            fields = ['fullname', 'email', 'phone', 'city', 'position', 'resume', 'additional_info']

    if request.method == 'POST':
        form = JobApplicationForm(request.POST, request.FILES)
        if form.is_valid():
            # 
            title = request.GET.get('title')
            titlevalue = title.replace('%20', '')
            
            applyed_job = Job.objects.get(title__icontains = titlevalue)

            # Update attributes of the job object
            applyed_job.apply = True

            # Save the updated job object to apply changes to the database
            applyed_job.save()
            form.save()

            #
            messages.success(request, 'Application submitted successfully.')
            return redirect('view_applied_jobs')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = JobApplicationForm()
    
    return render(request, 'User/job_application_form.html', {'form': form})


def view_applied_jobs(request):
    applyed_jobs = Job.objects.filter(apply = True)
    return render(request, 'User/applied_jobs.html', {'jobs': applyed_jobs, 'ApplyJobs' : True})

def view_all_jobs(request):
    all_jobs = Job.objects.all()
    return render(request, 'User/applied_jobs.html', {'jobs': all_jobs})

def item_detail(request):
    # Fetch the job opportunity data from the addnewjop app
    title = request.GET.get('title')
    titlevalue = title.replace('%20', '')
    
    selected_job = Job.objects.filter(title__icontains = titlevalue)
  # Assuming you want to retrieve the first job entry
    if selected_job:
        return render(request, 'User/viewjob.html', {'job': selected_job[0]})


    else:
        return render(request, 'User/viewjob.html', {'job': []})
