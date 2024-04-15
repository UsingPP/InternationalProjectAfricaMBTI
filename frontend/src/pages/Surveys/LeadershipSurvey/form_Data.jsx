  export const FormData = {
    

    ko : {
      title: "리더십 재량 조사",
      start :"시작하기",
      next : "다음",
      description: "리더십 조사에 참여해 주셔서 감사합니다!",
      description2: "먼저 개인 정보를 제공해주세요.",
      loadingtext : "제출된 데이터가 곧 분석될 예정이며 결과가 곧 제공될 것입니다. 분석이 완료될 때까지 기다려주세요",
      questions: [
        //question[0]
        {
          "type": "PrettoSlider",
          "name": "future_using",
          "maintitle": "설문에 들어가기 전에,",
          "subtitle": "1부터 100까지의 척도로 자신의 리더십 기술을 평가해주세요.",
          "titleLocation": "hidden",
          "columns": ["1", "2", "3", "4", "5", "6", "7"],
          "rows": [
            {
              "value": "H5",
              "text": "당신의 리더십 점수는?"
            },
          ],
        },
  
        // question[1]
        
        {
          type: "PrettoSlider",
          name: "LeadershipQuestions",
          columns: [
            "극히 부적임",
            "다소 부적임",
            "보통 능숙함도 아니고 부적임도 아님",
            "다소 능숙함",
            "극히 능숙함"
          ],
          title: "이 섹션에서는 총 8가지 주요 리더십 재량에 대한 조사를 진행합니다.",
          subtitle: "다음 각 재량에 대한 설명을 읽고 해당 재량에 대한 자신의 능력을 100점 척도로 평가해주세요.",
          questions: [
            {
              name: "L_ST",
              chapterTitle: "시스템적 사고력",
              chapterSubtitle: "시스템적 사고력",
              desc: "관계를 인식하고 이해하는 능력; 복잡한 시스템을 분석하는 능력; 시스템이 서로 다른 영역과 다른 규모에 내포되어 있는 방식을 생각하는 능력; 불확실성을 다루는 능력.",
              title: "리더십 판별 테스트 [시스템 사고] 다음 능력의 수준을 평가해주세요.",
              image : "https://static.thenounproject.com/png/3757146-200.png" ,
  
              rows: [
                {
                  value: 'L_ST1',
                  text: '모든 것들 간의 상호 관계를 인식하고 이해하는 능력',
                  },
                  {
                  value: 'L_ST2',
                  text: '복잡한 시스템을 분석하는 능력',
                  },
                  {
                  value: 'L_ST3',
                  text: '시스템이 서로 다른 영역과 다른 규모에 내포되어 있는 방식을 생각하는 능력',
                  },
                  {
                  value: 'L_ST4',
                  text: '불확실성을 다루는 능력',
                  },
              ],
            },
            {
              name: "L_A",
              title: "[예측] 다음 능력 수준을 평가해주세요.",
              chapterTitle: "예측 및 대비 능력",
              chapterSubtitle: "예측 및 대비 능력",
              desc: "다양한 미래 가능성, 가능성, 원하는 미래를 이해하고 평가하는 능력; 미래에 예방 원칙을 적용하여 미래 비전을 만들고 행동의 결과를 평가하며 위험과 변화에 대처하는 능력.",
              image : "https://cdn-icons-png.flaticon.com/512/7871/7871961.png",
              columns: [
                '매우 무능력함',
                '다소 무능력함',
                '능숙하지도 무능숙하지도 않음',
                '다소 능숙함',
                '매우 능숙함',
              ],
              rows: [

                {
                  value: "L_A1",
                  text: "미래를 위한 자신만의 비전을 만드는 능력"
                  },
                  {
                  value: "L_A2",
                  text: "미래를 위한 자신만의 비전을 만드는 능력"
                  },
                  {
                  value: "L_A3",
                  text: "예방 원칙을 적용하는 능력"
                  },
                  {
                  value: "L_A4",
                  text: "행동의 결과를 평가하는 능력"
                  },
                  {
                  value: "L_A5",
                  text: "위험과 변화에 대처하는 능력"
                  }
              ],
            },
            {
              name: 'L_N',
              title: '[Normative] Please rate your level of following competence.',
              chapterTitle: "규범 이해력",
              chapterSubtitle: "규범 이해력",
              desc: "자신의 행동에 기반이 되는 규범과 가치를 이해하고 반성하는 능력; 그리고 이해관계의 충돌, 이해 관계 및 상충 관계의 맥락에서 지속 가능한 가치, 원칙, 목표 및 대상을 협상하는 능력",
              image :"https://cdn-icons-png.flaticon.com/512/2191/2191214.png" ,
              
              columns: [
                "극히 부적임",
                "다소 부적임",
                "보통 능숙함도 아니고 부적임도 아님",
                "다소 능숙함",
                "극히 능숙함"
              ],
              rows: [          
                {
                  value: "L_N1",
                  text: "자신의 행동에 기반이 되는 규범과 가치를 이해하고 반성하는 능력"
                  },
                  {
                  value: "L_N2",
                  text: "이해관계의 충돌, 불확실한 지식 및 모순의 맥락에서 지속 가능한 가치, 원칙, 목표 및 대상을 협상하는 능력"
                  },
              ],
            },
  
            {
              name: 'L_S',
              title: '[Strategic] Please rate your level of following competence.',
              chapterTitle: "전략적 역량",
              chapterSubtitle: "전략적 역량",
              desc: "지역 및 원격 지역에서 지속 가능성을 더 확대하기 위해 혁신적인 조치를 공동으로 개발하고 시행하는 능력",
                image : "https://cdn-icons-png.freepik.com/512/3281/3281104.png",
                columns: [
                  "극히 부적임",
                  "다소 부적임",
                  "보통 능숙함도 아니고 부적임도 아님",
                  "다소 능숙함",
                  "극히 능숙함"
                ],
              rows: [
                
            {
              value: "L_S1",
              "text": "현장 및 넓은 범위에서 지속 가능성을 높이는 혁신적인 조치를 공동으로 개발하고 실행하는 능력"
              },
              {
              value: "L_S2",
              text: "상황에 개입하고 전환하여, 지배 체계를 변혁하고 개선하기 위한 전략 옵션을 개발하고 선택하는 능력"
              },
              ],
            },
            {
              name: 'L_C',
              title:
                '[Collaboration] Please rate your level of following competence.',
              chapterTitle : "협력",
              chapterSubtitle : "협력적 역량", 
              desc: '다른 사람들의 필요성, 관점 및 행동을 이해하고 존중하는 능력 (공감); 다른 사람들과 관련성을 이해하고 예민하게 대하는 능력 (공감 리더십); 그룹 내에서 갈등을 다루는 능력; 협력적이고 참여적인 문제 해결을 촉진하는 능력.',
              image : "https://cdn-icons-png.flaticon.com/512/5371/5371017.png",
              
              columns: [
                "극히 부적임",
                "다소 부적임",
                "보통 능숙함도 아니고 부적임도 아님",
                "다소 능숙함",
                "극히 능숙함"
              ],
              rows: [
                {
                  value: 'L_C1',
                  text: '타인으로부터 배우는 능력',
                  },
                  {
                  value: 'L_C2',
                  text: '다른 사람들의 필요성, 관점 및 행동을 이해하고 존중하는 능력 (공감)',
                  },
                  {
                  value: 'L_C3',
                  text: '다른 사람들과 관련성을 이해하고 예민하게 대하는 능력 (공감 리더십)',
                  },
                  {
                  value: 'L_C4',
                  text: '그룹 내에서 갈등을 다루는 능력',
                  },
                  {
                  value: 'L_C5',
                  text: '협력적이고 참여적인 문제 해결을 촉진하는 능력',
                  },
              ],
            },
            {
              name: 'L_CT',
              title:
                '[Critical thinking] Please rate your level of following competence.',
              chapterTitle : "비판적 사고",
              chapterSubtitle : "비판적 사고 역량", 
              desc : "the ability to question norms, practices, and opinions, to reflect on one’s own values, perceptions, and actions, and to take a position in the sustainability discourse.",
              image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThabo2rHcyh4dZrUNXjepnJbx8TVmMpt8ZZaYz5a2h_Q&s", 
              columns: [
                "극히 부적임",
                "다소 부적임",
                "보통 능숙함도 아니고 부적임도 아님",
                "다소 능숙함",
                "극히 능숙함"
              ],
              rows: [
                
            {
              value: 'L_CT1',
              text: '규범, 실천 및 의견을 의심하는 능력',
              },
              {
              value: 'L_CT2',
              text: '자신의 가치, 인식 및 행동을 반성하는 능력',
              },
              {
              value: 'L_CT3',
              text: '지속 가능성 논의에서 입장을 취하는 능력',
              },
              ],
            },
            {
              name: 'L_SA',
              title:
                '[Self-awareness] Please rate your level of following competence.',
              chapterTitle : "자기인식",
              chapterSubtitle : "자기인식 능력", 
              desc : " the ability to reflect on one’s own role in the local community and (global) society; to continually evaluate and further motivate one’s actions and to deal with one’s feelings and desires.",
              image : "https://static.thenounproject.com/png/298336-200.png" ,
              columns: [
                "극히 부적임",
                "다소 부적임",
                "보통 능숙함도 아니고 부적임도 아님",
                "다소 능숙함",
                "극히 능숙함"
              ],
              rows: [
                            
            {
              value: 'L_SA1',
              text: '지역사회 및 (국제) 사회에서 나의 역할을 반성하는 능력',
              },
              {
              value: 'L_SA2',
              text: '행동을 지속적으로 평가하고 동기를 부여하는 능력',
              },
              {
              value: 'L_SA3',
              text: '자신의 감정과 욕망을 다루는 능력',
              },
              ],
            },
            {
              name: 'L_PS',
              title:
                '[Problem-solving] Please rate your level of following competence',
              chapterTitle : "통합 문제 해결",
              chapterSubtitle : "통합 문제 해결 능력", 
              desc : "the overarching ability to apply different problem-solving frameworks to complex sustainability problems and develop viable, inclusive and equitable solution options that promote sustainable development, integrating the competencies mentioned earlier.",
              image : "https://cdn-icons-png.flaticon.com/512/2618/2618497.png",
              columns: [
                "극히 부적임",
                "다소 부적임",
                "보통 능숙함도 아니고 부적임도 아님",
                "다소 능숙함",
                "극히 능숙함"
              ],
              rows: [
                {
                  value: 'L_PS1',
                  text: '지속 가능한 발전의 복잡한 문제를 해결하기 위해 다양한 시스템을 활용하는 능력',
                  },
                  {
                  value: 'L_PS2',
                  text: '복잡한 지속 가능성 문제에 대해 다양한 문제 해결 프레임워크를 적용하고 실현 가능하고 포용적이며 공정한 것을 개발하는 능력',
                  },
  
              ],
            }
          ]},
  
      ],
    },
  

















  

    en : {
    title: 'Leadership Discretion Survey',
    start :"Start",
    next : "Next",
    description:
      "Thank you for agreeing to participate in the leadership survey!",
    description2 : "Please provide your personal information first.",
    questions: [
      //question[0]
      {
        type: 'PrettoSlider',
        name: 'future_using',
        maintitle : "Before we delve into the survey,",
        subtitle : "please rate your leadership skills on a scale of 1 to 100.",
        titleLocation: 'hidden',
        columns: ['1', '2', '3', '4', '5', '6', '7'],
        rows: [
          {
            value: 'H5',
            text: 'Your Leadership Point?',
          },
        ],
      },

      // question[1]
      
      {
        type: "PrettoSlider",
        name: "LeadershipQuestions",
        loadingtext : "Your submitted data will soon be analyzed and the results will be available shortly. Please wait for the analysis to be completed.",
        columns: [
          'Extremely incompetent',
          'Somewhat incompetent',
          'Neither competent nor incompetent',
          'Somewhat competent',
          'Extremely competent',
        ],
        title: "In this section, we will conduct a survey on a total of 8 key leadership discretion.",
        subtitle: "Please read the following description of each competency and rate your own competency in that competency on a scale of 100 points.",
        questions: [
          {
            name: 'L_ST',
            chapterTitle : "Systyem Thinking",
            chapterSubtitle : "Systems thinking competency", 
            desc : "the abilities to recognize and understand relationships; to analyze complex systems; to think of how systems are embedded within different domains and different scales; and to deal with uncertainty.",
            title:
              'Leadership discrement Test [Systems thinking] Please rate your level of following competence.',
            image : "https://static.thenounproject.com/png/3757146-200.png" ,

            rows: [
              {
                value: 'L_ST1',
                text: 'The abilities to recognize and understand interrelationships between all things ',
              },
              {
                value: 'L_ST2',
                text: 'The ability to analyze complex systems ',
              },
              {
                value: 'L_ST3',
                text: 'The ability to think of how systems are embedded within different domains and different scales ',

              },
              {
                value: 'L_ST4',
                text: 'The ability to deal with uncertainty',
              },
            ],
          },
          {
            name: 'L_A',
            title:
              '[Anticipatory] Please rate your level of following competence.',
            chapterTitle : "Anticipatory",
            chapterSubtitle : "Anticipatory competency", 
            desc : "the ability to understand and evaluate multiple futures – possible, probable, and desirable; to create visions for the future to apply the precautionary principle, to assess the consequences of actions, and to deal with risks and changes.",
            image : "https://cdn-icons-png.flaticon.com/512/7871/7871961.png",
            columns: [
              'Extremely incompetent',
              'Somewhat incompetent',
              'Neither competent nor incompetent',
              'Somewhat competent',
              'Extremely competent',
            ],
            rows: [
              {
                value: 'L_A1',
                text: 'TThe ability to create one`s own visions for the future ',
              },
              {
                value: 'L_A2',
                text: 'The ability to create one`s own visions for the future ',
              },
              {
                value: 'L_A3',
                text: 'The ability to apply the precautionary principle',
              },
              {
                value: 'L_A4',
                text: 'The ability to assess the consequences of actions ',
              },
              {
                value: 'L_A5',
                text: 'The ability to deal with risks and changes',
              },
            ],
          },
          {
            name: 'L_N',
            title: '[Normative] Please rate your level of following competence.',
            chapterTitle : "Normative",
            chapterSubtitle : "Normative competency", 
            desc : "the abilities to understand and reflect on the norms and values that underlie one’s actions; and to negotiate sustainability values, principles, goals, and targets in a context of conflicts of interests and trade-offs, uncertain knowledge, and contradictions",
            image :"https://cdn-icons-png.flaticon.com/512/2191/2191214.png" ,
            
            columns: [
              'Extremely incompetent',
              'Somewhat incompetent',
              'Neither competent nor incompetent',
              'Somewhat competent',
              'Extremely competent',
            ],
            rows: [
              {
                value: 'L_N1',
                text: 'The ability to understand and reflect on the norms and values that underlie one’s actions ',
              },
              {
                value: 'L_N2',
                text: 'The ability to negotiate sustainability values, principles, goals, and targets, in a context of conflicts of interests and trade-offs, uncertain knowledge and contradiction',
              },
            ],
          },

          {
            name: 'L_S',
            title: '[Strategic] Please rate your level of following competence.',
            chapterTitle : "Strategic",
            chapterSubtitle : "Strategic competency", 
            desc : "the abilities to collectively develop and implement innovative actions that further sustainability at the local level and further afield.",
            image : "https://cdn-icons-png.freepik.com/512/3281/3281104.png",
            columns: [
              'Extremely incompetent',
              'Somewhat incompetent',
              'Neither competent nor incompetent',
              'Somewhat competent',
              'Extremely competent',
            ],
            rows: [
              {
                value: 'L_S1',
                text: 'The ability to collectively develop and implement innovative actions that further sustainability at the local level and further afield',
              },
              {
                value: 'L_S2',
                text: 'The ability to intervene and transition into situations, develop and select strategic options to transform and improve governance',
              },
            ],
          },
          {
            name: 'L_C',
            title:
              '[Collaboration] Please rate your level of following competence.',
            chapterTitle : "Collaboration",
            chapterSubtitle : "Collaboration competency", 
            desc : " the abilities to learn from others; to understand and respect the needs, perspectives, and actions of others (empathy); to understand, relate to and be sensitive to others (empathic leadership); to deal with conflicts in a group; and to facilitate collaborative and participatory problem-solving.",
            image : "https://cdn-icons-png.flaticon.com/512/5371/5371017.png",
            
            columns: [
              'Extremely incompetent',
              'Somewhat incompetent',
              'Neither competent nor incompetent',
              'Somewhat competent',
              'Extremely competent',
            ],
            rows: [
              {
                value: 'L_C1',
                text: 'The ability to learn from others',
              },
              {
                value: 'L_C2',
                text: 'The ability to understand and respect the needs, perspectives and actions of others (empathy)',
              },
              {
                value: 'L_C3',
                text: 'The ability to understand, relate to and be sensitive to others (empathic leadership)',
              },
              {
                value: 'L_C4',
                text: 'The ability to deal with conflicts in a group',
              },
              {
                value: 'L_C5',
                text: 'The ability to facilitate collaborative and participatory problem solving',
              },
            ],
          },
          {
            name: 'L_CT',
            title:
              '[Critical thinking] Please rate your level of following competence.',
            chapterTitle : "Critical thinking",
            chapterSubtitle : "Critical thinking competency", 
            desc : "the ability to question norms, practices, and opinions, to reflect on one’s own values, perceptions, and actions, and to take a position in the sustainability discourse.",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThabo2rHcyh4dZrUNXjepnJbx8TVmMpt8ZZaYz5a2h_Q&s", 
            columns: [
              'Extremely incompetent',
              'Somewhat incompetent',
              'Neither competent nor incompetent',
              'Somewhat competent',
              'Extremely competent',
            ],
            rows: [
              {
                value: 'L_CT1',
                text: 'The ability to question norms, practices and opinions',
              },
              {
                value: 'L_CT2',
                text: 'The ability to reflect on own one`s values, perceptions and actions',
              },
              {
                value: 'L_CT3',
                text: 'The ability to take a position in the sustainability discourse',
              },
            ],
          },
          {
            name: 'L_SA',
            title:
              '[Self-awareness] Please rate your level of following competence.',
            chapterTitle : "Self-awareness",
            chapterSubtitle : "Self-awareness competency", 
            desc : " the ability to reflect on one’s own role in the local community and (global) society; to continually evaluate and further motivate one’s actions and to deal with one’s feelings and desires.",
            image : "https://static.thenounproject.com/png/298336-200.png" ,
            columns: [
              'Extremely incompetent',
              'Somewhat incompetent',
              'Neither competent nor incompetent',
              'Somewhat competent',
              'Extremely competent',
            ],
            rows: [
              {
                value: 'L_SA1',
                text: 'The ability to reflect on my own role in the local community and (global) society',
              },
              {
                value: 'L_SA2',
                text: 'The ability to continually evaluate and further motivate one`s actions ',
              },
              {
                value: 'L_SA3',
                text: 'The ability to deal with one`s feelings and desires',
              },
            ],
          },
          {
            name: 'L_PS',
            title:
              '[Problem-solving] Please rate your level of following competence',
            chapterTitle : "Integrated Problem-solving",
            chapterSubtitle : "Integrated problem-solving competency", 
            desc : "the overarching ability to apply different problem-solving frameworks to complex sustainability problems and develop viable, inclusive and equitable solution options that promote sustainable development, integrating the competencies mentioned earlier.",
            image : "https://cdn-icons-png.flaticon.com/512/2618/2618497.png",
            columns: [
              'Extremely incompetent',
              'Somewhat incompetent',
              'Neither competent nor incompetent',
              'Somewhat competent',
              'Extremely competent',
            ],
            rows: [
              {
                value: 'L_PS1',
                text: 'The ability to use a variety of systems to address complex issues of sustainable development',
              },
              {
                value: 'L_PS2',
                text: 'The ability to apply different problem-solving frameworks to complex sustainability problems and develop viable, inclusive and equitable',
              },
            
            ],
          }
        ]},
    ],
  },

  showQuestionNumbers: 'off',
};

export const initialData = {
  H1:'',
  H2:'',
  H3:'',
  H4:'',
  H5: '',
  H6: '',
  L_ST1: 50,
  L_ST2: 50,
  L_ST3: 50,
  L_ST4: 50,
  L_A1: 50,
  L_A2: 50,
  L_A3: 50,
  L_A4: 50,
  L_A5: 50,
  L_N1: 50,
  L_N2: 50,
  L_S1: 50,
  L_S2: 50,
  L_C1: 50,
  L_C2: 50,
  L_C3: 50,
  L_C4: 50,
  L_C5: 50,
  L_CT1: 50,
  L_CT2: 50,
  L_CT3: 50,
  L_SA1: 50,
  L_SA2: 50,
  L_SA3: 50,
  L_PS1: 50,
  L_PS2: 50,
};

