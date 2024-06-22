from django.shortcuts import render,get_object_or_404,redirect
from addnewjop.models import Job
from django.http import JsonResponse
# Create your views here.
def delete(request):
    return render(request, 'deletejob/deletejob.html')

def deletejob(request , title):
    job = get_object_or_404(Job, pk=title)
    job.delete()    
    return render(request, 'deletejob/job_confirm_delete.html', {'title': title})

    
