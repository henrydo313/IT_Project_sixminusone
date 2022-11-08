# myobject/myadmin/views/index.py
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

    return render(request,"myadmin/category/index.html",context)


def loadCategory(request,sid):
    clist = Category.objects.filter(status__lt=9,shop_id=sid).values("id","name")
    return JsonResponse({'data':list(clist)})

def add(request):
    return render(request,"myadmin/category/add.html")

def insert(request):
    try:
        ob = Category()
        #ob.id = request.POST['book_id']
        ob.name = request.POST['name']
        ob.ISBN = request.POST['ISBN']
        ob.genre = request.POST['genre']
        ob.author = request.POST['author']
        ob.description = request.POST['description']
        ob.image = request.FILES['image']
        ob.status = 1
        ob.create_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        ob.update_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        ob.save()
        context={"info":"Insert successful！"}
    except Exception as err:
        print(err)
        context={"info":"Insert failed!"}
    return render(request,"myadmin/info.html",context)



def delete(request,cid=0):
    try:
        ob = Category.objects.get(id=cid)
        ob.status = 9
        ob.update_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        ob.save()
        context={"info":"Delete successful！"}
    except Exception as err:
        print(err)
        context={"info":"Delete failed! "}

    return render(request,"myadmin/info.html",context)

def edit(request,cid=0):
    try:
        ob = Category.objects.get(id=cid)
        context={"category":ob}
        return render(request,"myadmin/category/edit.html",context)
    except Exception as err:
        context={"info":"No edit info found！"}
        return render(request,"myadmin/info.html",context)

def update(request,cid):
    try:

        ob = Category.objects.get(id=cid)
        ob.name = request.POST['name']
        ob.ISBN = request.POST['ISBN']
        ob.genre = request.POST['genre']
        ob.author = request.POST['author']
        ob.description = request.POST['description']
        ob.image = request.FILES['image']
        ob.status = request.POST['status']
        ob.update_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        ob.save()
        context={"info":"Edit successful！"}
    except Exception as err:
        print(err)
        context={"info":"Edit failed! "}
    return render(request,"myadmin/info.html",context)
