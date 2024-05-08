from django.db import models

# Create your models here.
from django.contrib.auth.models import User
# Create your models here.

class Survey(models.Model):
  survey_name = models.CharField(max_length = 100)
  survey_title = models.TextField( default = "")
  survey_subtitle = models.TextField(default = "")
  survey_index_description = models.TextField(default = "")
  survey_ETAmin = models.CharField(max_length = 100, default = "")
  survey_img = models.TextField(default = "")
  survey_number = models.IntegerField(default = -1)
  class Meta:
        db_table = 'survey'

class Question(models.Model):
  question_code = models.CharField(max_length = 100)
  value_type= models.CharField(max_length = 100, default = "int")
  question_title = models.TextField(default = "")
  question_subtitle = models.TextField(default = "")
  question_basic = models.TextField(default = "")
  question_details = models.TextField(default = "")
  question_required = models.BooleanField(default = True)
  question_label = models.CharField(default = "emotion" , max_length= 200)
  question_notice = models.TextField(default = "")

  survey = models.ForeignKey(Survey , on_delete = models.CASCADE)
  class Meta:
        db_table = 'question'
class User(models.Model):
    userid = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    birthdate = models.CharField(max_length=200)
    password   = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        db_table = 'users'
class Admin(models.Model):
    adminid = models.CharField(max_length=200)
    password   = models.CharField(max_length=200)
    class Meta:
        db_table = 'admin'
class Response(models.Model):
  value = models.CharField(max_length = 1000)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  question = models.ForeignKey(Question, on_delete=models.CASCADE)
  class Meta:
        db_table = 'response'
class CompletedSurvey(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE)
    completed_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'completed_survey'
class FeedBack(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    feedback = models.TextField(default = "")
    class Meta:
        db_table = 'FeedBack'