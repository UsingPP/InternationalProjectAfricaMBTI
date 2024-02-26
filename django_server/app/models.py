from django.db import models

# Create your models here.

class SurveyType(models.Model):
  type_name = models.CharField(default= "text", max_length = 100 )
class Question(models.Model): 
  question_code = models.CharField(max_length = 100)
  question_details = models.TextField(default = "")
  surveytype = models.ForeignKey(SurveyType , on_delete = models.CASCADE, default = None)
class User(models.Model):
  complete_date = models.DateField()
class Response(models.Model):
  text_value = models.CharField(default = "",max_length = 1000)
  # User 모델과 Question 모델을 외래키로 참조하는 필드
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  question = models.ForeignKey(Question, on_delete=models.CASCADE)




  
