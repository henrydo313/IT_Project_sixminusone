# myobject/myadmin/views/index.py
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect
from django.urls import reverse

from myadmin.models import User


def index(request):
    return render(request,"myadmin/index/index.html")


def login(request):
    return render(request,'myadmin/index/login.html')


def dologin(request):

    try:
        verifycode = request.session['verifycode']
        code = request.POST['code']
        if verifycode != code:
            context = {'info':'Incorrect verification code! '}
            return render(request,"myadmin/index/login.html",context)


        user = User.objects.get(username=request.POST['username'])
        if user.status == 6:
            import hashlib
            md5 = hashlib.md5()
            n = user.password_salt
            s = request.POST['pass']+str(n)
            md5.update(s.encode('utf-8'))
            if user.password_hash == md5.hexdigest():
                print("login successful")
                request.session['adminuser']=user.toDict()
                return redirect(reverse('myadmin_index'))
            else:
                context={"info":"Incorrect password! "}
        else:
            context={"info":"Account is not an Admin！"}


    except Exception as err:
        print(err)
        context={"info":"Username does not exist！"}
    return render(request,"myadmin/index/login.html",context)

def logout(request):
    del request.session['adminuser']
    return redirect(reverse('myadmin_login'))



def verify(request):
    import random
    from PIL import Image, ImageDraw, ImageFont
    bgcolor = (242,164,247)
    width = 100
    height = 25
    im = Image.new('RGB', (width, height), bgcolor)
    draw = ImageDraw.Draw(im)
    for i in range(0, 100):
        xy = (random.randrange(0, width), random.randrange(0, height))
        fill = (random.randrange(0, 255), 255, random.randrange(0, 255))
        draw.point(xy, fill=fill)
    str1 = '0123456789'
    rand_str = ''
    for i in range(0, 4):
        rand_str += str1[random.randrange(0, len(str1))]
    font = ImageFont.load_default()




    fontcolor = (255, random.randrange(0, 255), random.randrange(0, 255))
    draw.text((5, 2), rand_str[0], font=font, fill=fontcolor)
    draw.text((25, 2), rand_str[1], font=font, fill=fontcolor)
    draw.text((50, 2), rand_str[2], font=font, fill=fontcolor)
    draw.text((75, 2), rand_str[3], font=font, fill=fontcolor)
    del draw
    request.session['verifycode'] = rand_str

    import io
    buf = io.BytesIO()
    im.save(buf, 'png')
    return HttpResponse(buf.getvalue(), 'image/png')