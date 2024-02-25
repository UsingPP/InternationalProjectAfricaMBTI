from django.urls import path
from .views import *
urlpatterns = [
  path('api/transmit-survey-data/', TransmitSurveyDataApi.as_view(), name='transmit_survey_data'),
  path('api/question-add/', QuestionAddApi.as_view(), name='question-add'),
]
