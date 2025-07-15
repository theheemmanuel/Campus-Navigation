from django.db import models
from django.utils.translation import gettext_lazy as _
from tinymce.models import HTMLField

# Create your models here.

class NavigationModel(models.Model):
    name = models.CharField(null= True, blank= True)
    details = HTMLField(blank=True, null=True)
    image = models.ImageField(upload_to='images/', blank=True, null= True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Navigations"