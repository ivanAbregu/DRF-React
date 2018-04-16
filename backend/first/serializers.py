from rest_framework import serializers
from django.contrib.auth.models import User,Group
from rest_framework.permissions import AllowAny
 
from .models import Employee

class EmployeeModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = '__all__'


class UserGroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        depth = 1


class UserWithFullGroupsSerializer(serializers.ModelSerializer):

    groups = UserGroupSerializer(many=True)

    class Meta:
        model = User
        depth = 2
        fields = ('id', 'first_name', 'last_name', 'username', 'groups', 'password', 'user_permissions', 'is_superuser', 'is_staff', 'is_active')


