export const FormData = {
    en : {
      title: "Sustainability SCCT Study Survey",
      notice : "Please read the following description of each competency and rate your own competency in that competency on a scale of 100 points or choose your opinion",
      description: "Thank you for agreeing to participate in the Sustainability SCCT Study Survey",
      page: [
        //Question => page로 바꿔서 인덱싱을 할 때 직관성을 강화
        //question[i] => page[1]
        //각각의 페이지는 중괄호로 묶임

        // page[0] : Setting
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

  

          title : "title1"
        },
  
        // page[1]
        
        {
          type: "PrettoSlider",
          page_name: "1.	Personal attributes and growth mindset",

          // 해야 할 질문이 n개 있다고 해도 question이라는 이름을 무조건 집어 넣어 사용에 편의 추가
          // questions는 []로 감싸고 그 안에 {}가 n개 있는 형태
          // {} (questions[n]) 내부에는 name, title, rows가 필수적으로 있어야 함
          // rows 내부에는 value가 필수적으로 있어야 함. value는 데이터를 서버딴을 보낼 때 json 파일의 key 값이 되는 역할을 함.
          questions: [
            // map 쓰면 이 덩어리로 쪼개짐 ↓
              {
                name : "Self-Check", 
                title : "",

                rows  : [
                { name : "self_efficacy",
                  title : "Sustainability self-efficacy ",
                  desc_env : "“I believe I would be successful in occupations dealing with environmental problems”",
                  desc_social : "“I think I would be good in an occupation where one needs to help other people”",
                  desc_economic : "“I think I would be successful in an occupation dealing with consumer protection”",
                },
                  
                { name : "interest",
                  title : "Sustainability interest",
                  desc_env : "“I like work activities with which I can contribute to sustainability of natural resources”",
                  desc_social : "“I would like to work on ensuring equal educational opportunities and health care for all”",
                  desc_economic : "“I would like to devote myself professionally to reducing exploitation of workers and improving working conditions”", },

                { name : "outcome",
                  title : "Sustainability Outcome ",
                  desc_env : "“I am certain that my professional engagement could contribute to the reduction of climate change”",
                  desc_social : "“I think I could contribute to the promotion and protection of human rights through my work”",
                  desc_economic : "“I believe I could contribute to socially responsible activities of businesses through my work”", },

                { name : "related_job_intention",
                  title : "Sustainability related job intention ",
                  desc_env : "“I will choose a career in the field of environmental protection”",
                  desc_social : "“I will professionally engage with social justice issues”",
                  desc_economic : "“I will pick a career that can have influence on the reduction of worker exploitation and improvement of working conditions”",},]
              },
            // map 쓰면 이 덩어리로 쪼개짐 ↑
            ]
        },
      
      ],
  


    },
  

  showQuestionNumbers: 'off',
};

export const initialData = {
    //## 1페이지
    self_efficacy : "environmental",
    interest : "environmental",
    outcome : "environmental",
    related_job_intention : "environmental",

};

