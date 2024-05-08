from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views import View
from rest_framework import generics
from rest_framework.response import Response
from django.forms.models import model_to_dict
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView
from rest_framework import status
from .models import Question, Response  as res,User,Survey, CompletedSurvey,FeedBack
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
        try:
            if User.objects.filter(userid = data['userid']).exists():
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
        try:
            if User.objects.filter(userid=data["userid"]).exists():
                user = User.objects.get(userid=data["userid"])
                if bcrypt.checkpw(data['password'].encode('UTF-8'), user.password.encode('UTF-8')):
                    token = jwt.encode({'user' : user.userid}, SECRET_KEY, algorithm='HS256')
                    ## 로그인 성공시
                    return JsonResponse({"message" : "success" , "token" : token, "name" : user.name}, status=200)
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
        # 1. 유효한 유저가 요청을 보냈는지 확인
        try:
            user = request.user
            userob = User.objects.get(userid = user.userid)
        except:
            return JsonResponse({"error": "User not Founded"}, status=400)
        
        # 2. 해당 서베이가 데이터베이스에 존재하는지부터 확인 (POST 요청을 막보내는 경우 차단)
        survey_name = data.get("survey_name")
        if Survey.objects.filter(survey_name = survey_name).exists():
            if (len(Survey.objects.filter(survey_name = survey_name) )== 1):
                survey = Survey.objects.get(survey_name = survey_name)
                questions = survey.question_set.all()
                responses_to_save = []
                flag = 0
                for key, value in data["data"].items():

                    q = questions.filter(question_code=key)
                    # question이 있는지 확인
                    if len(q) == 1:

                        q= q.first()
                        # 해당 사용자가 해당 질문에 대해서 답한 이력이 있는지 확인 
                        ## 이력이 있으면, flag를 1로 바꾸가
                        if (not res.objects.filter(question = q, user = userob).exists()):
                            responses_to_save.append(res( question=q, value=value,user=userob))
                        else:
                            responses_to_save.append(res( question=q, value=value,user=userob))
                            flag = 1
                    else:
                        # 동일 question이 데이터베이스상에 2개 있으면 에러
                        return JsonResponse({"error": "DataBase Error / Same Question name duplicated. (to backend team : plz modify question name which duplicate one onother)"}, status=400)

                # 모든 데이터가 성공적으로 저장될 수 있는지 확인
                if len(responses_to_save) == len(data["data"]):
                    # 플래그가 1이면, 기존의 설문이력 삭제
                    if (flag == 1 ):
                        for q in questions:
                            try:
                                res.objects.get(user = userob, question = q).delete()
                            except:
                                print("존재 x : 따라서 지울수 없음")
                    # 모든 저장리스트 데이터, 데이터베이스 상에 실제 반영
                    for response in responses_to_save:
                        response.save()
                    return JsonResponse({"success": survey_name}, status=200)
                # request로 넘겨받은 답변 데이터 개수와, 저장할 수 있는 데이터개수가 다르면 취소 (atomic process)
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
        survey_name = data["survey_name"]
        survey = Survey.objects.get(survey_name = survey_name)
        user = request.user
        userob = User.objects.get(userid = user.userid)
        questions = Question.objects.filter(survey = survey)
        resdic = {}
        resalldic = {}
        if (survey_name == "LeadershipSurvey"):
            if (len(questions)!= 0 ):
                for question in questions:
                    resval = res.objects.filter(question = question, user = userob).first()
                    resall = res.objects.filter(question=question).aggregate(Avg('value'))["value__avg"]
                    resdic[question.question_code] = resval.value
                    resalldic[question.question_code] = resall
                data = result_process_LeadershipSurvey(resdic)
                other= result_process_LeadershipSurvey(resalldic)
                data["username"] = userob.name
                data["other"] = other
            return JsonResponse(data, status = 200)
        elif (survey_name == "UN17Goal"):
            questiondetaillist = []
            if (len(questions)!= 0):
                for question in questions:
                    questiondetail = question.question_details
                    questiondetaillist.append(questiondetail)
                    usersval = res.objects.filter(question = question, user = userob)
                    if (len(usersval) == 0):
                        return JsonResponse({"error" : "일부 데이터 손실"}, status  = 400)
                    resval = usersval.first()
                    resall = res.objects.filter(question=question).aggregate(Avg('value'))["value__avg"]
                    resdic[question.question_code] = resval.value
                    resalldic[question.question_code] = resall
                    
                data["username"] = userob.name
                data["userdata"] = resdic 
                data["otherdata"] = resalldic
                data["questiondetail"] = questiondetaillist

            return JsonResponse(data,status = 200)
        elif (survey_name == "InclusiveLeadershipSurvey"):
            questiondetaillist = []
            if (len(questions)!= 0):
                for question in questions:
                    questiondetail = question.question_details
                    questiondetaillist.append(questiondetail)
                    usersval = res.objects.filter(question = question, user = userob)
                    if (len(usersval) == 0):
                        return JsonResponse({"error" : "일부 데이터 손실"}, status  = 400)
                    resval = usersval.first()
                    resall = res.objects.filter(question=question).aggregate(Avg('value'))["value__avg"]
                    resdic[question.question_code] = resval.value
                    resalldic[question.question_code] = resall
                data = result_process_InclusiveLeadershipSurvey(resdic)
                other= result_process_InclusiveLeadershipSurvey(resalldic)
                data["username"] = userob.name
                data["other"] = other
                data["username"] = userob.name
                data["questiondetail"] = questiondetaillist

            return JsonResponse(data,status = 200)
        elif (survey_name == "JMLeadershipEvaluationSurvey"):
            if (len(questions)!= 0):
                for question in questions:
                    usersval = res.objects.filter(question = question, user = userob)
                    if (len(usersval) == 0):
                        return JsonResponse({"error" : "일부 데이터 손실"}, status  = 400)
                    resval = usersval.first()
                    resall = res.objects.filter(question=question).aggregate(Avg('value'))["value__avg"]
                    resdic[question.question_code] = resval.value
                    resalldic[question.question_code] = resall
                data = result_process_JMLeadershipEvaluationSurvey(resdic)
                other= result_process_JMLeadershipEvaluationSurvey(resalldic)
                keys = data.keys()
                ddddd = {}
                for key in keys:
                    ddddd[key] = {"user" : data[key], "other" : other[key]}
                ddddd["username"] = userob.name
            return JsonResponse(ddddd,status = 200)
        else:
            return JsonResponse({"error":"error"}, status =400)
