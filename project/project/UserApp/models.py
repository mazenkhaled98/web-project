from django.db import models

# Create your models here.
class JobApplication(models.Model):
    fullname = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    city = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    resume = models.FileField(upload_to='resumes/')
    additional_info = models.TextField()

    def __str__(self):
        return self.fullname