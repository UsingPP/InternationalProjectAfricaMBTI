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
                print(1)
                return JsonResponse({"message" : "EXISTS_ID"}, status=201)
            User.objects.create(
            userid 	 = data['userid'], 
            password = bcrypt.hashpw(data["password"].encode("UTF-8"), bcrypt.gensalt()).decode("UTF-8"),
            name=data["name"],
                birthdate=data["birthdate"]
            ).save()
            return JsonResponse({"message" : "success"}, status=200)
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
                    return JsonResponse({"message" : "success" , "token" : token}, status=200)
                                                                                                                                    ## 이제 토큰을 프론트에서 local storage에 저장하는 코드 작성하면됌
                ## 아이디는 맞는데 비밀번호가 틀린경우
                return JsonResponse({"message" : "ID or password is incorrect"})
            ## 아이디도 틀린경우
            return JsonResponse({"message" : "ID or password is incorrect"})
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
        survey_name = data.get("survey_name")
        print(survey_name)
        for i in Survey.objects.all():
            print(i.survey_name)
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
                responses_to_save = []
                flag = 0
                for key, value in data["data"].items():
                    print(key)
                    q = questions.filter(question_code=key)
                    print(q)
                    if len(q) == 1:

                        q= q.first()
                        
                        if (not res.objects.filter(question = q, user = userob).exists()):
                            responses_to_save.append(res( question=q, value=value,user=userob))
                        else:
                            responses_to_save.append(res( question=q, value=value,user=userob))
                            flag = 1
                    else:
                        # 문제가 발생하면 반복문을 중단함
                        print(key, value)
                        print("문제가 발생하여 데이터를 저장할 수 없습니다.")
                        return HttpResponse("문제중복 : 데이터베이스 문제")

                # 모든 데이터가 성공적으로 저장될 수 있는지 확인
                if len(responses_to_save) == len(data["data"]):
                    # 모든 데이터를 일괄 저장
                    if (flag == 1 ):
                        for q in questions:
                            res.objects.get(user = userob, question = q).delete()
                            print(q.question_code, "삭제")
                    for response in responses_to_save:
                        print(response.question)
                        response.save()
                    print("모든 데이터가 성공적으로 저장되었습니다.")
                    return JsonResponse({"success": survey_name}, status=200)
                else:
                    print("일부 데이터가 저장되지 않았습니다.")
            return JsonResponse({"error":"error"}, status=400)
        else: 
            return JsonResponse({"error": "Survey name x"}, status=400)
## 5. 결과 폼 계산 후 전달
from django.db.models import Avg
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
        resalldic = {}
        print(questions)
        if (len(questions)!= 0 ):
            for question in questions:
                resval = res.objects.filter(question = question, user = userob).first()
                print(userob.userid)
                print(question.question_code)
                resall = res.objects.filter(question=question).aggregate(Avg('value'))["value__avg"]
                resdic[question.question_code] = resval.value
                resalldic[question.question_code] = resall
            print(resdic)
            data = result_process_leadership_survey01(resdic)
            other= result_process_leadership_survey01(resalldic)
            data["username"] = userob.name
            data["other"] = other
            print(data)
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

