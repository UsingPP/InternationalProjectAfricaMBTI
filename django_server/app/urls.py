from django.urls import path
from .views import *
urlpatterns = [
  path('api/transmit-survey-data/', TransmitSurveyDataApi.as_view(), name='transmit_survey_data'),
  path('api/question-add/', QuestionAddApi.as_view(), name='question-add'),
  path('api/question-list/', QuestionListApi.as_view(), name='question-list'),
  path('api/question_type-add/', QuestionTypeAddApi.as_view(), name='question_type-add'),
]
