"""myobject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from myadmin.views import index
from myadmin.views import user
from myadmin.views import category

urlpatterns = [

    path('', index.index, name="myadmin_index"),



    path('login', index.login, name="myadmin_login"),
    path('dologin', index.dologin, name="myadmin_dologin"),
    path('logout', index.logout, name="myadmin_logout"),
    path('verify', index.verify, name="myadmin_verify"),


    path('user/<int:pIndex>', user.index, name="myadmin_user_index"),
    path('user/add', user.add, name="myadmin_user_add"),
    path('user/insert', user.insert, name="myadmin_user_insert"),
    path('user/del/<int:uid>', user.delete, name="myadmin_user_delete"),
    path('user/edit/<int:uid>', user.edit, name="myadmin_user_edit"),
    path('user/update/<int:uid>', user.update, name="myadmin_user_update"),


    path('user/category/<int:pIndex>', category.index, name="myadmin_category_index"),
    path('user/category/add', category.add, name="myadmin_category_add"),
    path('user/category/insert', category.insert, name="myadmin_category_insert"),
    path('user/category/del/<int:cid>', category.delete, name="myadmin_category_delete"),
    path('user/category/edit/<int:cid>', category.edit, name="myadmin_category_edit"),
    path('user/category/update/<int:cid>', category.update, name="myadmin_category_update"),
]