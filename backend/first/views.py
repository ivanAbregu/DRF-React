from django_filters import rest_framework as filters

from rest_framework.viewsets import ModelViewSet
from rest_framework import generics
from rest_framework.response import Response

from .models import Employee
from .serializers import *


class EmployeeFilter(filters.FilterSet):

	class Meta:
		model = Employee
		fields = ('name',)

class EmployeeModelViewSet(ModelViewSet):
	queryset = Employee.objects.all().order_by('-id')
	serializer_class = EmployeeModelSerializer
	#permission_classes = (MOorOAccessPermission,)
	http_method_names = ['get','post',u'put']
	filter_class = EmployeeFilter

	def get_queryset(self):
		return super(EmployeeModelViewSet, self).get_queryset()

class CheckAuthView(generics.views.APIView):
    def get(self, request, *args, **kwargs):
        return Response(UserWithFullGroupsSerializer(request.user).data)