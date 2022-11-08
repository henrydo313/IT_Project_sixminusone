# myobject/mobile/views/index.py
from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse('Welcome to Library mangement system！')