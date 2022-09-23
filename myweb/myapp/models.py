from django.db import models
from datetime import datetime, tzinfo
from django.utils import timezone

# Create your models here.
class Books(models.Model):

    
    #id = models.AutoField(primary_key=True) #主键可省略不写
    name = models.CharField(max_length=100)
    #age = models.IntegerField(default=20)
    ISBN = models.CharField(max_length=16)
    genre = models.CharField(max_length=16)
    author = models.CharField(max_length=100,default='UNKNOWN')
    addtime=models.DateTimeField(default=timezone.now)

#class Meta:
#    db_table = "myapp_users"  # 指定表名