from django.shortcuts import render
from django.http import HttpResponse

#前台首页
def index(request):
    return HttpResponse('Welcome to the front page')