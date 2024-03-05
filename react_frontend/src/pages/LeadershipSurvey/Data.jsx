export const initialData = {
  H1: '',
  H2: '',
  H3: '',
  H4: '',
  H5: '',
  SDT1: '',
  SDT2: '',
  SDT3: '',
  SDT4: '',
  SDT5: '',
  SDT6: '',
  SDT7: '',
  SDT8: '',
  SDT9: '',
  SDT10: '',
  SDT11: '',
  SDT12: '',
  SDT13: '',
  SDT14: '',
  SDT15: '',
  SDT16: '',
  SDT17: '',
  L_ST1: '',
  L_ST2: '',
  L_ST3: '',
  L_ST4: '',
  L_A1: '',
  L_A2: '',
  L_A3: '',
  L_A4: '',
  L_A5: '',
  L_N1: '',
  L_N2: '',
  L_S1: '',
  L_S2: '',
  L_C1: '',
  L_C2: '',
  L_C3: '',
  L_C4: '',
  L_C5: '',
  L_CT1: '',
  L_CT2: '',
  L_SA1: '',
  L_SA2: '',
  L_SA3: '',
  L_PS1: '',
  L_PS2: '',
  comment: '',
  contact_여부: '',
};

export const Data = {
  title: 'Leadership Survey',
  description:
    'Thank you for using our service. We would highly appreciate if you would take the time to fill our cancellation survey. This would help us improve the service.',
  pages: [
    {
      name: 'page1',
      elements: [
        {
          type: 'nouislider',
          name: 'range',
          title: 'Please range',
        },
        {
          type: 'radiogroup',
          // type : html 사이에서 보여지는 모습
          name: 'H1',
          // name : html 상에서의 name과 동일. 변수 이름
          title: '성별?',
          choices: [
            'Male',
            'Female',
            'Other',
            //값들은 전부 string 형태로 저장됨
          ],
        },
        {
          type: 'radiogroup',
          name: 'H2',
          title: '대륙',
          choices: [
            'Africa',
            'Europe',
            'North America',
            'South America',
            'Asia',
            'Austrailia',
            'Antarctica',
          ],
        },
        {
          type: 'radiogroup',
          name: 'H3',
          title: 'Choose following option describe you the best',
          showOtherItem: true,
          choices: [
            'I am an undergraduate student',
            'I am a graduate student',
            'I am in a professional vacational (TVET/CTE) program ',
            'I am a working professional',
          ],
        },
        {
          type: 'radiogroup',
          name: 'H4',
          title: 'age',
          choices: [
            '~10',
            '10~20',
            '20~30',
            '30~40',
            '40~50',
            '50~60',
            'over 60',
          ],
        },
        {
          type: 'matrix',
          name: 'future_using',
          titleLocation: 'hidden',
          columns: ['1', '2', '3', '4', '5', '6', '7'],
          rows: [
            {
              value: 'H5',
              text: 'Your Leadership Point?',
            },
          ],
        },

        {
          type: 'matrix',
          name: 'STD',
          title: 'Sustainable Development Topics',
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
            },
            {
              value: 'STD2',
              text: 'GOAL 2: Zero Hunger',
            },
            {
              value: 'STD3',
              text: 'GOAL 3: Good Health and Well-being',
            },
            {
              value: 'STD4',
              text: 'GOAL 4: Quality Education',
            },
            {
              value: 'STD5',
              text: 'GOAL 5: Gender Equality',
            },
            {
              value: 'STD6',
              text: 'GOAL 6: Clean Water and Sanitation',
            },
            {
              value: 'STD7',
              text: 'GOAL 7: Affordable and Clean Energy',
            },
            {
              value: 'STD8',
              text: 'GOAL 8: Decent Work and Economic Growth',
            },
            {
              value: 'STD9',
              text: 'GOAL 9: Industry, Innovation and Infrastructure',
            },
            {
              value: 'STD10',
              text: 'GOAL 10: Reduced Inequality',
            },
            {
              value: 'STD11',
              text: 'GOAL 11: Sustainable Cities and Communities',
            },
            {
              value: 'STD12',
              text: 'GOAL 12: Responsible Consumption and Production',
            },
            {
              value: 'STD13',
              text: 'GOAL 13: Climate Action',
            },
            {
              value: 'STD14',
              text: 'GOAL 14: Life Below Water',
            },
            {
              value: 'STD15',
              text: 'GOAL 15: Life on Land',
            },
            {
              value: 'STD16',
              text: 'GOAL 16: Peace and Justice Strong Institutions',
            },
            {
              value: 'STD17',
              text: 'GOAL 17: Partnerships to achieve the Goal',
            },
          ],
        },
        {
          type: 'matrix',
          name: 'L-ST',
          title:
            'Leadership discrement Test [Systems thinking] Please rate your level of following competence.',
          columns: [
            'Extremely incompetent',
            'Somewhat incompetent',
            'Neither competent nor incompetent',
            'Somewhat competent',
            'Extremely competent',
          ],
          rows: [
            {
              value: 'L-ST1',
              text: 'The abilities to recognize and understand interrelationships between all things ',
            },
            {
              value: 'L-ST2',
              text: 'The ability to analyze complex systems ',
            },
            {
              value: 'L-ST3',
              text: 'The ability to think of how systems are embedded within different domains and different scales ',
            },
            {
              value: 'L-ST4',
              text: 'The ability to deal with uncertainty',
            },
          ],
        },
        {
          type: 'matrix',
          name: 'L-A',
          title:
            '[Anticipatory] Please rate your level of following competence.',
          columns: [
            'Extremely incompetent',
            'Somewhat incompetent',
            'Neither competent nor incompetent',
            'Somewhat competent',
            'Extremely competent',
          ],
          rows: [
            {
              value: 'L-A1',
              text: 'TThe ability to create one`s own visions for the future ',
            },
            {
              value: 'L-A2',
              text: 'The ability to create one`s own visions for the future ',
            },
            {
              value: 'L-A3',
              text: 'The ability to apply the precautionary principle',
            },
            {
              value: 'L-A4',
              text: 'The ability to assess the consequences of actions ',
            },
            {
              value: 'L-A5',
              text: 'The ability to deal with risks and changes',
            },
          ],
        },
        {
          type: 'matrix',
          name: 'L-N',
          title: '[Normative] Please rate your level of following competence.',
          columns: [
            'Extremely incompetent',
            'Somewhat incompetent',
            'Neither competent nor incompetent',
            'Somewhat competent',
            'Extremely competent',
          ],
          rows: [
            {
              value: 'L-N1',
              text: 'The ability to understand and reflect on the norms and values that underlie one’s actions ',
            },
            {
              value: 'L-N2',
              text: 'The ability to negotiate sustainability values, principles, goals, and targets, in a context of conflicts of interests and trade-offs, uncertain knowledge and contradiction',
            },
          ],
        },

        {
          type: 'matrix',
          name: 'L-S',
          title: '[Strategic] Please rate your level of following competence.',
          columns: [
            'Extremely incompetent',
            'Somewhat incompetent',
            'Neither competent nor incompetent',
            'Somewhat competent',
            'Extremely competent',
          ],
          rows: [
            {
              value: 'L-S1',
              text: 'The ability to collectively develop and implement innovative actions that further sustainability at the local level and further afield',
            },
            {
              value: 'L-S2',
              text: 'The ability to intervene and transition into situations, develop and select strategic options to transform and improve governance',
            },
          ],
        },
        {
          type: 'matrix',
          name: 'L-C',
          title:
            '[Collaboration] Please rate your level of following competence.',
          columns: [
            'Extremely incompetent',
            'Somewhat incompetent',
            'Neither competent nor incompetent',
            'Somewhat competent',
            'Extremely competent',
          ],
          rows: [
            {
              value: 'L-C1',
              text: 'The ability to learn from others',
            },
            {
              value: 'L-C2',
              text: 'The ability to understand and respect the needs, perspectives and actions of others (empathy)',
            },
            {
              value: 'L-C3',
              text: 'The ability to understand, relate to and be sensitive to others (empathic leadership)',
            },
            {
              value: 'L-C4',
              text: 'The ability to deal with conflicts in a group',
            },
            {
              value: 'L-C5',
              text: 'The ability to facilitate collaborative and participatory problem solving',
            },
          ],
        },
        {
          type: 'matrix',
          name: 'L-CT',
          title:
            '[Critical thinking] Please rate your level of following competence.',
          columns: [
            'Extremely incompetent',
            'Somewhat incompetent',
            'Neither competent nor incompetent',
            'Somewhat competent',
            'Extremely competent',
          ],
          rows: [
            {
              value: 'L-CT1',
              text: 'The ability to question norms, practices and opinions',
            },
            {
              value: 'L-CT2',
              text: 'The ability to reflect on own one`s values, perceptions and actions',
            },
            {
              value: 'L-CT3',
              text: 'The ability to take a position in the sustainability discourse',
            },
          ],
        },
        {
          type: 'matrix',
          name: 'L-SA',
          title:
            '[Self-awareness] Please rate your level of following competence.',
          columns: [
            'Extremely incompetent',
            'Somewhat incompetent',
            'Neither competent nor incompetent',
            'Somewhat competent',
            'Extremely competent',
          ],
          rows: [
            {
              value: 'L-SA1',
              text: 'The ability to reflect on my own role in the local community and (global) society',
            },
            {
              value: 'L-SA2',
              text: 'The ability to continually evaluate and further motivate one`s actions ',
            },
            {
              value: 'L-SA3',
              text: 'The ability to deal with one`s feelings and desires',
            },
          ],
        },
        {
          type: 'matrix',
          name: 'L-PS',
          title:
            '[Problem-solving] Please rate your level of following competence',
          columns: [
            'Extremely incompetent',
            'Somewhat incompetent',
            'Neither competent nor incompetent',
            'Somewhat competent',
            'Extremely competent',
          ],
          rows: [
            {
              value: 'L-PS1',
              text: 'The ability to use a variety of systems to address complex issues of sustainable development',
            },
            {
              value: 'L-PS2',
              text: 'The ability to apply different problem-solving frameworks to complex sustainability problems and develop viable, inclusive and equitable',
            },
            {
              value: 'L-PS3',
              text: '?',
            },
          ],
        },
        {
          type: 'comment',
          name: 'service_improvements',
          title: 'How can we improve our service?',
          maxLength: 500,
        },
      ],
    },
  ],

  showQuestionNumbers: 'off',
};
