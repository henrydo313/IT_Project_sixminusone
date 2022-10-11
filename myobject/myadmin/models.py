from django.db import models
from django.utils import timezone
from datetime import datetime

#员工账号信息模型
class User(models.Model):
    username = models.CharField(max_length=50)    #员工账号
    nickname = models.CharField(max_length=50)    #昵称
    password_hash = models.CharField(max_length=100)#密码
    password_salt = models.CharField(max_length=50)    #密码干扰值
    status = models.IntegerField(default=1)    #状态:1正常/2禁用/9删除
    create_at = models.DateTimeField(default=datetime.now)    #创建时间
    update_at = models.DateTimeField(default=datetime.now)    #修改时间

    def toDict(self):
        return {'id':self.id,'username':self.username,'nickname':self.nickname,'password_hash':self.password_hash,'password_salt':self.password_salt,'status':self.status,'create_at':self.create_at.strftime('%Y-%m-%d %H:%M:%S'),'update_at':self.update_at.strftime('%Y-%m-%d %H:%M:%S')}

    class Meta:
        db_table = "user"  # 更改表名

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