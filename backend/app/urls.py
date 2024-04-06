from django.urls import path
from app.views import *
from django.views.generic import TemplateView

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
       path('', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('home/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('result/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('signin/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분

   path('signup/', SignUp.as_view()),
    path('login/', SignIn.as_view()),
    path('recievedata/', RecieveData.as_view()),
    path("send_result/", send_result.as_view())

  # path('api/transmit-survey-data/', TransmitSurveyDataApi.as_view(), name='transmit_survey_data'),
]
