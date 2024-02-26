from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView
from rest_framework import status
from .models import Question, User, SurveyType
from datetime import date
from django.core.serializers import serialize


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
        surveytype=data["surveytype_id"] 
        surveytypeobject = SurveyType.objects.get(type_name = surveytype)
        print(surveytypeobject.id, surveytypeobject.type_name)
        print(1)
        question = Question(question_code=question_code, question_details=question_details, surveytype_id=surveytypeobject.id)
        print(1)

        question.save()
        return Response({"message": "question added successfully"}, status=status.HTTP_201_CREATED)


class QuestionListApi(APIView):
    def get(self, request):
        key = request.GET.get('key')
        ls = []
        if key == 'L':
        # 'key'가 'LD'인 경우에 대한 처리
            data = Question.objects.filter(question_code__regex=r'^L-[A-Za-z]+\d+$')
            print(data)
        elif key == "H":
            data = Question.objects.filter(question_code__regex=r'^H\d+$')
        elif key =="SDT":
            data = Question.objects.filter(question_code__regex=r'^SDT\d+$')
        else:
        # 다른 경우에 대한 처리
            data = Question.objects.all()
        for i, obj in enumerate(data):
            dictionary = {}
            surveytype_id = obj.surveytype_id
            surveytype = SurveyType.objects.get(id=surveytype_id)
            dictionary['question_code'] = obj.question_code
            dictionary['question_details'] = obj.question_details
            dictionary['survey_type'] = surveytype.type_name
            ls.append(dictionary)
        # JSON 데이터 출력
        return JsonResponse(ls, safe=False)
class QuestionTypeAddApi(APIView):
    def post(self, request):
        data = request.data
        question_type = data["question_type"]
        survey_type = SurveyType(type_name = question_type)
        survey_type.save()
        return Response({"message": "question type added successfully"}, status=status.HTTP_201_CREATED)
        