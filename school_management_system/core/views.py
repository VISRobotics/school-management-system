from .models import StudentMaster, FacultyMaster,Department
from .serializers import StudentSerializer, FacultySerializer,DepartmentSerializer
from django.http import HttpResponse
from rest_framework import viewsets, status
from rest_framework.response import Response

class StudentViewSet(viewsets.ModelViewSet):
    queryset = StudentMaster.objects.all()
    serializer_class = StudentSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print("Validation failed:", serializer.errors)  # Log validation errors
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class FacultyViewSet(viewsets.ModelViewSet):
    queryset = FacultyMaster.objects.all()
    serializer_class = FacultySerializer
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print("Validation failed:", serializer.errors)  # Log validation errors
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print("Validation failed:", serializer.errors)  # Log validation errors
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    



def home(request):
    return HttpResponse("Welcome to the School Management System!")

# Define additional viewsets similarly
