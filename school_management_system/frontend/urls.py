from .views import index
from django.urls import path, include  # include is necessary to include other URLconfs

urlpatterns = [
    path('', index, name='index'),
    path('student/', index, name='student'),
    path('faculty/', index, name='faculty'),
    path('department/', index, name='department'),
    path('api/', include('core.urls')),  # This line includes your API URLs under '/api/'
]
