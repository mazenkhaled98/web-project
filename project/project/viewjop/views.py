from django.shortcuts import render
from django.http import JsonResponse
from addnewjop.models import Job

def view(request):
    return render(request, 'viewjop/viewjop.html')

def view_job_opportunity(request):
    # Fetch the job opportunity data from the addnewjop app
      # Fetch the job opportunity data from the addnewjop app
    title = request.GET.get('title')
    titlevalue = title.replace('%20', '')
    
    selected_job = Job.objects.filter(title__icontains = titlevalue)
  # Assuming you want to retrieve the first job entry
    if selected_job:
        return render(request, 'viewjop/viewjop.html', {'job': selected_job[0]})


    else:
        return render(request, 'viewjop/viewjop.html', {'job': []})
