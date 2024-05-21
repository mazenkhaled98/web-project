from django.shortcuts import render,get_object_or_404,redirect
from addnewjop.models import Job
from django.http import JsonResponse
# Create your views here.
def edit(request):
    return render(request, 'editjop/editjop.html')


def get_job_data(request):
    job = Job.objects.first() 
    if job:
        job_data = {
            'title': job.title,
            'salary': job.salary,
            'company_name': job.company_name,
            'years_of_exp': job.years_of_exp,
            'description': job.description,
        }
        return JsonResponse(job_data)
    else:
        return JsonResponse({'error': 'No job data found'}, status=404)
    
def edit_jop(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        salary = request.POST.get('salary')
        company_name = request.POST.get('company_name')
        status = request.POST.get('status')
        years_of_exp = request.POST.get('years_of_exp')
        description = request.POST.get('description')
        job = get_object_or_404(Job, title=title)
        Job.salary = salary
        Job.company_name = company_name
        Job.is_opened = status
        Job.years_of_exp = years_of_exp
        Job.description = description
        Job.save()
        return JsonResponse({'message': 'Job added successfully'})
    return JsonResponse({'error': 'Invalid request method'})