
from django.shortcuts import render
from django.http import HttpResponse
from django.core.paginator import Paginator
from django.db.models import Q
from datetime import datetime
import random, hashlib

from myadmin.models import User


def index(request, pIndex=1):
    umod = User.objects
    ulist = umod.filter(status__lt=9)
    mywhere=[]


    kw = request.GET.get("keyword",None)
    if kw:

        ulist = ulist.filter(Q(username__contains=kw) | Q(nickname__contains=kw))
        mywhere.append("keyword="+kw)


    pIndex = int(pIndex)
    page = Paginator(ulist,5)
    maxpages = page.num_pages


    if pIndex > maxpages:
        pIndex = maxpages
    if pIndex < 1:
        pIndex = 1
    list2 = page.page(pIndex)
    plist = page.page_range
    context = {"userlist":list2,'plist':plist,'pIndex':pIndex,'maxpages':maxpages, 'mywhere':mywhere}
    return render(request,"myadmin/user/index.html",context)


def add(request):
    return render(request,"myadmin/user/add.html")

def insert(request):
    try:
        ob = User()
        ob.username = request.POST['username']
        ob.nickname = request.POST['nickname']

        # Confirm password
        if request.POST['password'] != request.POST["repassword"]:
            context={"info":"Confirm password must match!"}
            return render(request,"myadmin/info.html",context)


        md5 = hashlib.md5()
        n = random.randint(100000, 999999)
        s = request.POST['password']+str(n)
        md5.update(s.encode('utf-8'))
        ob.password_hash = md5.hexdigest()
        ob.password_salt = n
        ob.status = 1
        ob.create_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        ob.update_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        ob.save()
        context={"info":"Add successful！"}
    except Exception as err:
        print(err)
        context={"info":"Add failed!"}
    return render(request,"myadmin/info.html",context)


def delete(request,uid):
    try:
        ob = User.objects.get(id=uid)
        ob.status = 9
        ob.update_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        ob.save()
        context={"info":"Delete successful！"}
    except Exception as err:
        print(err)
        context={"info":"Delete failed! "}

    return render(request,"myadmin/info.html",context)

def edit(request,uid):
    try:
        ob = User.objects.get(id=uid)
        context={"user":ob}
        return render(request,"myadmin/user/edit.html",context)
    except Exception as err:
        context={"info":"No edit info found！"}
        return render(request,"myadmin/info.html",context)

def update(request,uid):
    try:
        ob = User.objects.get(id=uid)
        ob.nickname = request.POST['nickname']
        ob.status = request.POST['status']
        ob.update_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        ob.save()
        context={"info":"Edit successful！"}
    except Exception as err:
        print(err)
        context={"info":"Edit failed! "}
    return render(request,"myadmin/info.html",context)
