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
# myobject/web/urls.py

from django.urls import path

from web.views import index

from myadmin.views import user

urlpatterns = [
    path('', index.index0, name="web_index0"),
    path('page/<int:pIndex>', index.index, name="web_index"),
    path('cateEdu/<int:pIndex>', index.cateEdu, name="web_index_edu"),
    path('cateHealth/<int:pIndex>', index.cateHealth, name="web_index_health"),
    path('cateLaw/<int:pIndex>', index.cateLaw, name="web_index_law"),
    path('cateScience/<int:pIndex>', index.cateScience, name="web_index_science"),
    path('cateLiterature/<int:pIndex>', index.cateLiterature, name="web_index_literature"),
    path('cateBAE/<int:pIndex>', index.cateBAE, name="web_index_BAE"),
    path('book/<int:cid>', index.description, name="web_index_describe"),
    path('aboutus', index.aboutUs, name="about"),
   
    path('myadmin', index.login, name="web_login"),
]
