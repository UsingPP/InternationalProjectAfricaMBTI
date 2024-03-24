  export const FormData = {
    

    ko : {
      title: "리더십 재량 조사",
      description: "리더십 조사에 참여해 주셔서 감사합니다!",
      description2: "먼저 개인 정보를 제공해주세요.",
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
  
          {
          type: 'PrettoSlider',
          name: 'STD',
          title: 'Sustainable Development Topics',
          desc : "This section surveys your interest in 17 sustainability topics United Nations' Sustainable Development Goals (SDGs) are a set of 17 objectives aimed at promoting sustainable development globally. Here are the 17 SDGs",
          image :  "https://www.researchgate.net/publication/320688917/figure/fig5/AS:952860854468609@1604191139379/17-Sustainable-Development-Goals-SDGs-in-United-Nations-2030-Agenda.ppm",
          columns: [
            "매우 관심 없음",
            "약간 관심 있음",
            "중립",
            "관심 있음",
            "매우 관심 있음"
          ],
          rows: [{
            value: "STD1",
            text: "목표 1. 빈곤 제로",
            desc: "모든 사람에게 빈곤을 근절하고 양호한 생활 수준을 보장하기 위한 노력."
            },
            {
            value: "STD2",
            text: "목표 2: 굶주림 제로",
            desc: "굶주림을 종식하고 식량 안보를 달성하며 지속 가능한 농업을 촉진하기 위한 노력."
            },
            {
            value: "STD3",
            text: "목표 3: 건강과 안녕",
            desc: "모든 연령대의 개인들의 건강과 안녕을 개선하며 의료 서비스 접근을 중점적으로 제공하기 위한 노력."
            },
            {
            value: "STD4",
            text: "목표 4: 질 높은 교육",
            desc: "모든 사람을 위한 포용적이고 공평한 질 높은 교육을 보장하고 평생 학습 기회를 촉진하기 위한 노력."
            },
            {
            value: "STD5",
            text: "목표 5: 성별 평등",
            desc: "성별 평등을 실현하고 모든 여성과 소녀를 인권을 강화하며 차별을 없애기 위한 노력."
            },
            {
            value: "STD6",
            text: "목표 6: 깨끗한 물과 위생",
            desc: "모든 사람에게 깨끗한 물과 적절한 위생 시설에 접근할 수 있도록 보장하기 위한 노력."
            },
            {
            value: "STD7",
            text: "목표 7: 가격이 적당하고 깨끗한 에너지",
            desc: "지속 가능한 에너지원을 촉진하고 모든 사람에게 가격이 적정하고 안정적이며 현대적인 에너지에 접근할 수 있도록 보장하기 위한 노력."
            },
            {
            value: "STD8",
            text: "목표 8: 양질의 일과 경제 성장",
            desc: "포용적이고 지속 가능한 경제 성장을 촉진하고 모든 사람에게 완전하고 생산적인 고용 및 양질의 일을 보장하기 위한 노력."
            },
            {
            value: "STD9",
            text: "목표 9: 산업, 혁신",
            desc: "탄력적 인프라를 구축하고 포용적이고 지속 가능한 산업화를 촉진하며 혁신을 유도하기 위한 노력."
            },
            {
            value: "STD10",
            text: "목표 10: 감소하는 불평등",
            desc: "국가 내 및 국가 간의 불평등을 줄이고 모든 사람에게 동등한 기회를 보장하기 위한 노력."
            },
            {
            value: "STD11",
            text: "목표 11: 지속 가능한 도시와 지역",
            desc: "포용적이고 안전하며 탄력적이며 지속 가능한 도시 및 인간 거주지를 조성하기 위한 노력."
            },
            {
            value: "STD12",
            text: "목표 12: 책임 있는 소비 및 생산",
            desc: "지속 가능한 소비 및 생산 양식, 자원 효율성 및 폐기물 감축을 촉진하기 위한 노력."
            },
            {
            value: "STD13",
            text: "목표 13: 기후 조치",
            desc: "기후 변화 및 그 영향에 대항하고 그 부정적인 영향을 해소하기 위한 긴급한 조치를 취하는 노력."
            },
            {
            value: "STD14",
            text: "목표 14: 수중 생활",
            desc: "지속 가능한 개발을 위해 해양, 해양 및 해양 자원을 보존 및 지속 가능하게 사용하는 노력."
            },
            {
            value: "STD15",
            text: "목표 15: 땅에서의 생활",
            desc: "육상 생태계를 보호, 복원 및 지속 가능한 이용을 촉진하고 생물 다양성 감소를 중단하기 위한 노력."
            },
            {
            value: "STD16",
            text: "목표 16: 평화와 정의 강한 기관",
            desc: "평화롭고 포용적인 사회를 촉진하고 모든 사람에게 사법 접근을 제공하며 효과적이고 책임 있는 포용적인 기관을 구축하는 노력."
            },
            {
            value: "STD17",
            text: "목표 17: 목표 달성을 위한 파트너십",
            desc: "구현 수단을 강화하고 지속 가능한 개발을 위한 글로벌 파트너십을 활성화하기 위한 노력."
            },
          ],
        },
      ],
    },
  

















  

    en : {
    title: 'Leadership Discretion Survey',
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

        {
        type: 'PrettoSlider',
        name: 'STD',
        title: 'Sustainable Development Topics',
        desc : "This section surveys your interest in 17 sustainability topics United Nations' Sustainable Development Goals (SDGs) are a set of 17 objectives aimed at promoting sustainable development globally. Here are the 17 SDGs",
        image :  "https://www.researchgate.net/publication/320688917/figure/fig5/AS:952860854468609@1604191139379/17-Sustainable-Development-Goals-SDGs-in-United-Nations-2030-Agenda.ppm",
        columns: [
          'Not interested',
          'somewhat interested',
          'Neutral',
          'intereted',
          'Very interested',
        ],
        rows: [
          {
            value: 'STD1',
            text: 'GOAL 1. No Poverty',
            desc: "Efforts to eradicate poverty and ensure a decent standard of living for all.",
          },
          {
            value: 'STD2',
            text: 'GOAL 2: Zero Hunger',
            desc : "Working towards ending hunger, achieving food security, and promoting sustainable agriculture.",
          },
          {
            value: 'STD3',
            text: 'GOAL 3: Good Health and Well-being',
            desc : "Improving health and well-being for individuals of all ages, focusing on access to healthcare services.",
          },
          {
            value: 'STD4',
            text: 'GOAL 4: Quality Education',
            desc : "Ensuring inclusive and equitable quality education for all, promoting lifelong learning opportunities.",
          },
          {
            value: 'STD5',
            text: 'GOAL 5: Gender Equality',
            desc : "Achieving gender equality and empowering all women and girls, eliminating discrimination.",
          },
          {
            value: 'STD6',
            text: 'GOAL 6: Clean Water and Sanitation',
            desc : "Ensuring access to clean water and adequate sanitation facilities for all.",
          },
          {
            value: 'STD7',
            text: 'GOAL 7: Affordable and Clean Energy',
            desc : "Promoting sustainable energy sources and ensuring access to affordable, reliable, and modern energy for all.",
          },
          {
            value: 'STD8',
            text: 'GOAL 8: Decent Work and Economic Growth',
            desc: "Promoting inclusive and sustainable economic growth, full and productive employment, and decent work for all.",
          },
          {
            value: 'STD9',
            text: 'GOAL 9: Industry, Innovation and Infrastructure',
            desc : "Building resilient infrastructure, promoting inclusive and sustainable industrialization, fostering innovation.",

          },
          {
            value: 'STD10',
            text: 'GOAL 10: Reduced Inequality',
            desc : "Reducing inequalities within and among countries, ensuring equal opportunities for all.",
          },
          {
            value: 'STD11',
            text: 'GOAL 11: Sustainable Cities and Communities',
            desc : "Making cities and human settlements inclusive, safe, resilient, and sustainable.",
          },
          {
            value: 'STD12',
            text: 'GOAL 12: Responsible Consumption and Production',
            desc : "Promoting sustainable consumption and production patterns, resource efficiency, and waste reduction.",
          },
          {
            value: 'STD13',
            text: 'GOAL 13: Climate Action',
            desc : "Combating climate change and its impacts, taking urgent action to address its adverse effects.",
          },
          {
            value: 'STD14',
            text: 'GOAL 14: Life Below Water',
            desc : "Conserving and sustainably using the oceans, seas, and marine resources for sustainable development.",
          },
          {
            value: 'STD15',
            text: 'GOAL 15: Life on Land',
            desc : "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, halting biodiversity loss.",
          },
          {
            value: 'STD16',
            text: 'GOAL 16: Peace and Justice Strong Institutions',
            desc : "Promoting peaceful and inclusive societies, providing access to justice for all, building effective, accountable, and inclusive institutions.",
          },
          {
            value: 'STD17',
            text: 'GOAL 17: Partnerships to achieve the Goal',
            desc : "Strengthening the means of implementation and revitalizing the global partnership for sustainable development.",
          },
        ],
      },
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
  SDT1: 50,
  SDT2: 50,
  SDT3: 50,
  SDT4: 50,
  SDT5: 50,
  SDT6: 50,
  SDT7: 50,
  SDT8: 50,
  SDT9: 50,
  SDT10: 50,
  SDT11: 50,
  SDT12: 50,
  SDT13: 50,
  SDT14: 50,
  SDT15: 50,
  SDT16: 50,
  SDT17: 50,
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

