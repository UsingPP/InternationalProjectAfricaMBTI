from django.urls import path
from .views import *
from django.views.generic import TemplateView 
urlpatterns = [
  path('', TemplateView.as_view(template_name = 'index.html')),
  path('api/transmit-survey-data/', TransmitSurveyDataApi.as_view(), name='transmit_survey_data'),
  path('api/question-add/', QuestionAddApi.as_view(), name='question-add'),
  path('api/question-list/', QuestionListApi.as_view(), name='question-list'),
  path('api/question_type-add/', QuestionTypeAddApi.as_view(), name='question_type-add'),
]
