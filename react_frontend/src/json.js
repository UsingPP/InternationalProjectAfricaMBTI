async function getDataFromServer(code, start, end) {
  const url = `http://127.0.0.1:8000/api/question-list/?code=${code}&start=${start}&end=${end}`;
  const data = await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  return data
} 
async function fetchData(){
    let myVariables = {
        H : [],
        SDT_QuestionList : [],
        L_ST: [],
        L_A: [],
        L_N: [],
        L_S: [],
        L_C: [],
        L_CT: [],
        L_SA: [],
        L_PS: []
    };
    await getDataFromServer("SDT","1","17").then((questions) => {
        questions.forEach((question) => {
            let q = {
                value: question.question_code,
                text: question.question_details,
            };
            // 가공된 객체를 리스트에 추가합니다.
            myVariables.SDT_QuestionList.push(q);
        });
        // 데이터 처리가 완료된 후에 SDT_QuestionList를 사용할 수 있습니다.
    }).catch((error) => {
        console.error("Error fetching data:", error);
    });
    
    


    await getDataFromServer("L-","1","10").then((questions) => {
        questions.forEach((question) => {
            let q = {
                value: question.question_code,
                text: question.question_details,
            };
            let variableName = question.question_code.replace(/\d+$/, '').replace(/-/g, '_');
            myVariables[variableName].push(q);
    
        });
    }).catch((error) => {
        console.error("Error fetching data:", error);
    }); 


    await getDataFromServer("H","1","10").then((questions) => {
        questions.forEach((question) => {
            let q = {
                name: question.question_code,
                title: question.question_details,
                type: question.survey_type,
            };
            console.log(q)

            myVariables.H.push(q);
    
        });
    }).catch((error) => {
        console.error("Error fetching data:", error);
    }); 


    return myVariables
}

export const json = await fetchData().then( (myVariables) =>{
    console.log(myVariables.H)
    let data = {
        title: "Cancellation Survey",
        description:
          "Thank you for using our service. We would highly appreciate if you would take the time to fill our cancellation survey. This would help us improve the service.",
        pages: [
          {
            name: "page1",
            elements: [
              {
                type: myVariables.H[0].type,
                name: myVariables.H[0].name,
                title: myVariables.H[0].title,
                choices: [
                  "Male",
                  "Female",
                  "Other",
                  //값들은 전부 string 형태로 저장됨
                ],
              },
              {
                type: myVariables.H[1].type,
                name: myVariables.H[1].name,
                title: myVariables.H[1].title,
                choices: [
                  "Africa",
                  "Europe",
                  "North America",
                  "South America",
                  "Asia",
                  "Austrailia",
                  "Antarctica",
                ],
              },
              {
                type: myVariables.H[2].type,
                name: myVariables.H[2].name,
                title: myVariables.H[2].title,
                showOtherItem: true,
                choices: [
                  "I am an undergraduate student",
                  "I am a graduate student",
                  "I am in a professional vacational (TVET/CTE) program ",
                  "I am a working professional",
                ],
              },
              {
                type: myVariables.H[3].type,
                name: myVariables.H[3].name,
                title: myVariables.H[3].title,
                choices: [
                  "~10",
                  "10~20",
                  "20~30",
                  "30~40",
                  "40~50",
                  "50~60",
                  "over 60",
                ],
              },
              {
                type: myVariables.H[4].type,
                name: myVariables.H[4].name,
                title: myVariables.H[4].title,
                "isRequired": true,
                "rateCount": 7,
                "rateMin": 1,
                "rateMax": 7,
                "minRateDescription": "(Most unlikely)",
                "maxRateDescription": "(Most likely)"
              },
              {
                type: "matrix",
                name: "SDT",
                title: "Sustainable Development Topics",
                columns: [
                  "Not interested",
                  "somewhat interested",
                  "Neutral",
                  "intereted",
                  "Very interested",
                ],
                rows: myVariables["SDT_QuestionList"]
              },
              {
                type: "matrix",
                name: "L-ST",
                title:
                  "Leadership discrement Test [Systems thinking] Please rate your level of following competence.",
                columns: [
                  "Extremely incompetent",
                  "Somewhat incompetent",
                  "Neither competent nor incompetent",
                  "Somewhat competent",
                  "Extremely competent",
                ],
                rows: myVariables["L_ST"]
              },
              {
                type: "matrix",
                name: "L-A",
                title:
                  "[Anticipatory] Please rate your level of following competence.",
                columns: [
                  "Extremely incompetent",
                  "Somewhat incompetent",
                  "Neither competent nor incompetent",
                  "Somewhat competent",
                  "Extremely competent",
                ],
                rows: myVariables["L_A"]
              },
              {
                type: "matrix",
                name: "L-N",
                title: "[Normative] Please rate your level of following competence.",
                columns: [
                  "Extremely incompetent",
                  "Somewhat incompetent",
                  "Neither competent nor incompetent",
                  "Somewhat competent",
                  "Extremely competent",
                ],
                rows: myVariables["L_N"]
              },
      
              {
                type: "matrix",
                name: "L-S",
                title: "[Strategic] Please rate your level of following competence.",
                columns: [
                  "Extremely incompetent",
                  "Somewhat incompetent",
                  "Neither competent nor incompetent",
                  "Somewhat competent",
                  "Extremely competent",
                ],
                rows: myVariables["L_S"]
              },
              {
                type: "matrix",
                name: "L-C",
                title:
                  "[Collaboration] Please rate your level of following competence.",
                columns: [
                  "Extremely incompetent",
                  "Somewhat incompetent",
                  "Neither competent nor incompetent",
                  "Somewhat competent",
                  "Extremely competent",
                ],
                rows: myVariables["L_C"]
              },
              {
                type: "matrix",
                name: "L-CT",
                title:
                  "[Critical thinking] Please rate your level of following competence.",
                columns: [
                  "Extremely incompetent",
                  "Somewhat incompetent",
                  "Neither competent nor incompetent",
                  "Somewhat competent",
                  "Extremely competent",
                ],
                rows: myVariables["L_CT"]
              },
              {
                type: "matrix",
                name: "L-SA",
                title:
                  "[Self-awareness] Please rate your level of following competence.",
                columns: [
                  "Extremely incompetent",
                  "Somewhat incompetent",
                  "Neither competent nor incompetent",
                  "Somewhat competent",
                  "Extremely competent",
                ],
                rows: myVariables["L_SA"]
              },
              {
                type: "matrix",
                name: "L-PS",
                title:
                  "[Problem-solving] Please rate your level of following competence",
                columns: [
                  "Extremely incompetent",
                  "Somewhat incompetent",
                  "Neither competent nor incompetent",
                  "Somewhat competent",
                  "Extremely competent",
                ],
                rows: myVariables["L_PS"]
              },
              {
                type: "comment",
                name: "comment",
                title: "How can we improve our service?",
                maxLength: 500,
              },
              {
                type: "comment",
                name: "Is_contact",
                title: "Do you want to contact with us?",
                maxLength: 500,
              },
            ],
          },
        ],
      
        showQuestionNumbers: "off",
      };
    return data      
}
)


