from django.db import models

class Department(models.Model):
    departmentid = models.AutoField(primary_key=True) 
    departmentname = models.CharField(max_length=100)
    departmentcode = models.CharField(max_length=50)
    inceptiondate = models.DateField()
    class Meta:
        db_table = 'departments'  # Explicitly specifying the table name

class StudentMaster(models.Model):
    studentid = models.AutoField(primary_key=True) 
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    departmentid = models.ForeignKey(Department, on_delete=models.CASCADE, db_column='departmentid')
    dateofbirth = models.DateField()
    dateofjoining = models.DateField()
    governmentid = models.CharField(max_length=100)
    standard = models.CharField(max_length=50)
    def __str__(self):
        return f"{self.firstname} {self.lastname}"
    class Meta:
        db_table = 'studentmaster'  # Explicitly specifying the table name

class FacultyMaster(models.Model):
    facultyid = models.AutoField(primary_key=True) 
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    departmentid = models.ForeignKey(Department, on_delete=models.CASCADE, db_column='departmentid')
    dateofjoining = models.DateField()
    yearsofexperience = models.IntegerField()
    governmentid = models.CharField(max_length=100)
    class Meta:
        db_table = 'facultymaster'  # Explicitly specifying the table name
# Define additional models similarly
