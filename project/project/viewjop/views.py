from django.shortcuts import render
from django.http import JsonResponse
from addnewjop.models import Job

def view(request):
    return render(request, 'viewjop/viewjop.html')

def view_job_opportunity(request):
    # Fetch the job opportunity data from the addnewjop app
    job = Job.objects.first()  # Assuming you want to retrieve the first job entry

    if job:
        job_data = {

            'title': job.title,
            'salary': str(job.salary),
            'company_name': job.company_name,
            'status': job.is_opened,
            'description': job.description,
            'years_of_exp': job.years_of_exp
        }
        return JsonResponse(job_data)
    else:
        return JsonResponse({'error': 'No job data found'}, status=404)