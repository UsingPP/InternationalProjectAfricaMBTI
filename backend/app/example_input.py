import random
import json
import requests
conti = {
    1: "Africa",
    2: "Europe",
    3: "North America",
    4: "South America",
    5: "Asia",
    6: "Austrailia",
    7: "Antarctica"
}

sex = {
    1: "Male",
    2: "Female",
    3: "Other"
}

oo = {
    1: "I am an undergraduate student",
    2: "I am a graduate student",
    3: "I am a working professional",
    4: "Other (describe)"
}

age = {
    1: "~10",
    2: "10~20",
    3: "20~30",
    4: "30~40",
    5: "40~50",
    6: "50~60",
    7: "over 60"
}

SDT = {
    1: "Not interested",
    2: "somewhat interested",
    3: "Neutral",
    4: "intereted",
    5: "Very interested"
}

L = {
    1: "Extremely incompetent",
    2: "Somewhat incompetent",
    3: "Neither competent nor incompetent",
    4: "Somewhat competent",
    5: "Extremely competent"
}

def gen():
  form = {
      "surveyData": {
          "H1": sex[random.choice(list(sex.keys()))],
          "H2": conti[random.choice(list(conti.keys()))],
          "H3": oo[random.choice(list(oo.keys()))],
          "H4": age[random.choice(list(age.keys()))],
          "H5": random.randint(1, 7),
          "SDT": {
              f"SDT{i}": SDT[random.choice(list(SDT.keys()))] for i in range(1, 18)
          },
          "L-ST": {
              f"L-ST{i}": L[random.choice(list(L.keys()))] for i in range(1, 5)
          },
          "L-A": {
              f"L-A{i}": L[random.choice(list(L.keys()))] for i in range(1, 6)
          },
          "L-N": {
              f"L-N{i}": L[random.choice(list(L.keys()))] for i in range(1, 3)
          },
          "L-S": {
              f"L-S{i}": L[random.choice(list(L.keys()))] for i in range(1, 3)
          },
          "L-C": {
              f"L-C{i}": L[random.choice(list(L.keys()))] for i in range(1, 6)
          },
          "L-CT": {
              f"L-CT{i}": L[random.choice(list(L.keys()))] for i in range(1, 4)
          },
          "L-SA": {
              f"L-SA{i}": L[random.choice(list(L.keys()))] for i in range(1, 4)
          },
          "L-PS": {
              f"L-PS{i}": L[random.choice(list(L.keys()))] for i in range(1, 3)
          },
          "comment": "ㅇㅇ",
          "Is_contact": "ㅇㅇ"
      }
  } 
  url = 'http://127.0.0.1:8000/api/transmit-survey-data/'
  json_data = json.dumps(form)
  response = requests.post(url, json=form)
  if response.status_code == 200:
      print('요청이 성공적으로 보내졌습니다.')
  else:
      print('요청을 보내는 도중 오류가 발생했습니다.')

for i in range(100):
   gen()