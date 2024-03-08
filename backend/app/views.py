from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views import View
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView
from rest_framework import status
from .models import Question, Response  as res,User,Survey
from datetime import datetime as date
from django.core.serializers import serialize
from django.db.models import Q
import re
from .survey_info import SURVAY_BASIS_INFO
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import json
import bcrypt
import jwt
from config.settings import SECRET_KEY
## 1. 회원가입
## 2. 로그인
## 3. 로그아웃
## 4. 설문조사 데이터 수신
## 5. 결과 폼 계산 후 전달

## 1. 회원가입
class SignUp(APIView):
    def post(self, request):
        data = json.loads(request.body)
        print(data)
        try:
            if User.objects.filter(userid = data['userid']).exists():
                return JsonResponse({"message" : "EXISTS_ID"}, status=400)
            User.objects.create(
                userid 	 = data['userid'], 
                password = bcrypt.hashpw(data["password"].encode("UTF-8"), bcrypt.gensalt()).decode("UTF-8"),
                name=data["name"],
                birthdate=data["birthdate"]
            ).save()
            return HttpResponse(status=200)
        except KeyError:
            return JsonResponse({"message" : "INVALID_KEYS"}, status=400)

## 2. 로그인
class SignIn(APIView):
    def post(self, request):
        data = json.loads(request.body)
        print(data)
        try:
            if User.objects.filter(userid=data["userid"]).exists():
                user = User.objects.get(userid=data["userid"])
                if bcrypt.checkpw(data['password'].encode('UTF-8'), user.password.encode('UTF-8')):
                    token = jwt.encode({'user' : user.userid}, SECRET_KEY, algorithm='HS256')
                    print(token)
                    ## 로그인 성공시
                    return JsonResponse({"token" : token}, status=200)
                                                                                                                                    ## 이제 토큰을 프론트에서 local storage에 저장하는 코드 작성하면됌
                ## 아이디는 맞는데 비밀번호가 틀린경우
                return HttpResponse(status=401)
            ## 아이디도 틀린경우
            return HttpResponse(status=400)
        ## 뭔가 잘못된경우
        except KeyError:
            return JsonResponse({'message' : "INVALID_KEYS"}, status=400)
        
## 3. 설문조사 데이터 수신
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed

class TokenAuthentication(BaseAuthentication):
    def authenticate(self, request):
        token = request.headers.get('Authorization')
        if not token:
            return None

        try:
            # 토큰에서 사용자 정보 추출
            payload = jwt.decode(token.split()[1], SECRET_KEY, algorithms=['HS256'])
            user_id = payload['user']
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Token expired')
        except jwt.InvalidTokenError:
            raise AuthenticationFailed('Invalid token')
        # 사용자 확인
        try:
            user = User.objects.get(userid=user_id)
        except User.DoesNotExist:
            raise AuthenticationFailed('No such user')
        return (user, None)
class RecieveData(APIView):
    authentication_classes = [TokenAuthentication]
    def post(self, request):
        data = json.loads(request.body)
        print(data)
        data = json.loads(request.body)
        survey_name = data.get("survey_name")
        print(survey_name)
        print(Survey.objects.filter(survey_name = survey_name))
        if Survey.objects.filter(survey_name = survey_name).exists():
            print("해당 서베이 존재")
            if (len(Survey.objects.filter(survey_name = survey_name) )== 1):
                survey = Survey.objects.get(survey_name = survey_name)
                # 사용자 확인
                user = request.user
                userob = User.objects.get(userid = user.userid)
                print(userob.userid, userob.name)
                print(data["data"])
                questions = survey.question_set.all()

                # 일괄 저장할 데이터를 모아놓을 임시 리스트
                responses_to_save = []

                # 모든 데이터를 반복하여 처리
                for key, value in data["data"].items():
                    q = questions.filter(question_code=key)
                    if len(q) == 1:
                        # 문제가 발생하지 않았을 때만 임시 리스트에 저장
                        if (not res.objects.filter(question = q.first() , user = user).exists()):
                          responses_to_save.append(res( question=q.first(), value=value,user=userob))
                        else:
                            print("이미참여")
                            return JsonResponse({"error": "이미 참여함"}, status=200)
                    else:
                        # 문제가 발생하면 반복문을 중단함
                        print(key, value)
                        print("문제가 발생하여 데이터를 저장할 수 없습니다.")
                        break

                # 모든 데이터가 성공적으로 저장될 수 있는지 확인
                if len(responses_to_save) == len(data["data"]):
                    # 모든 데이터를 일괄 저장
                    for response in responses_to_save:
                        response.save()
                    print("모든 데이터가 성공적으로 저장되었습니다.")
                    return JsonResponse({"success": survey_name}, status=200)
                else:
                    print("일부 데이터가 저장되지 않았습니다.")
            return JsonResponse({"error":"error"}, status=400)
        else: 
            return JsonResponse({"error": "Survey name x"}, status=400)
## 5. 결과 폼 계산 후 전달
class send_result(APIView):
    authentication_classes = [TokenAuthentication]
    def post(self, request):
        data = json.loads(request.body)
        print(data)
        survey_name = data["survey_name"]
                                                # '''
                                                # {survey_name : "설문조사 이름"}
                                                # '''
        survey = Survey.objects.get(survey_name = survey_name)
        user = request.user
        userob = User.objects.get(userid = user.userid)
        questions = Question.objects.filter(survey = survey)
        resdic = {}
        if (len(questions)!= 0 ):
            for question in questions:
                resval = res.objects.filter(question = question, user = userob).first()
                resdic[question.question_code] = resval.value
            print(resdic)
            data = result_process_leadership_survey01(resdic)
            data["username"] = userob.name
        return JsonResponse(data, status = 200)
        

def result_process_leadership_survey01(resdic):
    leadership_score_self = ""
    lis = ["L_ST"
    ,"L_A"
    ,"L_N"
    ,"L_S"
    ,"L_C"
    ,"L_CT"
    ,"L_SA"
    ,"L_PS"]
    Ldic = {}
    for key,value in resdic.items():
        q_type = re.sub(r'\d+$', '', key)
        print(q_type)
        if (q_type in lis):
            if (q_type not in Ldic):
                Ldic[q_type] = {"sum" : float(value), "count" : 1}
            else:
                Ldic[q_type]["sum"]+=float(value)
                Ldic[q_type]["count"]+=1
        elif (q_type =="H5" ):
            leadership_score_self = value
    leadership_mean = {}
    for key, value in Ldic.items():
        leadership_mean[key] = value["sum"]/value["count"]
    print(leadership_mean)
    return { "leadership_score_self" :leadership_score_self, "leadership_mean_by_sector" :  leadership_mean}
    
## 6. 아이디 유효성
## 7. xxx 님의 result
## 8. 폰으로볼때 result 라이다차트
## 9. 로그인 한사람만 들어갈수 있게 구현 끝까지
## 10. 회원가입 승인되면 로그인페이지로, 승인 오류(중복 등)나면 다이알로그 뜨게

