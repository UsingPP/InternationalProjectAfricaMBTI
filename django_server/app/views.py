from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView
from rest_framework import status
from .models import Question, User, SurveyType, Response as res
from datetime import datetime as date
from django.core.serializers import serialize
from django.db.models import Q
import re
from .survey_info import SURVAY_BASIS_INFO
class TransmitSurveyDataApi(APIView):
    def post(self, request):
        # POST 요청으로 전송된 데이터 가져오기
        user = User(complete_date =date.now() )
        user.save()
        print(request.data)

        data = request.data["surveyData"]
        print(data)
        questions = Question.objects.all()
        for question in questions:
            obj = res()
            try:
                basis_convert = False
                symbol = re.sub(r'\d+$', '', question.question_code)
                if (symbol in SURVAY_BASIS_INFO):
                    basis_convert = True
                if (question.question_code in data.keys()):
                    value = data[question.question_code]
                    if (basis_convert):
                        value = SURVAY_BASIS_INFO[symbol][value]
                    obj.text_value = value
                    obj.question = question
                    obj.user = user 
                else:
                    value = data[symbol][question.question_code]
                    if (basis_convert):
                        value = SURVAY_BASIS_INFO[symbol][value]
                    obj.text_value = value
                    obj.question = question
                    obj.user = user
                print("성공 %s"%question.question_code)
                obj.save()
            except:
                print("제출되지 않았거나, (서버상)데이터불일치 %s"%question.question_code)
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
        code = request.GET.get('code')
        start = int(request.GET.get('start'))
        end = int(request.GET.get('end'))
        print(code, start, end)
        ls = []
        data = Question.objects.filter(Q(question_code__startswith=code))
        for i, obj in enumerate(data):
            q_code = obj.question_code
            if ( start <=int(re.findall(r'\d+$', q_code)[-1])<=end):
                dictionary = {}
                surveytype_id = obj.surveytype_id
                surveytype = SurveyType.objects.get(id=surveytype_id)
                dictionary['question_code'] = q_code
                dictionary['question_details'] = obj.question_details
                dictionary['survey_type'] = surveytype.type_name
                ls.append(dictionary)
        # JSON 데이터 출력
        return JsonResponse(ls, safe=False)
# class QuestionListApi(APIView):
#     def get(self, request):
#         key = request.GET.get('key')
#         ls = []
#         if key == 'L':
#         # 'key'가 'LD'인 경우에 대한 처리
#             data = Question.objects.filter(question_code__regex=r'^L-[A-Za-z]+\d+$')
#             print(data)
#         elif key == "H":
#             data = Question.objects.filter(question_code__regex=r'^H\d+$')
#         elif key =="SDT":
#             data = Question.objects.filter(question_code__regex=r'^SDT\d+$')
#         else:
#         # 다른 경우에 대한 처리
#             data = Question.objects.all()
#         for i, obj in enumerate(data):
#             dictionary = {}
#             surveytype_id = obj.surveytype_id
#             surveytype = SurveyType.objects.get(id=surveytype_id)
#             dictionary['question_code'] = obj.question_code
#             dictionary['question_details'] = obj.question_details
#             dictionary['survey_type'] = surveytype.type_name
#             ls.append(dictionary)
#         # JSON 데이터 출력
#         return JsonResponse(ls, safe=False)
class QuestionTypeAddApi(APIView):
    def post(self, request):
        data = request.data
        question_type = data["question_type"]
        survey_type = SurveyType(type_name = question_type)
        survey_type.save()
        return Response({"message": "question type added successfully"}, status=status.HTTP_201_CREATED)
        