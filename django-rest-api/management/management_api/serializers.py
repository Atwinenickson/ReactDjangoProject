from rest_framework import generics, permissions, serializers
from django.urls import path, include
from django.contrib.auth.models import User, Group
from django.contrib import admin
admin.autodiscover()

from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope




# first we define the serializers
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('phone', "first_name", "last_name")

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ("name", )


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('phone', 'password')

class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('phone', 'password')
        write_only_fields = ('password',)