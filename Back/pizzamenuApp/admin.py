from django.contrib import admin #type: ignore
from .models import Pizza

# Register your models here.
# @admin.register(Pizza)
# class PizzaAdmin(admin.ModelAdmin):
#     list_display = ('name', 'price', 'sold_out')
#     list_filter = ('sold_out',)
#     search_fields = ('name', 'ingredients')
#     ordering = ('name',)
admin.site.register(Pizza)


