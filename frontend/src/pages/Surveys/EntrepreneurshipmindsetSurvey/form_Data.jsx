export const FormData = {
  "ko" : {
    "title": "기업가 정신 설문조사",
    "description": "기업가 정신 설문조사에 참여해 주셔서 감사합니다.",
    "notice" : "아래는 각 역량에 대한 설명입니다. 각 역량에 대해 본인의 역량을 100점 척도로 평가해주세요",
    "sections": [{
        "type": "PrettoSlider",
        "marks": [
          {
            "value": 0,
            "label": "매우\n동의하지\n않음"
          },
          {
            "value": 25,
            "label": "동의하지\n않음"
          },
          {
            "value": 50,
            "label": "중립"
          },
          {
            "value": 75,"label": "동의"
          },
          {
            "value": 100,
            "label": "매우\n동의"
          }
        ],
        "title": "이 섹션에서는 기업가 정신에 대한 설문조사를 진행하겠습니다.",
        "questions": [
          {
            "name": "기업가 정신",
            "title": "[기업가 정신] 다음 역량에 대한 동의 정도를 평가해 주십시오.",
            "image": "https://miro.medium.com/v2/resize:fit:1116/0*BubeF2g8Bx37JVCL.png",
            "detail": "“기업가 정신”은 기업가적인 정신과 접근 방식을 갖춘 개인들을 특징 짓는 태도, 행동 및 품질의 집합을 의미합니다. 이는 기회를 발견하고 계산된 위험을 감수하며 가치를 창출하는 데 중점을 둔 선구적이고 혁신적인 마인드셋을 포함합니다. 문제 해결에 중점을 두고 도전에 대한 내적 도전 정신과 적응력이 있습니다.",
            "rows": [
              {
                "name": "Entrepreneurship mindset1",
                "text": "나는 작업을 완료하기 위해 위험을 감수할 의지가 있습니다."
              },
              {
                "name": "Entrepreneurship mindset2",
                "text": "성공, 실수 및 실패로부터 배웁니다."
              },
              {
                "name": "Entrepreneurship mindset3",
                "text": "조직에 유익한 혁신적인 아이디어, 프로세스, 제품을 항상 찾고 있습니다."
              },
              {
                "name": "Entrepreneurship mindset4",
                "text": "나는 긍정적이고, 나 자신 안에 긍정적인 감정을 만들어 열정적으로 작업하고 목표를 향해 노력합니다."
              }
            ]
          }
        ]
      }
    ]
  },
  en : {
  title: 'Entrepreneurship mindset survey',
  notice : "Please read the following description of each competency and rate your own competency in that competency on a scale of 100 points.",
  description:
    "Thank you for agreeing to participate in the Entrepreneurship mindset survey.",
  sections: [
        {
        type: "PrettoSlider",
        marks : [
          {
            value: 0,
            label: 'Strongly\nDisagree',
          },
          {
            value: 25,
            label: 'Disagree',
          },
          {
            value: 50,
            label: 'Neutral',
          },
          {
            value: 75,
            label: 'Agree',
          },
          {
            value: 100,
            label: `Strongly\nAgree`,
          },
        ],
        title: "In this section, we will conduct a survey on Entrepreneurship mindset. ",
        questions: [
          {
            name: 'Entrepreneurship mindset',
            title: '[Entrepreneurship mindset] Please rate your degree of agreement of following competence.',
            image : "https://miro.medium.com/v2/resize:fit:1116/0*BubeF2g8Bx37JVCL.png",
            detail : `"Entrepreneurship mindset" refers to a set of attitudes, behaviors, and qualities that characterize individuals who possess an entrepreneurial spirit and approach to life and work. It encompasses a proactive and innovative mindset focused on identifying opportunities, taking calculated risks, and creating value, often with a focus on problem-solving and resilience in the face of challenges.`,
            rows: [
              {
                name: 'Entrepreneurship mindset1',
                text: 'I am willing to take risk to complete my task ',
              },
              {
                name: 'Entrepreneurship mindset2',
                text: 'I learn from my success, mistakes and failures. ',
              },
              {
                name: 'Entrepreneurship mindset3',
                text: 'I am always in search of innovative ideas, processes, products, which is beneficial for my organization  ',
              },
              {
                name: 'Entrepreneurship mindset4',
                text: 'I am optimistic and I create positive feeling within myself which inspires me to work enthusiastically in my task and towards my goals',
              },
            ],
          }
        ]}]
}};

export const initialData = {
  Entrepreneurshipmindset1 : 50,
  Entrepreneurshipmindset2 : 50,
  Entrepreneurshipmindset3 : 50,
  Entrepreneurshipmindset4 : 50,
};

