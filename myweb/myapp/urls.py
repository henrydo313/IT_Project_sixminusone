from django.urls import path
from . import views
urlpatterns = [
    path('',views.index, name="index"),
    
    path('books',views.indexBooks, name="indexbooks"),
    path('books/add',views.addBooks, name="addbooks"),
    path('books/insert',views.insertBooks, name="insertbooks"),
    path('books/del/<int:uid>',views.delBooks, name="delbooks"),
    path('books/edit/<int:uid>',views.editBooks, name="editbooks"),
    path('books/update',views.updateBooks, name="updatebooks"),
]