class send_to_home(APIView):
    authentication_classes = [TokenAuthentication]
    def post(self, request):
        user = request.user
        userob = User.objects.get(userid = user.userid)
        data = json.loads(request.body)
        request_survey_count = data["surveycount"]
        request_language = data["language"]
        surveys = Survey.objects.filter(survey_number__gte=1, survey_number__lte=request_survey_count).order_by('survey_number')
        done_survey_count = 0
        survey_dict = {"meta" : {}, "data" : {}}
        all_fields = Survey._meta.fields
        for surveyobj in surveys:
            questionsCount = Question.objects.filter(survey=surveyobj).count()
            surveydict = model_to_dict(surveyobj)
            sd = {"questionsCount" : questionsCount}
            for field in all_fields:
                field_name = field.name
                field_value = surveydict.get(field_name)
                try:
                    field_value = json.loads(field_value.replace('\r', '').replace('\n', '').strip())
                except:
                    field_value = field_value
                sd[field_name] = field_value
            completed = CompletedSurvey.objects.filter(user=userob, survey=surveyobj)
            if (len(completed)>=1):
                done_survey_count += 1
                sd["isCompleted"] = 1
                sd["completedAt"] = completed.first().completed_at
            else: 
                sd["isCompleted"] = 0
                sd["completedAt"] = "not completed"
                
            survey_dict["data"][surveyobj.survey_name] = sd
        survey_dict["meta"]["done_survey_count"] = done_survey_count
        survey_dict["meta"]["total_survey_count"] = request_survey_count


        return JsonResponse(data = survey_dict,safe = False, status = 200)
        # else:
        #     return JsonResponse({"error":"error"}, status =400)
