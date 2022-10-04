from django.db import models
from django.utils import timezone
from datetime import datetime, tzinfo
# Create your models here.



#菜品分类信息模型
class Category(models.Model):
    #id = models.AutoField(primary_key=True) #主键可省略不写
    name = models.CharField(max_length=100)
    ISBN = models.CharField(max_length=16)
    status = models.IntegerField(default=1)
    genre = models.CharField(max_length=50)
    author = models.CharField(max_length=100,default='UNKNOWN')
    description = models.CharField(max_length=10000, default='-')
    image = models.ImageField(null=True, blank = True, upload_to = "images/")
    addtime=models.DateTimeField(default=timezone.now)
    create_at = models.DateTimeField(default=datetime.now)    #创建时间
    update_at = models.DateTimeField(default=datetime.now) 
    class Meta:
        db_table = "category"  # 更改表名