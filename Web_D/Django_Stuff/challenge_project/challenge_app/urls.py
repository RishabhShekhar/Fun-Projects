from django.conf.urls import url
from challenge_app import views

urlpatterns=[
    url('',views.user,name='user')
]
