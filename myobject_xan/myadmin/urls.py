

from django.urls import path

from myadmin.views import index
from myadmin.views import category
urlpatterns = [
    # 后台首页
    path('', index.index, name="myadmin_index"),

    path('category/<int:pIndex>', category.index, name="myadmin_category_index"),#浏览信息
    path('category/add', category.add, name="myadmin_category_add"),             #加载添加表单
    path('category/insert', category.insert, name="myadmin_category_insert"),     #执行信息添加
    path('category/del/<int:cid>', category.delete, name="myadmin_category_delete"),#删除信息
    path('category/edit/<int:cid>', category.edit, name="myadmin_category_edit"),#准备信息编辑
    path('category/update/<int:cid>', category.update, name="myadmin_category_update"),#执行信息编辑

]