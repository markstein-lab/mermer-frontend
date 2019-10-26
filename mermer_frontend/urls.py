from django.urls import path
from mermer_frontend import views

urlpatterns = [
    path("", views.home, name="home"),
]