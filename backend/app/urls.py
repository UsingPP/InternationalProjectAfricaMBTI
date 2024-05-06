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
path('signin/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('home/LeadershipSurvey/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('home/InclusiveLeadershipSurvey/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('home/JMLeadershipEvaluationSurvey/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('home/SelfCheck/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('home/SelfAwareness/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('home/DifficultiesInEmotion/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('home/UN17Goal/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분

## 결과 폼
path('LeadershipSurveyResult/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('InclusiveLeadershipSurveyResultResult/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('JMLeadershipEvaluationSurveyResult/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('SelfCheckResult/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('SelfAwarenessResult/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('DifficultInEmotionResult/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분
path('UN17GoalResult/', TemplateView.as_view(template_name = 'index.html')) ,#추가된 부분

   path('signup/', SignUp.as_view()),
    path('login/', SignIn.as_view()),
    path('recievedata/', RecieveData.as_view()),
    path("send_result/", send_result.as_view()),

    
    path("send_to_survey_form/", send_to_survey_form.as_view()),
    path("send_to_home/", send_to_home.as_view()),
    path("save_user_answer/", save_user_answer.as_view()),
    path("send_completed_survey_list/", send_completed_survey_list.as_view()),
    path("result_data_render/", result_data_render.as_view()),


    path("JMdata/", jmdata),
  # path('api/transmit-survey-data/', TransmitSurveyDataApi.as_view(), name='transmit_survey_data'),
]
