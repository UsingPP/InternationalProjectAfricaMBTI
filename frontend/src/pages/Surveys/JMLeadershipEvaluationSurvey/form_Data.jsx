export const FormData = {
    en : {
      title: "JM Leadership Evaluation Servey",
      notice : "Please read the following description of each competency and rate your own competency in that competency on a scale of 100 points.",
      description: "Thank you for agreeing to participate in the Inclusive leadership survey.",
      labels : {
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

      },
      page: [
        // page[0]
        // Personal attributes and growth mindset
        {
          type: "PrettoSlider",
          name: "Personal attributes and growth mindset",

          // 해야 할 질문이 n개 있다고 해도 question이라는 이름을 무조건 집어 넣어 사용에 편의 추가
          // questions는 []로 감싸고 그 안에 {}가 n개 있는 형태
          // {} (questions[n]) 내부에는 name, title, rows가 필수적으로 있어야 함
          // rows 내부에는 value가 필수적으로 있어야 함. value는 데이터를 서버딴을 보낼 때 json 파일의 key 값이 되는 역할을 함.
          questions: [
            // map 쓰면 이 덩어리로 쪼개짐 ↓
              {
                name : "Experiences", 
                title : "익스피리언스",

                rows  : [
                { name : "experiences1",
                  desc : "I have extensive experience and exposure that enables me to lead people effectively.", },
                  
                { name : "experiences2",
                  desc : "I have experiences that can amaze people when they hear about them.", },

                { name : "experiences3",
                  desc : "I have unique experiences that can inspire people.", },]
              },

            {
              name : "Attitude of learning",
              title : "뭐",
              rows : [{ name : "attribute_of_learning1",
                desc : "I often undertake extra assignments out of a desire to learn new things. ", },

              { name : "attribute_of_learning2",
                desc : "I give my best in learning, even in areas unrelated to exams or job opportunities. ", },

              { name : "attribute_of_learning3",
                desc : "When I encounter something I don’t understand, I try to grasp it fully. ", },]
            },
            {
              name : "Resiliency",
              rows : [              
              { name : "resiliency1",
                desc : "I am not significantly emotionally disturbed by the outcomes of my failures.", },

              { name : "resiliency2",
                desc : "Negative feelings or emotions following a failure do not hinder my work.", },

              { name : "resiliency3" ,
                desc : "I forget about mistakes or failures and try again quickly.", },]
            },
            {
              name : "Belief in the talent",
              rows : [ { name : "belief_in_telent1",
                desc : "Even those with natural solid abilities cannot surpass someone who perseveres and works diligently.", },

              { name : "belief_in_telent2" ,
                desc : "A great artist is created with 1% natural talent and 99% effort.", },

              { name : "belief_in_telent3",
                desc : "Individuals who continuously develop their innate talents are more likely to succeed than those who solely rely on their natural abilities.", },]
            }, 
            {
              name : "Appearance",
              rows : [ { name : "appearance1",
                desc : "I make sure to dress appropriately for different occasions.", },

              { name : "appearance2",
                desc : "I always keep my attire neat.", },

              { name : "appearance3",
                desc : "I maintain a well-groomed appearance.", },]
            },
            {  
              name : "Responsible behaviors",
              rows : [ { name : "resp_behaviors1",
                desc : "I take responsibility for what I say.", },

              { name : "resp_behaviors2",
                desc : "I align my words with my actions.", },

              { name : "resp_behaviors3",
                desc : "I do not engage in illegal activities.", },

              { name : "resp_behaviors4",
                desc : "I do not unnecessarily assign tasks to others that I can do myself.", },],

            },
            {
              name : "Self-evaluation",
                rows : [ { name : "self_evaluation1",
                desc : "I accurately assess my abilities.", },

              { name : "self_evaluation2",    
                desc : "I am well aware of my weaknesses when making decisions.", },

              { name : "self_evaluation3",
                desc : "I wait to choose what seems good at the moment when making decisions. ", },
              ]
            },
            {
              name : "Habit of taking a note",
              rows : [{ name : "habit_of_writting1",
                desc : "I always make sure to record the significant events in my life.", },
              { name : "habit_of_writting2",
                desc : "I write a diary every day.", },
              { name : "habit_of_writting3",
                desc : "I record noteworthy ideas.", },],
            },

            ]
        },
      
        //page[1]
        {
          type: "PrettoSlider",
          name: "Ability of Communication",
          // 해야 할 질문이 n개 있다고 해도 question이라는 이름을 무조건 집어 넣어 사용에 편의 추가
          // questions는 []로 감싸고 그 안에 {}가 n개 있는 형태
          // {} (questions[n]) 내부에는 name, title, rows가 필수적으로 있어야 함
          // rows 내부에는 value가 필수적으로 있어야 함. value는 데이터를 서버딴을 보낼 때 json 파일의 key 값이 되는 역할을 함.
          questions: [
            // map 쓰면 이 덩어리로 쪼개짐 ↓            
            {
              name : "Attitude of listening",
              rows : [
                {name :"listening1",
                desc : "I carefully listen to what people say.",}, 
                {name :"listening2",
                desc : "I pay attention to people’s opinions.",}, 
                {name :"listening3",
                desc : "I thoroughly review the reports from team members.",}, 
                {name :"listening4",
                desc : "I listen to the opinions of other leaders.",}, ]
            },
            {
              name : "Ability to create a smooth communication environment",
              rows : [
                {name :"communication_envir1",
                desc : "I regularly create opportunities to discuss with colleagues",}, 
                {name :"communication_envir2",
                desc : "I create opportunities to discuss with subordinates.",}, 
                {name :"communication_envir3",
                desc : "I keep open opportunities for people to communicate with me comfortably whenever they need me.",}, 
                {name :"communication_envir4",
                desc : "I approach people in a friendly manner to make them feel comfortable talking to me.",}, ]
            },
            {
              name : "Operation through communication",
              rows : [
                {name :"operating_through_communication1",
                desc : "I consider the opinions of those I work with when making decisions and progressing tasks.",}, 
                {name :"operating_through_communication2",
                desc : "I operate the organization through discussions with leaders.",}, 
                {name :"operating_through_communication3",
                desc : "I seek opinions from advisors and proceed with the work.",}, ]
            },
            {
              name : "Communicate and lead in accordance with the organizational philosophy.",
              rows : [
                {name :"lead_under_policy1",
                desc : "I do not only say things that people want to hear.",}, 
                {name :"lead_under_policy2",
                desc : "I do not speak differently based on positions or situations.",}, 
                {name :"lead_under_policy3",
                desc : "I not only say what the other person wants to hear but also express what needs to be said.",}, ]
            },
            
            
            ]
            // map 쓰면 이 덩어리로 쪼개짐 ↑

        },

        //page[2] 3페이지
        { type: "PrettoSlider",
        name: "Ability to grasp, judge, and solve problems ",
        sections : [
          {
            section_name : "Data collection and decision-making abilities",
            questions : [{
              name : "Human resources management",
              rows : [
                {name :"human_resources_management1",
                desc : "I understand/comprehend/grasp the psychological characteristics of the people I am guiding.",}, 
                {name :"human_resources_management2",
                desc : "I have a detailed understanding of the tendencies of the organization’s members.",}, 
                {name :"human_resources_management3",
                desc : "I am aware of the personal information of the people I am guiding.",}, 
                {name :"human_resources_management3",
                desc : "I have a good understanding of people’s talents. ",}, ]
            },
            {
              name : "Identifying conflicts and problems",
              rows : [
                {name :"conflicts_management1",
                desc : "I quickly discern conflicts within the organization.",}, 
                {name :"conflicts_management2",
                desc : "I quickly identify misunderstandings and conflicts that arise among people.",}, 
                {name :"conflicts_management3",
                desc : "I quickly identify issues and conflicts arising within the organization.",}, 
                {name :"conflicts_management4",
                desc : "I regularly examine whether there are individuals causing issues within the organization.",}, ]
            },]
          },
          {
            section_name : "Decision-making",
            questions : [{
              name : "Data collection and decision-making processes",
              rows : [
                {name :"data_collection1",
                desc : "I review all options before making a decision.",}, 
                {name :"data_collection2",
                desc : "I make decisions with a complete understanding of all relevant information. ",}, 
                {name :"data_collection3",
                desc : "When making decisions, I seek advice from experts in the field.",}, ]
            },
            {
              name : "Rational judgment ability",
              rows : [
                {name :"resonalble_decision_making1",
                desc : "I carefully analyze all options' pros and cons before deciding.",}, 
                {name :"resonalble_decision_making2",
                desc : "I can make judgments more efficiently with my expertise.",}, 
                {name :"resonalble_decision_making3",
                desc : "When faced with something difficult to judge, I seek advice from someone knowledgeable.",}, 
                {name :"resonalble_decision_making4",
                desc : "I consider various factors and make judgments, not limiting myself to a single perspective.",}, ]
            },
            {
              name : "Judgment",
              rows : [
                {name :"decision_ability1",
                desc : "I am good at assessing situations."},
                {name :"decision_ability2",
                desc : "I often hear that I have sound discernment. "},
                {name :"decision_ability3",
                desc : "Most of the time, my discernments are correct."},
                {name :"decision_ability4",
                desc : "The outcomes of my decisions are often beneficial, as expected.",}]
            },]
          },
          {
            section_name : "Problem-solving ability",
            questions : [{ name : "Problem-solving ability",
            rows : [
            { name : "problem_sol_ability1",
            desc : "I promptly resolve issues when they happen/arise.",},
            { name : "problem_sol_ability2",
            desc : "I quickly address issues when they occur.",},
            { name : "problem_sol_ability3",
            desc : "I quietly resolve the issue when someone causes a problem without escalating the situation.",},]
          }  ]
          }
        ],
        },

        // page[3] 4페이지
        { type: "PrettoSlider",
        name: "LeadershipQuestions",
        sections : [
          {
            section_name : "Humanistic Leadership",
            questions : [{
              name : "Show the vision",
              rows : [
                {name : "vision1",
                 desc : "I provide people with a vision.",},
                {name : "vision2",
                desc : "I envision people with dreams.",},
                {name : "vision3",
                desc : "I make people feel optimistic about the future of our organization.",},]
            },
            {
              name : "Role model",
              rows : [
                {name : "rolemodel1",
                 desc : "I pay attention to my actions, considering their influence on others.",},
                {name : "rolemodel2",
                desc : "I do not show a hopeless attitude in front of people, even in desperate situations.",},
                {name : "rolemodel3",
                desc : "I take action in a way that allows those I lead to observe and learn.",},
                {name : "rolemodel4",
                desc : "I act as a role model, behaving excellently so others can observe and learn from my actions.",}]
            },
            {   
              name : "Mannerism",      
              rows : [
                {name : "mannerism1",
                 desc : "I choose my words carefully to ensure that people do not get hurt.",},
                {name : "mannerism2",
                desc : "I manage my facial expressions well.",},
                {name : "mannerism3",
                desc : "I behave according to proper etiquette."},
                {name : "mannerism4",
                desc : "I teach people kindly and in a detailed manner.",},
                {name : "mannerism5",
                desc : "I do not carelessly share people’s mistakes or faults.",},
                {name : "mannerism6",
                desc : "I constantly provide people with exciting experiences."},
                {name : "mannerism7",
                desc : "I plan activities that people can have fun and enjoy.",},
                {name : "mannerism8",
                desc : "I create a good (positive) work atmosphere with people."},]
            }
            ,{
              name : "Compassion for others",
              rows : [
              {name : "compassion_for_others1",
                desc : "I embrace and treat everyone fairly." },
              {name : "compassion_for_others2",
                desc : "I forgive people for their mistakes and faults." },
              {name : "compassion_for_others3",
                desc : "I give people another chance even if they make mistakes while working." },],
            },]
          },
          {
            section_name : "Organizational Leadership",
            questions : [  {
              name : "Human development",
              rows : [
              {name : "human_dev1",
                desc : "I educate talented people to grow into leaders." },
              {name : "human_dev2",
                desc : "I lead people according to their individual differences." },
              {name : "human_dev3",
                desc : "I guide people by elevating their levels while considering their growth." },
              {name : "human_dev4",
                desc : "I adjust my guidance based on the level of individuals." },],
            },
  
            
  
            {
              name : "Organizational management",
              rows : [
              {name : "organizational_management1",
                desc : "I establish/build organizational structures effectively." },
              {name : "organizational_management2",
                desc : "I manage the organization by assigning clear roles and responsibilities to individuals." },
              {name : "organizational_management3",
                desc : "I strategically allocate team members to each department." },
              {name : "organizational_management4",
                desc : "I place individuals in appropriate positions, considering their unique personalities." },],
            },
  
            {
              name : "Project management",
              rows : [
              {name : "project_management1",
                desc : "I plan and proceed with the work." },
              {name : "project_management2",
                desc : "I ensure that roles are appropriately assigned among people." },
              {name : "project_management3",
                desc : "I distribute tasks effectively." },
              {name : "project_management4",
                desc : "I regularly check the progress of the work and ensure that it is completed within the designated timeframe." },],
            },
  
            {
              name : "Administration",
              rows : [
              {name : "administration1",
                desc : "I operate the organization with a well-structured administrative system." },
              {name : "administration2",
                desc : "I apply the administrative system considering the company’s/organization’s objectives." },
              {name : "administration3",
                desc : "I have a good understanding of administrative laws and can apply them effectively." },],
            },
            {
              name : "guiding skills",
              rows : [
                {name : "guiding_skills1",
                 desc : "I have a philosophy when it comes to leading people.",},
                {name : "guiding_skills2",
                desc : "I possess leadership skills in guiding people.",},
                {name : "guiding_skills3",
                desc : "I am adept at leading and guiding people.",},]
            },]
          },
        ],
        },
      ],
  


    },
  

  showQuestionNumbers: 'off',
};

