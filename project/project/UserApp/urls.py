from django.urls import path
from . import views

urlpatterns = [
    path('Apply_for_job/', views.apply_for_job, name='apply_for_job'),
    path('Applied_jobs', views.view_applied_jobs, name='view_applied_jobs'),
    path('all_jobs', views.view_all_jobs, name='view_all_jobs'),
    path('ViewJopDetails/', views.item_detail, name='item_detail'),

]
