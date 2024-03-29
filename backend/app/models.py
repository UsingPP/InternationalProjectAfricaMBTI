from django.db import models

# Create your models here.
from django.contrib.auth.models import User
# Create your models here.

class Survey(models.Model):
  survey_name = models.CharField(max_length = 100)
  class Meta:
        db_table = 'survey'

class Question(models.Model): 
  question_code = models.CharField(max_length = 100)
  question_details = models.TextField()
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
class Response(models.Model):
  value = models.CharField(max_length = 1000)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  question = models.ForeignKey(Question, on_delete=models.CASCADE)
  class Meta:
        db_table = 'response'