from django.shortcuts import render
from django.http import HttpResponse
from myapp.models import Books

# Create your views here.
def index(request):

    # add
    #ob = Books()
    #ob.name = "The Silence of the Lambs"
    #ob.genre = 'Thriller'
    #ob.ISBN = '9781349913817'
    #ob.author = 'Thomas Harris'
    #ob.save()

    # delete
    
    #mod = Books.objects()
    #book = mod.get(id=1)
    #print(book.name)
    #book.delete

    #alter
    #ob = Books.objects.get(id=2)
    #print(ob.name)
    #ob.author = 'Alex'
    #ob.save()
    
    #find
    #mod = Books.objects
    #booklist = mod.all()
    #filter_booklist = mod.filter()
    #ordered_booklist = mod.order_by()


    #for book in booklist:
     #   print(book.name)


    return HttpResponse("Homepage <br/> <a href='/books'>Book List Management</a>")


def indexBooks(request):
    try:
       blist = Books.objects.all() 
       context = {"booklist":blist}
       return render(request,"myapp/books/index.html",context)
    except:
        return HttpResponse("Can't find book information")

def addBooks(request):
    return render(request,"myapp/books/add.html")
    

def insertBooks(request):
    try:
        ob = Books()
        ob.name = request.POST['name']
        ob.genre = request.POST['genre']
        ob.ISBN = request.POST['ISBN']
        ob.author = request.POST['author']
        #ob.image
        ob.save()
        context = {"info": "Insert Successful"}
    except:
        context = {"info": "Insert Failed"}

    return render(request,"myapp/books/info.html",context)
    

def delBooks(request,uid =0):
    try:
        ob = Books.objects.get(id=uid)
        ob.delete()
        
        context = {"info": "Delete Successful"}
    except:
        context = {"info": "Delete Failed"}

    return render(request,"myapp/books/info.html",context)

def editBooks(request,uid=0):
    try:
        ob = Books.objects.get(id=uid)
        context = {"book": ob}
        return render(request,"myapp/books/edit.html",context)

    except:
        context = {"info": "Can't find information that needed to be edited"}

        return render(request,"myapp/books/info.html",context)

def updateBooks(request):
    try:
        uid = request.POST['id']
        ob = Books.objects.get(id = uid)
        
        ob.name = request.POST['name']
        ob.genre = request.POST['genre']
        ob.ISBN = request.POST['ISBN']
        ob.author = request.POST['author']
        ob.save()
        context = {"info": "Update Successful"}
    except:
        context = {"info": "Update Failed"}

    return render(request,"myapp/books/info.html",context)
    