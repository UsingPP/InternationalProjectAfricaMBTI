from django.db import models

# Create your models here.
class Question(models.Model):
  question_code = models.CharField(max_length = 100)
  question_details = models.TextField(default = "")
  is_int = models.IntegerField(default =1)
class User(models.Model):
  complete_date = models.DateField()
class Response(models.Model):
  int_value = models.IntegerField(default = None)
  text_value = models.CharField(default = "",max_length = 1000)
  # User 모델과 Question 모델을 외래키로 참조하는 필드
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  question = models.ForeignKey(Question, on_delete=models.CASCADE)






  
