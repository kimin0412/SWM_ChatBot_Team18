const headerStyleBlue = 'blue';
const headerStyleRed = 'red';
const buttonStylePrimary = 'primary';
const buttonStyleDanger = 'danger';

exports.writtenTestOneRight =  [
    {
      type: "header",
      text: "필기 시험 1번 문제 결과",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://data.ac-illust.com/data/thumbnails/0f/0fa598c7a25879520d8b8479add2b481_t.jpeg"
    },
    {
      type: "text",
      text: "*정답입니다!*\n\n대부분의 사람들은 오른발로 엑셀과 브레이크를 조절한다고 합니다.",
      markdown: true
    },
    {
      type: "button",
      text: "다음 문제 풀기",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'writtenTestTwo',
	  value: 'writtenTestTwo',    
	}
];

exports.writtenTestOneWrong =  [
    {
      type: "header",
      text: "필기 시험 1번 문제 결과",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://thumb.ac-illust.com/69/69db2cf46c9eb7e40a207dd075c386f9_t.jpeg"
    },
    {
      type: "text",
      text: "*틀렸습니다!*\n\n음.. 실제로 운전할 때에 양발을 사용했었던가..?",
      markdown: true
    },
    {
      type: "button",
      text: "다시 풀기",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'writtenTestOne',
	  value: 'writtenTestOne',    
	}
];

exports.writtenTestTwoRight =  [
    {
      type: "header",
      text: "필기 시험 2번 문제 결과",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://data.ac-illust.com/data/thumbnails/0f/0fa598c7a25879520d8b8479add2b481_t.jpeg"
    },
    {
      type: "text",
      text: "*정답입니다!*\n\nP는 Parking으로 주차 시에, N은 Neutral로 신호 대기나 자동세차 시에 사용합니다.",
      markdown: true
    },
    {
      type: "button",
      text: "다음 문제 풀기",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'writtenTestThree',
	  value: 'writtenTestThree',    
	}
];

exports.writtenTestTwoWrong = [
    {
      type: "header",
      text: "필기 시험 2번 문제 결과",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://thumb.ac-illust.com/69/69db2cf46c9eb7e40a207dd075c386f9_t.jpeg"
    },
    {
      type: "text",
      text: "*틀렸습니다!*\n\n으음..일단.. 주차(Parking) 시에는 엑셀을 밟아도 절대 움직이면 안 되겠지..?",
      markdown: true
    },
    {
      type: "button",
      text: "다시 풀기",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'writtenTestTwo',
	  value: 'writtenTestTwo',    
	}
];

exports.writtenTestThreeRight = [
    {
      type: "header",
      text: "필기 시험 3번 문제 결과",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://data.ac-illust.com/data/thumbnails/0f/0fa598c7a25879520d8b8479add2b481_t.jpeg"
    },
    {
      type: "text",
      text: "*정답입니다!*\n\n차량의 사이드미러는 모두 운전자석에 앉은 운전자에 알맞게 설정합니다.",
      markdown: true
    },
    {
      type: "button",
      text: "다음으로",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'afterWrittenTest',
	  value: 'afterWrittenTest',    
	}
];

exports.writtenTestThreeWrong =  [
    {
      type: "header",
      text: "필기 시험 3번 문제 결과",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://thumb.ac-illust.com/69/69db2cf46c9eb7e40a207dd075c386f9_t.jpeg"
    },
    {
      type: "text",
      text: "*틀렸습니다!*\n\n조수석에서 사이드미러를 확인할 필요가 있던가??",
      markdown: true
    },
    {
      type: "button",
      text: "다시 풀기",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'writtenTestThree',
	  value: 'writtenTestThree',    
	}
];

exports.functionTestOneRight =  [
    {
      type: "header",
      text: "기능 시험 1번 문제 결과",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://data.ac-illust.com/data/thumbnails/0f/0fa598c7a25879520d8b8479add2b481_t.jpeg"
	},
    {
      type: "text",
      text: "*정답입니다!*\n\n출발 전에 안전벨트를 하지 않으면 바로 실격처리됩니다.",
      markdown: true
    },
    {
      type: "button",
      text: "다음 문제 풀기",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'functionTestTwo',
	  value: 'functionTestTwo',    
	}
];

