from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet, FacultyViewSet, DepartmentViewSet

router = DefaultRouter()
router.register('students', StudentViewSet)
router.register('faculty', FacultyViewSet)
router.register('departments', DepartmentViewSet)  # Ensure plural form to match convention

urlpatterns = [
    path('', include(router.urls)),
]