class send_to_survey_form(APIView):
    authentication_classes = [TokenAuthentication]
    def post(self, request):
        user = request.user
        userob = User.objects.get(userid = user.userid)
        data = json.loads(request.body)
        request_surveyname = data["surveyname_"]
        request_language = data["language"]
        survey = Survey.objects.filter(survey_name = request_surveyname)        
        data = {"meta" : {}, "data" : {}}
        question_fields = Question._meta.fields
        if (len(survey)==1):
            survey = survey.first()
            questions = Question.objects.filter(survey = survey)
            survey_title = json.loads(survey.survey_title.replace('\r', '').replace('\n', '').strip())
            survey_subtitle = json.loads(survey.survey_subtitle.replace('\r', '').replace('\n', '').strip())
            survey_index_description = json.loads(survey.survey_index_description.replace('\r', '').replace('\n', '').strip())
            survey_ETAmin = survey.survey_ETAmin
            survey_img = survey.survey_img
            data["meta"] = {
                "survey_title" : survey_title,
                "survey_subtitle" : survey_subtitle,
                "survey_index_description" : survey_index_description,
                "survey_ETAmin" : survey_ETAmin,
                "survey_img" : survey_img,
                "participated_count" : CompletedSurvey.objects.filter(survey = survey).count(),
                "question_counts" : Question.objects.filter(survey = survey).count()
            }

            for question in questions:
                questiondict = model_to_dict(question)
                sd = {}
                try:
                    question_notice = json.loads(questiondict['question_notice'].replace('\r', '').replace('\n', '').strip())
                except:
                    question_notice = {}
                for field in question_fields:
                    field_name = field.name
                    field_value = questiondict.get(field_name)
                    try:
                        field_value = json.loads(field_value.replace('\r', '').replace('\n', '').strip())
                    except:
                        field_value = field_value
                    sd[field_name] = field_value
                data["data"][question.question_code] = sd
            return JsonResponse(data = data, safe = False, status = 200)
        else:
            return JsonResponse({"error" : "에러"}, status =404)
class save_user_answer(APIView):
    authentication_classes = [TokenAuthentication]
    def post(self, request):
        # try:
        user = request.user
        userob = User.objects.get(userid = user.userid)
        data = json.loads(request.body)
        request_surveyname = data["surveyname_"]
        userAnswer = data["data"]
        survey = Survey.objects.get(survey_name = request_surveyname )
        questions = Question.objects.filter(survey = survey)
        responses = []
        if (CompletedSurvey.objects.filter(user= userob, survey = survey).exists()):
            for question in questions:
                qcode = question.question_code
                CompletedSurvey.objects.filter(user = userob, survey = survey).delete()
                res.objects.get(user = userob, question = question).delete()
        for question in questions:
            qcode = question.question_code
            responses.append(res(user = userob, question = question , value = userAnswer[qcode] ))
        res.objects.bulk_create(responses)
        CompletedSurvey(user = userob, survey = survey).save()
        
        return JsonResponse({"success" : "save success!" }, status = 200)
        # except:
        #     return JsonResponse({"error" : "에러"}, status =404)
class send_completed_survey_list(APIView):
    authentication_classes = [TokenAuthentication]
    def post(self, request):
        # try:
        user = request.user
        userob = User.objects.get(userid = user.userid)
        completesurveys = CompletedSurvey.objects.filter(user = userob).order_by('-completed_at')
        data = []
        for completesurvey in completesurveys:
            surveyimg = completesurvey.survey.survey_img
            surveytitle = json.loads(completesurvey.survey.survey_title.replace('\r', '').replace('\n', '').strip())
            surveysubtitle = json.loads(completesurvey.survey.survey_subtitle.replace('\r', '').replace('\n', '').strip())
            data.append({
                "surveyimg" : surveyimg,
                "surveytitle" : surveytitle,
                "surveysubtitle" : surveysubtitle,
                "completedAt" : completesurvey.completed_at,
                "surveyname" : completesurvey.survey.survey_name,
            })
        return JsonResponse({"data" : data}, status = 200)
        # except:
        #     return JsonResponse({"error" : "에러"}, status =404)

        # else:
        #     return JsonResponse({"error":"error"}, status =400)