exports.functionTestOneWrong =  [
    {
      type: "header",
      text: "기능 시험 1번 문제 결과",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://thumb.ac-illust.com/69/69db2cf46c9eb7e40a207dd075c386f9_t.jpeg"
    },
    {
      type: "text",
      text: "*틀렸습니다!*\n\n물론 이것도 엄청 중요하지만..! 잊어버린 이것을 하지 않으면 목숨이 위험했던 것 같아..",
      markdown: true
    },
    {
      type: "button",
      text: "다시 풀기",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'functionTestOne',
	  value: 'functionTestOne',    
	}
];


exports.functionTestTwoRight =  [
    {
      type: "header",
      text: "기능 시험 2번 문제 결과",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://data.ac-illust.com/data/thumbnails/0f/0fa598c7a25879520d8b8479add2b481_t.jpeg"
    },
    {
      type: "text",
      text: "*정답입니다!*\n\n좌측 방향 지시등을 켜기 위해서는 좌측 레버를 내려야합니다.",
      markdown: true
    },
    {
      type: "button",
      text: "다음 문제 풀기",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'functionTestThree',
	  value: 'functionTestThree',    
	}
];

exports.functionTestTwoWrong =  [
    {
      type: "header",
      text: "기능 시험 2번 문제 결과",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://thumb.ac-illust.com/69/69db2cf46c9eb7e40a207dd075c386f9_t.jpeg"
    },
    {
      type: "text",
      text: "*틀렸습니다!*\n\n음.. 좌회전을 하려면 핸들을 좌측으로 돌려야겠지..? 이것과 레버 방향이 같다는건..",
      markdown: true
    },
    {
      type: "button",
      text: "다시 풀기",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'functionTestTwo',
	  value: 'functionTestTwo',    
	}
];


exports.functionTestThreeRight =  [
    {
      type: "header",
      text: "기능 시험 3번 문제 결과",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://data.ac-illust.com/data/thumbnails/0f/0fa598c7a25879520d8b8479add2b481_t.jpeg"
    },
    {
      type: "text",
      text: "*정답입니다!*\n\n운전면허 기능시험에서 돌발은 일단정지 후 비상등 점등입니다.",
      markdown: true
    },
    {
      type: "button",
      text: "다음으로",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'afterFunctionTest',
	  value: 'afterFunctionTest',    
	}
];

exports.functionTestThreeWrong =  [
    {
      type: "header",
      text: "기능 시험 3번 문제 결과",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://thumb.ac-illust.com/69/69db2cf46c9eb7e40a207dd075c386f9_t.jpeg"
    },
    {
      type: "text",
      text: "*틀렸습니다!*\n\n현실에서라면 정답이 될 가능성이 조금이라도 있겠지만.. 이건 면허시험이었지?",
      markdown: true
    },
    {
      type: "button",
      text: "다시 풀기",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'functionTestThree',
	  value: 'functionTestThree',    
	}
];

exports.drivingTestOneRight = [
    {
      type: "header",
      text: "주행 시험 1번 문제 결과",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://data.ac-illust.com/data/thumbnails/0f/0fa598c7a25879520d8b8479add2b481_t.jpeg"
    },
    {
      type: "text",
      text: "*정답입니다!*\n\n올바른 차선변경 순서는 방향지시등 켜기 - 차량 확인 - 차량 변경 - 방향지시등 끄기의 순서입니다.",
      markdown: true
    },
    {
      type: "button",
      text: "다음으로",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'drivingTestEnd',
	  value: 'drivingTestEnd',    
	}
];

exports.drivingTestOneWrong = [
    {
      type: "header",
      text: "주행 시험 1번 문제 결과",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://thumb.ac-illust.com/69/69db2cf46c9eb7e40a207dd075c386f9_t.jpeg"
    },
    {
      type: "text",
      text: "*틀렸습니다!*\n\n음.. 먼저 내가 차선을 변경할 것이라고 방향 지시등을 통해 알리는 게 먼저겠지?",
      markdown: true
    },
    {
      type: "button",
      text: "다시 풀기",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'drivingTestFour',
	  value: 'drivingTestFour',
	}
];