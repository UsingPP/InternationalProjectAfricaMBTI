from django.shortcuts import render
# Create your views here.
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView
from rest_framework import status
from .models import Question, User
from datetime import date
class TransmitSurveyDataApi(APIView):
    def post(self, request):
        # POST 요청으로 전송된 데이터 가져오기
        data = request.data
        int_value = 0
        text_value = "-"
        user = User(complete_date =date.today() )
        for q_code, q_value in data:
            question = Question.objects.get(question_code=q_code)
            if question.is_int == 1:
                int_value = q_value
            else:
                text_value = q_value
            response = Response.objects.create(int_value=q_value, text_value=q_value, question=question, user = user)
            response.save()
        # 받은 데이터에 대한 처리 로직 작성
        # 예를 들어, 받은 데이터를 기반으로 무언가를 생성하거나 처리하는 등의 작업 수행

        # 작업이 완료되면 적절한 응답 반환
        return Response({"message": "Data received successfully"}, status=status.HTTP_201_CREATED)


# 질문 새로 추가할 때 쓰는 코드 ( 보안적인 부분 보완해야함 )
class QuestionAddApi(APIView):
    def post(self, request):
        # POST 요청으로 전송된 데이터 가져오기
        data = request.data
        question_code=data["question_code"] 
        question_details=data["question_details"] 
        is_int=data["is_int"] 
        print(question_code,
              question_details,
              is_int)
        question = Question(question_code=question_code, question_details=question_details, is_int=is_int)
        question.save()
        return Response({"message": "question added successfully"}, status=status.HTTP_201_CREATED)