class result_data_render(APIView):
    authentication_classes = [TokenAuthentication]
    def post(self, request):
        data = json.loads(request.body)
        user = request.user
        userob = User.objects.get(userid = user.userid)
        request_group_info = data["group_info_"]
        senddata = {"user" : {}, "other" : {}, "total" : 0 }
        survey_name = data["surveyname_"]
        # try:
        if survey_name == "PersonalInformationSurvey":
            senddata["user"] = group_calc(request_group_info, userob, survey_name)
        else:
            senddata["user"] = group_calc(request_group_info, userob, survey_name)
            senddata["other"] = group_calc(request_group_info, userob, survey_name, target = "other")
            senddata["total"] = sum([ v for v in senddata["user"].values()])/len(senddata["user"].values())
        return JsonResponse({"senddata" : senddata}, status = 200)
class result_data_render2(APIView):
    authentication_classes = [TokenAuthentication]
    def post(self, request):
        data = json.loads(request.body)
        user = request.user
        userob = User.objects.get(userid = user.userid)
        request_group_info = data["group_info_"]
        senddata = {"user" : {}, "other" : {}, "total" : 0 }
        survey_name = data["surveyname_"]
        for key,questions_sec in request_group_info.items():
            count = 0
            sum = 0
            for question_title, sub_questions in questions_sec.items():
                for sub_question in sub_questions :
                    q = Question.objects.get(question_code = sub_question)
                    val = res.objects.get(user = userob, question = q)
                    count +=1
                    sum += val 
            mean = sum/count
        senddata["user"] = group_calc(request_group_info, userob, survey_name)
        senddata["total"] = sum([ v for v in senddata["user"].values()])/len(senddata["user"].values())
        return JsonResponse({"senddata" : senddata}, status = 200)
      
        # except:
        #     return JsonResponse({"error" : "에러"}, status =404)


        # else:
        #     return JsonResponse({"error":"error"}, status =400)
class send_feedback(APIView):
    authentication_classes = [TokenAuthentication]
    def post(self, request):
        data = json.loads(request.body)
        user = request.user
        userob = User.objects.get(userid = user.userid)
        feedback = data["feedback"]
        FeedBack(feedback = feedback , user = userob).save()
        return JsonResponse({"message" : "success"}, status = 200)
      
        # except:
        #     return JsonResponse({"error" : "에러"}, status =404)


        # else:
        #     return JsonResponse({"error":"error"}, status =400)
def group_calc(request_group_info, userob,survey_name,target = "user"):
    dic = {}
    for group_name, q_codes in request_group_info.items():
        sum_ = 0
        if (survey_name == "PersonalInformationSurvey"):
            question = Question.objects.get(question_code = q_codes[0])
            dic[group_name] = res.objects.get(question = question , user = userob).value
        else:
            for q_code in q_codes :
                question = Question.objects.get(question_code = q_code)
                if (target == "user"):
                    response_value = int(res.objects.get(question = question , user = userob).value)
                elif(target == "other"):
                    response_value = res.objects.filter(question = question ).aggregate(Avg('value'))['value__avg']
                sum_+=response_value
            mean_ = sum_/len(q_codes)
            dic[group_name] = mean_ 
    return dic
    

