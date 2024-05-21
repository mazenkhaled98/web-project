from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=100, primary_key=True)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    company_name = models.CharField(max_length=100)
    is_opened = models.BooleanField(default=True)
    years_of_exp = models.IntegerField()
    description = models.TextField(null=True,blank=True)

    def __str__(self):
        return self.title