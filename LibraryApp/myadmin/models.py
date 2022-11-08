from django.db import models
from django.utils import timezone
from datetime import datetime


class User(models.Model):
    username = models.CharField(max_length=50)
    nickname = models.CharField(max_length=50)
    password_hash = models.CharField(max_length=100)
    password_salt = models.CharField(max_length=50)
    status = models.IntegerField(default=1)
    create_at = models.DateTimeField(default=datetime.now)
    update_at = models.DateTimeField(default=datetime.now)

    def toDict(self):
        return {'id':self.id,'username':self.username,'nickname':self.nickname,'password_hash':self.password_hash,'password_salt':self.password_salt,'status':self.status,'create_at':self.create_at.strftime('%Y-%m-%d %H:%M:%S'),'update_at':self.update_at.strftime('%Y-%m-%d %H:%M:%S')}

    class Meta:
        db_table = "user"


class Category(models.Model):
    #id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    ISBN = models.CharField(max_length=16)
    status = models.IntegerField(default=1)
    genre = models.CharField(max_length=50)
    author = models.CharField(max_length=100,default='UNKNOWN')
    description = models.CharField(max_length=10000, default='-')
    image = models.ImageField(null=True, blank = True, upload_to = "images/")
    addtime=models.DateTimeField(default=datetime.now)
    create_at = models.DateTimeField(default=datetime.now)
    update_at = models.DateTimeField(default=datetime.now)
    class Meta:
        db_table = "category"