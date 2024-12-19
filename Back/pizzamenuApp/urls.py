from django.urls import path #type: ignore
from . import views

urlpatterns = [
    path('api/pizzas/', views.pizza_list),
]