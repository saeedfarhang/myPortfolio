from django.urls import path
from . import views


app_name = 'portfolio'
urlpatterns = [
    path('home',views.homeView)
]
