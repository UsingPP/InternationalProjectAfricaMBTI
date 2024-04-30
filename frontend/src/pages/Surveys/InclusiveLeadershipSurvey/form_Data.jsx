export const FormData = {
  "ko" : {
    "title": "포용적 리더십 설문조사",
    "description": "포용적 리더십 설문조사에 참여해 주셔서 감사합니다.",
    "notice" : "아래는 각 역량에 대한 설명입니다. 각 역량에 대해 본인의 역량을 100점 척도로 평가해주세요",
    "sections": [
      {
        "type": "PrettoSlider",
        "marks": [
          {
            "value": 0,
            "label": "매우\n동의하지\n않음"
          },
          {
            "value": 25,
            "label": "동의하지\n않음"
          },
          {
            "value": 50,
            "label": "중립"
          },
          {
            "value": 75,
            "label": "동의"
          },
          {
            "value": 100,
            "label": "매우\n동의"
          }
        ],
        "title": "이 섹션에서는 총 <b>3</b>가지의 포괄적인 리더십 역량에 대한 설문조사를 진행하겠습니다.",
        "questions": [
          {
            "name": "개방성",
            "image": "https://www.thomas.co/sites/default/files/thomas-files/styles/resource_banner_image/public/2022-06/Openness%20Personality%20Trait.jpg?itok=PyKkQ27r",
            "title": "[개방성] 다음 역량에 대한 동의 정도를 평가해 주십시오.",
            "detail": "“개방성 역량”은 새로운 아이디어, 경험 및 시각을 받아들이는 능력을 의미합니다. 새로운 상황에 대한 호기심과 유연성을 강조하며, 다양한 아이디어나 접근 방식을 탐구하고 받아들이는 능력을 나타냅니다. 높은 개방성 역량을 갖춘 개인들은 새로운 경험을 찾거나 다양한 시각과 관점과 소통하며 변화에 효과적으로 적응하는 경향이 있습니다. 이러한 역량은 창의성, 혁신 및 다양한 환경에서의 적응력을 촉진하여 다양한 상황에서 개인이 번창할 수 있도록 합니다.",
            "rows": [
              {
                "name": "openness1",
                "text": "새로운 아이디어에 대해 열려 있습니다."
              },
              {
                "name": "openness2",
                "text": "작업 프로세스를 개선할 수 있는 새로운 기회에 주의를 기울입니다."
              },
              {
                "name": "openness3",
                "text": "원하는 목표를 논의하고 이를 달성하기 위한 새로운 방법에 대해 열려 있습니다."
              }
            ]
          },
          {
            "name": "가용성",
            "title": "[가용성] 다음 역량에 대한 동의 정도를 평가해 주십시오.",
            "detail": "“가용성 역량”은 조직이나 팀 환경에서 필요할 때 언제든 참여하고 협력할 수 있는 개인의 능력을 의미합니다. 다른 사람들을 도와주고 지원을 제공하며 조직의 목표를 달성하기 위해 적극적으로 참여하는 것을 포함합니다.",
            "image": "https://blog.vantagecircle.com/content/images/2020/10/open_door_policy.png",
            "rows": [
              {
                "name": "availability1",
                "text": "문제에 대해 상담할 수 있습니다."
              },
              {
                "name": "availability2",
                "text": "항상 팀 내에서 계속된 '존재'로, 언제든지 사용 가능한 사람입니다."
              },
              {
                "name": "availability3",
                "text": "전문적인 질문에 답변하거나 상담할 수 있습니다."
              },
              {
                "name": "availability4",
                "text": "다른 사람들의 요청을 들어주기 위해 준비되어 있습니다."
              }
            ]
          },
          {
            "name": "접근성",
            image : "data:image/jpeg;base64,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",

            "detail": "“접근성 역량”은 물리적이거나 인지적인 장벽에 관계없이 모든 개인이 리소스, 서비스 또는 정보에 공정하게 접근할 수 있는 개인 또는 조직의 능력을 의미합니다. 이는 장애가 있는 사람들이나 다양한 요구를 가진 사람들도 제공된 리소스나 서비스를 효과적으로 활용하고 이득을 얻을 수 있도록 보장하는 것을 포함합니다.",
            "title": "[접근성] 다음 역량에 대한 동의 정도를 평가해 주십시오.",
            "rows": [
              {
                "name": "accessibility1",
                "text": "다른 사람들이 신규 문제에 접근할 수 있도록 장려합니다."
              },
              {
                "name": "accessibility2",
                "text": "신규 문제를 논의하기 위해 접근 가능합니다."
              }
            ]
          }
        ]
      },
    ]
  },
  en : {
  title: 'Inclusive leadership survey',
  notice : "Please read the following description of each competency and rate your own competency in that competency on a scale of 100 points.",
  description:
    "Thank you for agreeing to participate in the Inclusive leadership survey.",
  sections: [
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
      title: "In this section, we will conduct a survey on a total of <b>3</b>key Inclusive leadership discretion. ",
      questions: [
        {
          name: 'openness',
          image : "https://www.thomas.co/sites/default/files/thomas-files/styles/resource_banner_image/public/2022-06/Openness%20Personality%20Trait.jpg?itok=PyKkQ27r",
          title:
            '[openness] Please rate your degree of agreement of following competence.',
          detail : `"Openness competency" refers to the ability to embrace new ideas, experiences, and perspectives. It highlights a person's curiosity and flexibility in dealing with new situations, as well as their capacity to explore and embrace diverse ideas or approaches. Individuals with high openness competency are inclined to seek out novel experiences, engage with different viewpoints, and adapt effectively to change. This competency fosters creativity, innovation, and adaptability in various contexts, allowing individuals to thrive in dynamic and evolving environments.`,

          rows: [
            {
              name: 'openness1',
              text: 'I am open to hearing new ideas ',
            },
            {
              name: 'openness2',
              text: 'I am attentive to new opportunities to improve work processes ',
            },
            {
              name: 'openness3',
              text: 'I am open to discuss the desired goals and new ways to achieve them',

            },
          ],
        },
        {
          name: 'availability',
          title:
          '[availability] Please rate your degree of agreement of following competence.',
            detail : `"Availability competency" refers to an individual's ability to actively participate and collaborate with others, making themselves accessible and ready to contribute whenever needed within an organization or team setting. It encompasses being willing to assist others, offering support, and actively engaging in tasks to help achieve the organization's goals.`,
          image : "https://blog.vantagecircle.com/content/images/2020/10/open_door_policy.png",
          rows: [
            {
              name: 'availability1',
              text: 'I am available for consultation on problems ',
            },
            {
              name: 'availability2',
              text: 'I am an ongoing "presence" in this team-someone who is readily available ',
            },
            {
              name: 'availability3',
              text: 'I am available for professional questions I open to consult with others ',
            },
            {
              name: 'availability4',
              text: 'I am ready to listen to others’ requests ',
            },
           
          ],
        },
        {
          name: 'accessibility',
          image : "data:image/jpeg;base64,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",
          detail : `"Accessibility competency" refers to the ability of an individual or an organization to provide equitable access to resources, services, or information, regardless of physical or cognitive barriers. It involves ensuring that all individuals, including those with disabilities or diverse needs, can effectively utilize and benefit from the available resources or services.`,

          title: '[accessibility]  Please rate your degree of agreement of following competence.',
          rows: [
            {
              name: 'accessibility1',
              text: 'I encourage others to access to me on emerging issues',
            },
            {
              name: 'accessibility2',
              text: 'I am accessible for discussing emerging problems',
            },
          ],
        }]},
        ]
}};

export const initialData = {
  openness1 : 50,
  openness2 : 50,
  openness3 : 50,
  availability1 : 50,
  availability2 : 50,
  availability3 : 50,
  availability4 : 50,
  accessibility1 : 50,
  accessibility2 : 50,

};

