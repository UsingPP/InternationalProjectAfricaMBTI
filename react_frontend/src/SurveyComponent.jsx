import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import * as SurveyTheme from "survey-core/themes";
import "./index.css";
import { processDataFromServer } from "./surveyJsoncopy"; // 데이터 처리 함수 import

class SurveyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surveyData: {
                "title": "Leadership Survey",
                "description": "Thank you",
                "pages": [
                    {
                        "name": "page1",
                        "elements": []
                    }
                ]
            }
        };
        this.getQuestionListFromServer('http://127.0.0.1:8000/api/question-list?key=H')
            .then(() => this.getQuestionListFromServer('http://127.0.0.1:8000/api/question-list/?key=SDT'))
            .then(() => this.getQuestionListFromServer('http://127.0.0.1:8000/api/question-list/?key=L'));
    }

    async getQuestionListFromServer(url) {
        const params = new URLSearchParams(new URL(url).search);
        const key = params.get('key');

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            // 서버에서 받은 데이터를 처리하는 함수 호출
            const surveyJsonData = processDataFromServer(data, key);
            this.setState(prevState => ({
                surveyData: {
                    ...prevState.surveyData,
                    pages: prevState.surveyData.pages.map(page => {
                        if (page.name === "page1") {
                            return {
                                ...page,
                                elements: [
                                    ...page.elements,
                                    surveyJsonData
                                ]
                            };
                        }
                        return page;
                    })
                }
            }));
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    }

    render() {
        const { surveyData } = this.state;
        if (!surveyData) {
            return <p>Loading...</p>;
        }
        const survey = new Model(surveyData);
        survey.applyTheme(SurveyTheme.SharpLight);
        survey.onComplete.add((sender, options) => {
            console.log(JSON.stringify(sender.data, null, 3));
        });

        return <Survey model={survey} />;
    }
}

export default SurveyComponent;
