from django.urls import path
from . import views

# Create your views here.
urlpatterns = [
    #path('admin/', admin.site.urls),
    path('', views.index, name="index"),
    path('users', views.indexUsers, name="indexusers"),
    path('users/add', views.addUsers, name="addusers"),
    path('users/insert', views.insertUsers, name="insertusers"),
    path('users/del/<int:uid>', views.delUsers, name="delusers"),
    path('users/edit/<int:uid>', views.editUsers, name="editusers"),
    path('users/update', views.updateUsers, name="updateusers"),
]