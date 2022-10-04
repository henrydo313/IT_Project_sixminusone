
from django.urls import path

from web.views import index

urlpatterns = [
    # 后台首页
    path('', index.index, name="web_index"),

]