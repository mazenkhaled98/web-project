from django.urls import path
from . import views
urlpatterns = [
    path('', views.edit, name='addjop'),
    path('jobdata/', views.get_job_data, name='get_job_data'),
    path('', views.edit_jop, name='edit_job'),
    
]
