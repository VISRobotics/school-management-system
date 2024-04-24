from rest_framework import serializers
from .models import StudentMaster, FacultyMaster, Department

class StudentSerializer(serializers.ModelSerializer):
    dateofbirth = serializers.DateField(format='%Y-%m-%d', input_formats=['%Y-%m-%d', 'iso-8601'])
    dateofjoining = serializers.DateField(format='%Y-%m-%d', input_formats=['%Y-%m-%d', 'iso-8601'])

    class Meta:
        model = StudentMaster
        fields = '__all__'

class FacultySerializer(serializers.ModelSerializer):
    dateofjoining = serializers.DateField(format='%Y-%m-%d', input_formats=['%Y-%m-%d', 'iso-8601'])
    class Meta:
        model = FacultyMaster
        fields = '__all__'

# Define additional serializers similarly
class DepartmentSerializer(serializers.ModelSerializer):
    inceptiondate = serializers.DateField(format='%Y-%m-%d', input_formats=['%Y-%m-%d', 'iso-8601'])
    class Meta:
        model = Department
        fields = '__all__'