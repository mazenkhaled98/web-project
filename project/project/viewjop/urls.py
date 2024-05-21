from django.urls import path
from . import views
urlpatterns = [
    path('', views.view, name='addjop'),
    path('jobdata/', views.view_job_opportunity, name='view_job_opportunity'),
]
