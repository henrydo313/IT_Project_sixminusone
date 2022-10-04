
from django.urls import path

from mobile.views import index

urlpatterns = [
    # 后台首页
    path('', index.index, name="mobile_index"),

]