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
      
        //page[2]
        {

          type: "PrettoSlider",
          name: "LeadershipQuestions",

          // 해야 할 질문이 n개 있다고 해도 question이라는 이름을 무조건 집어 넣어 사용에 편의 추가
          // questions는 []로 감싸고 그 안에 {}가 n개 있는 형태
          // {} (questions[n]) 내부에는 name, title, rows가 필수적으로 있어야 함
          // rows 내부에는 value가 필수적으로 있어야 함. value는 데이터를 서버딴을 보낼 때 json 파일의 key 값이 되는 역할을 함.
          questions: [
            // map 쓰면 이 덩어리로 쪼개짐 ↓            
            {               
              name : "Difficulties in Emotion Regulation Scale",
              rows : [ 
              {name : "difficulties_in_emotion1",
              desc : "I have difficulty making sense out of my feelings. "},

              {name : "difficulties_in_emotion2",
              desc : "I am confused about how I feel."},

              {name : "difficulties_in_emotion3",
              desc : "When I am upset, I have difficulty getting work done. "},

              {name : "difficulties_in_emotion4",
              desc : "When I am upset, I become out of control."},

              {name : "difficulties_in_emotion5",
              desc : "When I am upset, I believe that I will remain that way for a long time."},

              {name : "difficulties_in_emotion6",
              desc : "When I am upset, I believe that I’ll end up feeling very depressed."},

              {name : "difficulties_in_emotion7",
              desc : "When I am upset, I have difficulty focusing on other things."},

              {name : "difficulties_in_emotion8",
              desc : "When I am upset, I feel out of control."},

              {name : "difficulties_in_emotion9",
              desc : "When I am upset, I feel ashamed with myself for feeling that way"},

              {name : "difficulties_in_emotion10",
              desc : "When I am upset, I feel like I am weak."}, 

              {name : "difficulties_in_emotion11",
              desc : "When I am upset, I have difficulty controlling my behaviors."}, 

              {name : "difficulties_in_emotion12",
              desc : "When I am upset, I believe that there is nothing I can do to make myself feel better. "}, 

              {name : "difficulties_in_emotion13",
              desc : "When I am upset, I become irritated with myself for feeling that way."}, 

              {name : "difficulties_in_emotion14",
              desc : "When I am upset, I start to feel very bad about myself."}, 

              {name : "difficulties_in_emotion15",
              desc : "When I am upset, I have difficulty thinking about anything else."}, 

              {name : "difficulties_in_emotion16",
              desc : "When I am upset, my emotions"},
              ]
            }
            ]
            // map 쓰면 이 덩어리로 쪼개짐 ↑

        },
      ],
  


    },
  

  showQuestionNumbers: 'off',
};

export const initialData = {
    //## 1페이지

    difficulties_in_emotion1  : 50,
    difficulties_in_emotion2 : 50,
    difficulties_in_emotion3  : 50,
    difficulties_in_emotion4  : 50,
    difficulties_in_emotion5  : 50,
    difficulties_in_emotion6  : 50,
    difficulties_in_emotion7  : 50,
    difficulties_in_emotion8  : 50,
    difficulties_in_emotion9  : 50,
    difficulties_in_emotion10 : 50, 
    difficulties_in_emotion11 : 50, 
    difficulties_in_emotion12 : 50, 
    difficulties_in_emotion13 : 50, 
    difficulties_in_emotion14 : 50, 
    difficulties_in_emotion15 : 50, 
    difficulties_in_emotion16 : 50,

};

