from django.contrib import admin #type: ignore
from django.urls import path, include #type: ignore
from pizzamenuApp.views import PizzaListAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/pizzas/', PizzaListAPIView.as_view(), name='pizza-list'),
]