def result_process_JMLeadershipEvaluationSurvey(resdic):
    personal_list = ["experiences", 
                     "attribute_of_learning" , 
                     "accessibility",
                     "resiliency",
                     "belief_in_telent",
                     "appearance",
                     "resp_behaviors",
                     "self_evaluation",
                     "habit_of_writting"]
    cummunication_list = ["listening",
                    "communication_envir",
                    "operating_through_communication",
                    "lead_under_policy",]
    decision_list = ["human_resources_management",
                    "conflicts_management",
                    "data_collection",
                    "resonalble_decision_making",
                    "decision_ability",
                    "problem_sol_ability",]
    leadership_list = ["vision",
                    "guiding_skills",
                    "rolemodel",
                    "mannerism",
                    "human_dev",
                    "compassion_for_others",
                    "organizational_management",
                    "project_management",
                    "administration",]
    Ldic = {}
    for key , value in resdic.items():
        q_type = re.sub(r'\d+$', '', key)
        section_key = ""
        if (q_type in personal_list):
            section_key = "Personal attributes and growth mindset"
        elif (q_type in cummunication_list):
            section_key = "Ability of Communication"
        elif (q_type in decision_list):
            section_key = "Ability to grasp, judge, and solve problems "
        elif (q_type in leadership_list):
            section_key = "Leadership Abilities"
        
        if section_key not in Ldic:
            Ldic[section_key] = {}

        if (q_type not in Ldic[section_key]):
            Ldic[section_key][q_type] = {"sum" : float(value), "count" : 1}
        else:
            Ldic[section_key][q_type]["sum"]+=float(value)
            Ldic[section_key][q_type]["count"]+=1
    leadership_mean = {}
    for key, value in Ldic.items():
        if key not in leadership_mean:
            leadership_mean[key] = {}
        for k, v in Ldic[key].items():
            leadership_mean[key][k]= v["sum"]/v["count"]
    return  leadership_mean
    
def result_process_InclusiveLeadershipSurvey(resdic):
    lis = ["openness", "availability" , "accessibility"]
    Ldic = {}
    for key , value in resdic.items():
        q_type = re.sub(r'\d+$', '', key)
        if (q_type in lis):
            if (q_type not in Ldic):
                Ldic[q_type] = {"sum" : float(value), "count" : 1}
            else:
                Ldic[q_type]["sum"]+=float(value)
                Ldic[q_type]["count"]+=1
    leadership_mean = {}
    for key, value in Ldic.items():
        leadership_mean[key] = value["sum"]/value["count"]
    return {"mean_by_sector" :  leadership_mean}
    


def result_process_LeadershipSurvey(resdic):
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
    return { "leadership_score_self" :leadership_score_self, "leadership_mean_by_sector" :  leadership_mean}

## 6. 아이디 유효성
## 7. xxx 님의 result
## 8. 폰으로볼때 result 라이다차트
## 9. 로그인 한사람만 들어갈수 있게 구현 끝까지
## 10. 회원가입 승인되면 로그인페이지로, 승인 오류(중복 등)나면 다이알로그 뜨게



def jmdata(request):
    with open('./JMdata.txt', "r", encoding="utf-8") as f:
        data = f.read()
    data = data.split('\n')
    l = []
    for i in data:
        i = i.strip()
        l.append(i)
    ll = []
    sep = []
    for i in l:
        if(i!= ""):
            ll.append(i)
        if i=="":
            sep.append(ll) 
            ll = []
    aaaa = []
    for s in sep:
        try:
            databasekey = s[0]
            qcount = (len(s)-3)/2
            kotitle = s[1]
            entitle = s[2]
            dic = {"databasekey" : databasekey, "entitle" : entitle, "kotitle" : kotitle, "questions" : []}
            for qc in range(int(qcount)):
                kot = 3+2*qc 
                ent = 4+2*qc
                koq = s[kot]
                enq = s[ent]
                dic["questions"].append({"index" : qc+1, "koQ" : koq, "enQ" : enq})
            aaaa.append(dic)
        except:
            pass

    for d in aaaa:
        databasekey = d["databasekey"]
        for q in d["questions"]:
            index = q["index"]
            koQ = q["koQ"]
            enQ = q["enQ"]
            entitle = d["entitle"]
            kotitle = d["kotitle"]
            questionobject = Question.objects.get(question_code = databasekey+str(index))
            questionobject.question_basic = json.dumps({"en" : [enQ], "ko" : [koQ]},ensure_ascii=False)
            questionobject.question_details = json.dumps({"en" : [enQ], "ko" : [koQ]},ensure_ascii=False)
            questionobject.question_title = json.dumps({"en" : [entitle + " " + str(index)], "ko" : [kotitle + " " + str(index)]},ensure_ascii=False)
            questionobject.question_subtitle = json.dumps({"en" : [entitle], "ko" : [kotitle]},ensure_ascii=False )
            questionobject.save()

    return JsonResponse(aaaa, safe = False)
    