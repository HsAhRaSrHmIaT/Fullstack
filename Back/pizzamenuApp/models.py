from django.db import models #type: ignore

# Create your models here.
class Pizza(models.Model):
    name = models.CharField(max_length=100)
    ingredients = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    photo_name = models.CharField(max_length=200)
    sold_out = models.BooleanField(default=False)

    def __str__(self):
        return self.name