from django.urls import path
from .views import RoomView

urlpatterns = [
    path('api/' , RoomView.as_view() )
]
