from rest_framework.response import Response #type: ignore
from rest_framework.views import APIView #type: ignore
from .models import Pizza
from .serializers import PizzaSerializer

# Create your views here.
class PizzaListAPIView(APIView):
    def get(self, request):
        pizzas = Pizza.objects.all()
        serializer = PizzaSerializer(pizzas, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PizzaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)