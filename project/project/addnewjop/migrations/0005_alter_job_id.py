# Generated by Django 5.0.6 on 2024-05-21 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('addnewjop', '0004_remove_job_status_job_is_opened'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
