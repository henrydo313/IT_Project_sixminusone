from django.shortcuts import render
from django.http import HttpResponse
from myapp.models import Users

# Create your views here.
def index(request):
    # insert
    
    #ob = Users()
    #ob.name = "Bob"
    #ob.age = 19
    #ob.phone = 990002
    #ob.save()
    

    # delete
    #mod = Users.objects
    #user = mod.get(id=1)
    #print(user.name)
    #user.delete()

    #edit
    ob = Users.objects.get(id=4)
    #print(ob.name)
    #ob.name = "Amy"
    #ob.age = 30
    #ob.save()

    #search
    #
    mod = Users.objects
    ulist = mod.all()
    #ulist = mod.filter(name='Bob')
    #ulist = mod.filter(age__gt=19)   #age >19
    #ulist = mod.filter(age__gte=19) 
    #ulist = mod.filter(age__lte=29)
    #ulist = mod.order_by("age")[:3]       #ASCEND

    for u in ulist:
        print(u.id, u.name, u.age, u.phone, u.addtime)



    return HttpResponse("Home page <br/> <a href='/users'>User info management</a>")
    

#view user info
def indexUsers(request):
    try:
        ulist = Users.objects.all()
        context = {"userlist":ulist}
        return render(request, "myapp/users/index.html", context) #加载模版
    except:
        return HttpResponse("No user info found")
    

def addUsers(request):
    return render(request, "myapp/users/add.html")

def insertUsers(request):
    try:
        ob = Users()
        ob.name = request.POST['name']
        ob.age = request.POST['age']
        ob.phone = request.POST['phone']
        print(ob.name)
        print(ob.age)
        print(ob.phone)
        ob.save()
        context = {"info":"Add succeeded! "}

    except:
        conext = {"info":"Add failed! "}
    return render(request, "myapp/users/info.html", context)
        


def delUsers(request, uid=0):
    try:
        ob = Users.objects.get(id=uid)
        ob.delete()
        context = {"info":"Delete succeeded! "}

    except:
        conext = {"info":"Delete failed! "}
    return render(request, "myapp/users/info.html", context)

def editUsers(request, uid=0):
    try:
        ob = Users.objects.get(id=uid)
        context = {"user":ob}
        return render(request, "myapp/users/edit.html", context)

    except:
        conext = {"info":"Edit info not found! "}
        return render(request, "myapp/users/info.html", context)
    
    

def updateUsers(request):
    try:
        uid = request.POST['id']
        ob = Users.objects.get(id=uid)
        ob.name = request.POST['name']
        ob.age = request.POST['age']
        ob.phone = request.POST['phone']
        ob.save()
        context = {"info":"Edit succeeded! "}

    except:
        conext = {"info":"Edit failed! "}
    return render(request, "myapp/users/info.html", context)
    
