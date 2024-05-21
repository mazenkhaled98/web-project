from django.http import JsonResponse
from .models import Job
from django.shortcuts import render
def add_new_job(request):
    if request.method == 'POST':
        # Extract form data
        title = request.POST.get('title')
        salary = request.POST.get('salary')
        company_name = request.POST.get('company_name')
        status = request.POST.get('status')
        years_of_exp = request.POST.get('years_of_exp')
        description = request.POST.get('description')
        
        # Save to database
        job = Job.objects.create(
            title=title,
            salary=salary,
            company_name=company_name,
            is_opened=status == 'opened',  
            years_of_exp=years_of_exp,
            description=description,
            
)
        
        return JsonResponse({'message': 'Job added successfully'})
    return JsonResponse({'error': 'Invalid request method'})

def add(request):
    return render(request, 'addnewjop/addnewjop.html')