export const initialData = {
    
    //## 1페이지
    experiences1 : 50,
    experiences2 : 50,
    experiences3 : 50,
    attribute_of_learning1 : 50,
    attribute_of_learning2 : 50,
    attribute_of_learning3	 : 50,
    resiliency1 : 50,
    resiliency2 : 50,
    resiliency3 : 50,
    belief_in_telent1 : 50,
    belief_in_telent2 : 50,
    belief_in_telent3 : 50,
    appearance1 : 50,
    appearance2 : 50,
    appearance3 : 50,
    resp_behaviors1 : 50,
    resp_behaviors2 : 50,
    resp_behaviors3 : 50,
    resp_behaviors4 : 50,
    self_evaluation1 : 50,
    self_evaluation2 : 50,
    self_evaluation3 : 50,
    habit_of_writting1 : 50,
    habit_of_writting2 : 50,
    habit_of_writting3 : 50,
    // ## 2페이지 : 50
    listening1 : 50,
    listening2 : 50,
    listening3 : 50,
    listening4 : 50,
    communication_envir1 : 50,
    communication_envir2 : 50,
    communication_envir3 : 50,
    communication_envir4 : 50,
    operating_through_communication1 : 50,
    operating_through_communication2 : 50,
    operating_through_communication3 : 50,
    lead_under_policy1 : 50,
    lead_under_policy2 : 50,
    lead_under_policy3 : 50,
    human_resources_management1 : 50,
    human_resources_management2 : 50,
    human_resources_management3 : 50,
    human_resources_management3 : 50,
    conflicts_management1 : 50,
    conflicts_management2 : 50,
    conflicts_management3 : 50,
    conflicts_management4 : 50,
    data_collection1 : 50,
    data_collection2 : 50,
    data_collection3 : 50,
    resonalble_decision_making1 : 50,
    resonalble_decision_making2 : 50,
    resonalble_decision_making3 : 50,
    resonalble_decision_making4 : 50,
    decision_ability1 : 50,
    decision_ability2 : 50,
    decision_ability3 : 50,
    decision_ability4 : 50,
    //## 3페이지 : 50,
    leadership1 : 50,
    leadership2 : 50,
    leadership3 : 50,
    vision1 : 50,
    vision2 : 50,
    vision3 : 50,
    rolemodel1 : 50,
    rolemodel2 : 50,
    rolemodel3 : 50,
    rolemodel4 : 50,
    mannerism1 : 50,
    mannerism2 : 50,
    mannerism3 : 50,
    mannerism4 : 50,
    mannerism5 : 50,
    mannerism6 : 50,
    mannerism7 : 50,
    mannerism8 : 50,
    
    //#4페이지 : 50,
    human_dev1 : 50,
    human_dev2 : 50,
    human_dev3 : 50,
    human_dev4 : 50,
    compassion_for_others1 : 50,
    compassion_for_others2 : 50,
    compassion_for_others3 : 50,
    organizational_management1 : 50,
    organizational_management2 : 50,
    organizational_management3 : 50,
    organizational_management4 : 50,
    project_management1 : 50,
    project_management2 : 50,
    project_management3 : 50,
    project_management4 : 50,
    administration1 : 50,
    administration2 : 50,
    administration3 : 50,

    //# 5페이지 : 50,
    problem_sol_ability1 : 50,
    problem_sol_ability2 : 50,
    problem_sol_ability3 : 50,
};

