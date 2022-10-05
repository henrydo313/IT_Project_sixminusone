# myobject/myadmin/views/index.py
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.core.paginator import Paginator
from django.db.models import Q
from datetime import datetime
import random, hashlib

from myadmin.models import Category

#后台首页
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
    page = Paginator(ulist,5) #以5条每页创建分页对象
    maxpages = page.num_pages #最大页数

    #判断页数是否越界
    if pIndex > maxpages:
        pIndex = maxpages
    if pIndex < 1:
        pIndex = 1
    list2 = page.page(pIndex) #当前页数据
    plist = page.page_range   #页码数列表
    

    context = {"categorylist":list2,'plist':plist,'pIndex':pIndex,'maxpages':maxpages, 'mywhere':mywhere}

    return render(request,"myadmin/category/index.html",context)
    

def loadCategory(request,sid):
    clist = Category.objects.filter(status__lt=9,shop_id=sid).values("id","name")
    #返回QuerySet对象，使用list强转成对应的菜品分类列表信息
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
