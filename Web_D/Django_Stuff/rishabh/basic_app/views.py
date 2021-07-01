from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    return HttpResponse("Hello World")

def hello(request):
    return render(request,"basic_app/hello.html")
