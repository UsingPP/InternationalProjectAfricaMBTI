export function processDataFromServer(jsonData, key) {
  const title_list = {
    "H": "인적사항",
    "SDT": "지속가능발전",
    "L": "리더십재량"
  }
  const double_depth_panel = {
    "L":{
      "list": {"ST":{"title":"System Thinking"},
       "A":{"title":"Anticipatory"}, 
       "N":{"title":"Normative"},
       "S":{"title":"Strategic"}, 
       "C":{"title":"Collaboration"}, 
       "CT":{"title":"Critical Thinking"}, 
       "SA":{"title":"Self Awareness"}, 
       "PS":{"title":"Problem Solving"}},
      "title": "리더십재량"
    }
  }

  let surveyJsonData = ""
  let extractedChars = ""

  // 서버에서 받은 데이터를 가공하여 surveyJson 형식에 맞게 변환합니다.
  const generatedElements = jsonData.map(question => {
    let data = {
      name: question.question_code,
      title: question.question_details,
      type: question.survey_type,
      "isRequired": true
      // 이외에 필요한 속성들을 추가로 매핑해주세요.
    };
    if (key == "H") {
      if (data.name == "H4") {
        data["choices"] = [
          "I am an undergraduate student",
          "I am a graduate student",
          "I am a working professional"
        ]

      }
      else if (data.name == "H2") {
        data["choices"] = [
          "1. Asia",
          "2. Africa",
          "3. North America",
          "4. South America",
          "5. Antarctica",
          "6. Europe",
          "7. Oceania"
        ];
      }
      else if (data.name == "H5") {
        data["rateCount"] = 7
        data["rateMax"] = 7

      }
    }
    else if (key == "SDT") {
      data["choices"] = [
        "Not Interested",
        "Somewhat Interested",
        "Neutral",
        "Interested",
        "Very Interested"
      ]
    }
    else if (key == "L") {
      data["choices"] = [
        "Very Interested", "Interested"
      ]
      data["colCount"] = 0
    }
    return data
  })

  if (key in double_depth_panel) {
    surveyJsonData = {
      type: "panel",
      name: "panel",
      elements: [],
      title: double_depth_panel[key]["title"]
    };
    let dicc = double_depth_panel[key]["list"];
    for (let subkey in dicc){
      console.log(subkey)
      surveyJsonData.elements.push({
        "type": "panel",
        "name": key + "-" + subkey,
        "title": dicc[subkey]["title"] ,
        "isRequired": true,
        "elements": [],
        state: "expanded"
      });
    }

    generatedElements.forEach(element => {
      extractedChars = element.name.match(/[A-Z]+/g)
      let code = extractedChars.join("-")
      surveyJsonData.elements.forEach(ele => {
        if (ele.name == code) {
          ele.elements.push(
            element
          )
        }
      })
    });

  } else {
    surveyJsonData = {
      type: "panel",
      name: "personal-information",
      elements: generatedElements,
      title: title_list[key],
      state: "expanded"
      // 필요에 따라 추가 페이지나 세부 설정을 변경해주세요.
    };
  }
  console.log(surveyJsonData)



  return surveyJsonData;
}