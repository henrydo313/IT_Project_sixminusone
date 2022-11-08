
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.core.paginator import Paginator
from django.db.models import Q
from datetime import datetime
import random, hashlib

from myadmin.models import Category

def index(request, pIndex=1):
    smod = Category.objects
    ulist = smod.filter(status__lt=9)
    mywhere=[]




    kw = request.GET.get("keyword",None)
    if kw:
        ulist = ulist.filter(Q(name__contains=kw)|Q(genre__contains=kw)|Q(author__contains=kw))
        mywhere.append("keyword="+kw)

    status = request.GET.get('status','')
    if status != '':
        ulist = ulist.filter(status=status)
        mywhere.append("status="+status)



    pIndex = int(pIndex)
    page = Paginator(ulist,5)
    maxpages = page.num_pages


    if pIndex > maxpages:
        pIndex = maxpages
    if pIndex < 1:
        pIndex = 1
    list2 = page.page(pIndex)
    plist = page.page_range


    context = {"categorylist":list2,'plist':plist,'pIndex':pIndex,'maxpages':maxpages, 'mywhere':mywhere}

    return render(request,"home/book2.html",context)


def index0(request):
    smod = Category.objects
    ulist = smod.filter(status__lt=9).order_by("-id")[:5]
    context = {"alllist":ulist}
    return render(request,"home/Home.html",context)



def login(request):
    return render(request,"myadmin/index/login.html")


def cateEdu(request, pIndex=1):
    smod = Category.objects
    ulist = smod.filter(status__lt=9)
    mywhere=[]

    kw = "Education"
    if kw:

        ulist = ulist.filter(Q(genre__contains=kw))
        mywhere.append("keyword="+kw)

    status = request.GET.get('status','')
    if status != '':
        ulist = ulist.filter(status=status)
        mywhere.append("status="+status)


    pIndex = int(pIndex)
    page = Paginator(ulist,5)
    maxpages = page.num_pages


    if pIndex > maxpages:
        pIndex = maxpages
    if pIndex < 1:
        pIndex = 1
    list2 = page.page(pIndex)
    plist = page.page_range


    context = {"categorylist":list2,'plist':plist,'pIndex':pIndex,'maxpages':maxpages, 'mywhere':mywhere}

    return render(request,"home/book2.html",context)







def cateBAE(request, pIndex=1):
    smod = Category.objects
    ulist = smod.filter(status__lt=9)
    mywhere=[]

    kw = "Business and Econ"
    if kw:

        ulist = ulist.filter(Q(genre__contains=kw))
        mywhere.append("keyword="+kw)

    status = request.GET.get('status','')
    if status != '':
        ulist = ulist.filter(status=status)
        mywhere.append("status="+status)


    pIndex = int(pIndex)
    page = Paginator(ulist,5)
    maxpages = page.num_pages


    if pIndex > maxpages:
        pIndex = maxpages
    if pIndex < 1:
        pIndex = 1
    list2 = page.page(pIndex)
    plist = page.page_range


    context = {"categorylist":list2,'plist':plist,'pIndex':pIndex,'maxpages':maxpages, 'mywhere':mywhere}

    return render(request,"home/book2.html",context)


def cateLiterature(request, pIndex=1):
    smod = Category.objects
    ulist = smod.filter(status__lt=9)
    mywhere=[]

    kw = "Literature"
    if kw:
        ulist = ulist.filter(Q(genre__contains=kw))
        mywhere.append("keyword="+kw)

    status = request.GET.get('status','')
    if status != '':
        ulist = ulist.filter(status=status)
        mywhere.append("status="+status)


    pIndex = int(pIndex)
    page = Paginator(ulist,5)
    maxpages = page.num_pages


    if pIndex > maxpages:
        pIndex = maxpages
    if pIndex < 1:
        pIndex = 1
    list2 = page.page(pIndex)
    plist = page.page_range


    context = {"categorylist":list2,'plist':plist,'pIndex':pIndex,'maxpages':maxpages, 'mywhere':mywhere}

    return render(request,"home/book2.html",context)



def cateScience(request, pIndex=1):
    smod = Category.objects
    ulist = smod.filter(status__lt=9)
    mywhere=[]


    kw = "Science"
    if kw:

        ulist = ulist.filter(Q(genre__contains=kw))
        mywhere.append("keyword="+kw)

    status = request.GET.get('status','')
    if status != '':
        ulist = ulist.filter(status=status)
        mywhere.append("status="+status)


    pIndex = int(pIndex)
    page = Paginator(ulist,5)
    maxpages = page.num_pages

    if pIndex > maxpages:
        pIndex = maxpages
    if pIndex < 1:
        pIndex = 1
    list2 = page.page(pIndex)
    plist = page.page_range


    context = {"categorylist":list2,'plist':plist,'pIndex':pIndex,'maxpages':maxpages, 'mywhere':mywhere}

    return render(request,"home/book2.html",context)




def cateLaw(request, pIndex=1):
    smod = Category.objects
    ulist = smod.filter(status__lt=9)
    mywhere=[]


    kw = "Law"
    if kw:
        ulist = ulist.filter(Q(genre__contains=kw))
        mywhere.append("keyword="+kw)

    status = request.GET.get('status','')
    if status != '':
        ulist = ulist.filter(status=status)
        mywhere.append("status="+status)

    pIndex = int(pIndex)
    page = Paginator(ulist,5)
    maxpages = page.num_pages


    if pIndex > maxpages:
        pIndex = maxpages
    if pIndex < 1:
        pIndex = 1
    list2 = page.page(pIndex)
    plist = page.page_range


    context = {"categorylist":list2,'plist':plist,'pIndex':pIndex,'maxpages':maxpages, 'mywhere':mywhere}

    return render(request,"home/book2.html",context)




def cateHealth(request, pIndex=1):
    smod = Category.objects
    ulist = smod.filter(status__lt=9)
    mywhere=[]

    kw = "Health"
    if kw:

        ulist = ulist.filter(Q(genre__contains=kw))
        mywhere.append("keyword="+kw)

    status = request.GET.get('status','')
    if status != '':
        ulist = ulist.filter(status=status)
        mywhere.append("status="+status)


    pIndex = int(pIndex)
    page = Paginator(ulist,5)
    maxpages = page.num_pages


    if pIndex > maxpages:
        pIndex = maxpages
    if pIndex < 1:
        pIndex = 1
    list2 = page.page(pIndex)
    plist = page.page_range


    context = {"categorylist":list2,'plist':plist,'pIndex':pIndex,'maxpages':maxpages, 'mywhere':mywhere}

    return render(request,"home/book2.html",context)



def description(request,cid=0):
    try:
        ob = Category.objects.get(id=cid)
        context={"book":ob}
        return render(request,"home/Book.html",context)
    except Exception as err:
        context={"info":"book info found！"}
        return render(request,"myadmin/info.html",context)



def aboutUs(request):
    return render(request,"home/AboutUs.html")





