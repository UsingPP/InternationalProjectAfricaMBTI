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
          name: "LeadershipQuestions",

          // 해야 할 질문이 n개 있다고 해도 question이라는 이름을 무조건 집어 넣어 사용에 편의 추가
          // questions는 []로 감싸고 그 안에 {}가 n개 있는 형태
          // {} (questions[n]) 내부에는 name, title, rows가 필수적으로 있어야 함
          // rows 내부에는 value가 필수적으로 있어야 함. value는 데이터를 서버딴을 보낼 때 json 파일의 key 값이 되는 역할을 함.
          questions: [
            // map 쓰면 이 덩어리로 쪼개짐 ↓            
            {
              name : "Self-awareness",
              rows : [
                { name : "self_awareness1",
                  desc : "I am curious about my reaction to things."},

                { name : "self_awareness2",
                  desc : "I am curious about what I might learn about myself by taking notice of how I react to certain thoughts, feelings or sensations. "},

                { name : "self_awareness3",
                  desc : "I was curious to see what my mind was up to from moment to moment"},

                { name : "self_awareness4",
                  desc : "I was curious about each of the thoughts and feelings that I was having"},

                { name : "self_awareness5",
                  desc : "I remained curious about the nature of each experience as it arose"},

                { name : "self_awareness6",
                  desc : "I was curious about what I might learn about myself by joust taking notice of what my attention gets drawn to. "},

                { name : "self_awareness7",
                  desc : "I noticed subtle changes in my mood."},

                { name : "self_awareness8",
                  desc : "I was more invested in just watching my experiences as they arose, than in figuring out what they could mean. "},

                { name : "self_awareness9",
                  desc : "I was more concerned with being open to my experiences than controlling or changing them"},

                { name : "self_awareness10",
                  desc : "I was receptive to observing unpleasant thoughts and feelings without interfering with them"},

                { name : "self_awareness11",
                  desc : "I approached each experience by trying to accept it, no matter whether I was pleasant or unpleasant"},

                { name : "self_awareness12",
                  desc : "I was open to taking notice of anything that might come up"},

                { name : "self_awareness13",
                  desc : "I was aware of my thoughts and feelings without overidentifying them"},

                { name : "self_awareness14",
                  desc : "I experienced my thoughts more as events in my mind than as necessarily accurate reflection of the way things ‘really’ is"},

                { name : "self_awareness15",
                  desc : "I experienced myself as separate from my changing thoughts and feeling"},]
            },
            ]
            // map 쓰면 이 덩어리로 쪼개짐 ↑

        },
      ],
  


    },
  

  showQuestionNumbers: 'off',
};

export const initialData = {
    //## 1페이지
    self_awareness1 : 50,
    self_awareness2 : 50,
    self_awareness3 : 50,
    self_awareness4 : 50,
    self_awareness5 : 50,
    self_awareness6 : 50,
    self_awareness7 : 50,
    self_awareness8 : 50,
    self_awareness9 : 50,
    self_awareness10 : 50,
    self_awareness11 : 50,
    self_awareness12 : 50,
    self_awareness13 : 50,
    self_awareness14 : 50,
    self_awareness15 : 50,

};

