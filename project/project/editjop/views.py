from django.shortcuts import render,get_object_or_404,redirect
from addnewjop.models import Job
from django.http import JsonResponse
# Create your views here.
def edit(request):
    return render(request, 'editjop/editjop.html')

def edit_jop(request , title):
    job = get_object_or_404(Job, pk=title)
    if request.method == 'POST':
        job.title = request.POST.get('title')
        job.description = request.POST.get('description')
        job.salary = request.POST.get('salary')  # Ensure you are getting the salary field from the form
        job.save()
        return JsonResponse({'message': 'Job added successfully'})

    
    return render(request, 'editjop/editjop.html', {'job': job})

    # return JsonResponse({'message': 'Job Updated successfully'})
    # return JsonResponse({'error': 'Invalid request method'})