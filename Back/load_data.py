import os
import django #type: ignore


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pizzamenu.settings')
django.setup()

from pizzamenuApp.models import Pizza

pizza_data = [
    {
        "name": "Focaccia",
        "ingredients": "Bread with italian olive oil and rosemary",
        "price": 6,
        "photo_name": "pizzas/focaccia.jpg",
        "sold_out": False,
    },
    {
        "name": "Pizza Margherita",
        "ingredients": "Tomato and mozarella",
        "price": 10,
        "photo_name": "pizzas/margherita.jpg",
        "sold_out": False,
    },
    {
        "name": "Pizza Spinaci",
        "ingredients": "Tomato, mozarella, spinach, and ricotta cheese",
        "price": 12,
        "photo_name": "pizzas/spinaci.jpg",
        "sold_out": False,
    },
    {
        "name": "Pizza Funghi",
        "ingredients": "Tomato, mozarella, mushrooms, and onion",
        "price": 12,
        "photo_name": "pizzas/funghi.jpg",
        "sold_out": True,
    },
    {
        "name": "Pizza Salamino",
        "ingredients": "Tomato, mozarella, and pepperoni",
        "price": 15.00,
        "photo_name": "pizzas/salamino.jpg",
        "sold_out": False,
    },
    {
        "name": "Pizza Prosciutto",
        "ingredients": "Tomato, mozarella, ham, aragula, and burrata cheese",
        "price": 18,
        "photo_name": "pizzas/prosciutto.jpg",
        "sold_out": False,
    },
]

for pizza in pizza_data:
    Pizza.objects.create(**pizza)

print("Data loaded successfully")