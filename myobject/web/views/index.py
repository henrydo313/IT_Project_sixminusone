# myobject/web/views/index.py
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.core.paginator import Paginator
from django.db.models import Q
from datetime import datetime
import random, hashlib

from myadmin.models import Category

#前台首页
def index(request, pIndex=1):
    smod = Category.objects
    ulist = smod.filter(status__lt=9)
    mywhere=[]

    # 获取、判断并封装关keyword键搜索
    kw = request.GET.get("keyword",None)
    if kw:
        # 查询员工账号或昵称中只要含有关键字的都可以
        ulist = ulist.filter(Q(name__contains=kw)|Q(genre__contains=kw)|Q(author__contains=kw))
        mywhere.append("keyword="+kw)

    status = request.GET.get('status','')
    if status != '':
        ulist = ulist.filter(status=status)
        mywhere.append("status="+status)


    #执行分页处理
    pIndex = int(pIndex)
    page = Paginator(ulist,2)#以5条每页创建分页对象
    maxpages = page.num_pages #最大页数

    #判断页数是否越界
    if pIndex > maxpages:
        pIndex = maxpages
    if pIndex < 1:
        pIndex = 1
    list2 = page.page(pIndex) #当前页数据
    plist = page.page_range   #页码数列表
    

    context = {"categorylist":list2,'plist':plist,'pIndex':pIndex,'maxpages':maxpages, 'mywhere':mywhere}

    return render(request,"home/book2.html",context)


def index0(request):
    return render(request,"home/Home.html")



def login(request):
    return render(request,"myadmin/login.html")
    



