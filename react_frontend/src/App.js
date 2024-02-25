import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const surveyJson = {
  pages: [{
      elements: [{
          type: "html",
          html: "<h2>서문</h2>"
      }]
  }, {
      elements: [{
          name: "satisfaction-score",
          title: "1",
          type: "radiogroup",
          choices: [
              { value: 5, text: "Fully satisfying" },
              { value: 4, text: "Generally satisfying" },
              { value: 3, text: "Neutral" },
              { value: 2, text: "Rather unsatisfying" },
              { value: 1, text: "Not satisfying at all" }
          ],
          isRequired: true
      }]
  },{
    elements: [{
        name: "satisfaction-score",
        title: "1",
        type: "radiogroup",
        choices: [
            { value: 5, text: "Fully satisfying" },
            { value: 4, text: "Generally satisfying" },
            { value: 3, text: "Neutral" },
            { value: 2, text: "Rather unsatisfying" },
            { value: 1, text: "Not satisfying at all" }
        ],
        isRequired: true
    }]
  }, {
      elements: [{
          name: "what-would-make-you-more-satisfied",
          title: "2",
          type: "comment",
          visibleIf: "{satisfaction-score} = 4"
      }, {
          name: "nps-score",
          title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
          type: "rating",
          rateMin: 1,
          rateMax: 5
      }],
      visibleIf: "{satisfaction-score} >= 4"
  }, {
      elements: [{
          name: "how-can-we-improve",
          title: "In your opinion, how could we improve our product?",
          type: "comment"
      }],
      visibleIf: "{satisfaction-score} = 3"
  }, {
      elements: [{
          name: "disappointing-experience",
          title: "Please let us know why you had such a disappointing experience with our product",
          type: "comment"
      }],
      visibleIf: "{satisfaction-score} =< 2"
  }],
  showQuestionNumbers: "off",
  pageNextText: "Forward",
  completeText: "Submit",
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: "Take the Survey",
  completedHtml: "Thank you for your feedback!",
  showPreviewBeforeComplete: "showAnsweredQuestions"
};

function App() {
  const survey = new Model(surveyJson);

  return <Survey model={survey} />;
}

export default App;
