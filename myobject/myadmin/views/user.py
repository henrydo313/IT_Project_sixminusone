# myobject/myadmin/views/index.py
from django.shortcuts import render
from django.http import HttpResponse
from django.core.paginator import Paginator

from myadmin.models import User

#后台首页
def index(request, pIndex=1):
    umod = User.objects
    ulist = umod.filter(status__lt=9)

    #执行分页处理
    pIndex = int(pIndex)
    page = Paginator(ulist,5) #以5条每页创建分页对象
    maxpages = page.num_pages #最大页数
    #判断页数是否越界
    if pIndex > maxpages:
        pIndex = maxpages
    if pIndex < 1:
        pIndex = 1
    list2 = page.page(pIndex) #当前页数据
    plist = page.page_range   #页码数列表
    context = {"userlist":list2,'plist':plist,'pIndex':pIndex,'maxpages':maxpages}
    return render(request,"myadmin/user/index.html",context)


def add(request):
    pass

def insert(request):
    pass

def delete(request,uid):
    pass

def edit(request,uid):
    pass

def update(request,uid):
    pass