const headerStyleBlue = 'blue';
const headerStyleRed = 'red';
const buttonStylePrimary = 'primary';
const buttonStyleDanger = 'danger';

// 게임 장르 선택에서 생존이 선택될 경우에 보내지는 블록
exports.gameStartBlock =  [
    {
      type: "header",
      text: "Page 1", // 메시지가 보내지는 순서, 단순 페이지 번호
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
	  url: "https://cdn.cvinfo.com/news/photo/201509/3771_5944_2248.jpg",
    },
    {
      type: "text",
      text: " *<운전면허 교육에 어서오세요.>*\n\n본 과정은 필기, 기능, 도로주행 세 가지로 구분되며 적당한 난이도의 시험이 있습니다. 버튼을 누르시면 시작합니다.",
      markdown: true
    },
    {
      type: "button",
      text: "시작하기",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'enterWrittenTest',
	  value: 'enterWrittenTest',    
	}
];

// 필기 시험장 입장 시에 사용되는 블록
exports.enterWrittenTestBlock = [
    {
      type: "header",
      text: "Page 2",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DzJJ3e33ofZWEs0nNRJhHJ9xpS4tcrRWwQ&usqp=CAU"
    },
    {
      type: "text",
      text: " 드디어 나도 운전면허를 딸 수 있는 나이가 되었다!! 빨리 운전면허를 따서 자기랑 재밌게 놀러다녀야지!\n\n첫 번째 시험은 *필기시험*이라는데.. 다들 쉽다고 그랬으니 걱정할 필요 없겠지..?",
      markdown: true
    },
    {
      type: "button",
      text: "필기 시험장 입장",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'writtenTestOne',
	  value: 'writtenTestOne',
	}
];
// 첫 번째 필기시험 문제
exports.writtenTestOneBlock = [
    {
      type: "header",
      text: "Page 3",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqF9xs-j7g1oQ5ig5ot0SLv7muOhdwl1qMA&usqp=CAU"
    },
    {
      type: "text",
      text: "*<문제 1>*\n 자동차에는 엑셀과 브레이크가 존재한다. 엑셀과 브레이크는 운전자를 기준으로 우측에 엑셀, 좌측에 브레이크가 존재한다.\n이 때, 대부분의 운전자들이 *엑셀과 브레이크를 밟는 발*은?\n\n1. 엑셀 : 왼발, 브레이크 : 오른발\n2. 엑셀 : 왼발, 브레이크 : 왼발\n3. 엑셀 : 오른발, 브레이크 : 왼발\n4. 엑셀 : 오른발, 브레이크 : 오른발",
      markdown: true
    },
    {
      type: "button",
      text: "문제 풀기",
      style: buttonStylePrimary,
	  action_type: 'call_modal',
	  action_name: 'writtenTestOne',
	  value: 'writtenTestOne', // request 영역
	}
];

// 두 번째 필기시험 문제
exports.writtenTestTwoBlock = [
    {
      type: "header",
      text: "Page 4",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqF9xs-j7g1oQ5ig5ot0SLv7muOhdwl1qMA&usqp=CAU"
    },
    {
      type: "text",
      text: "*<문제 2>*\n 자동차에는 P(Parking), R(Reverse), N(Neutral), D(Drive)의 4가지 기어가 존재한다. 기어가 올바르게 설정되어 있지 않으면 아무리 엑셀을 밟아도 차체가 움직이지 않는다. 또한 엑셀을 밟지 않아도 차체가 앞이나 뒤로 천천히 움직일 수 있다.\n 다음 중, *엑셀을 밟아도 움직이지 않는 기어끼리* 짝지어진 것은?\n\n1. P, D\n2. R, N\n3. P, N\n4. R, D",
      markdown: true
    },
    {
      type: "button",
      text: "문제 풀기",
      style: buttonStylePrimary,
	  action_type: 'call_modal',
	  action_name: 'writtenTestTwo',
	  value: 'writtenTestTwo', // request 영역
    }
];
// 세 번째 필기시험 문제
exports.writtenTestThreeBlock = [
    {
      type: "header",
      text: "Page 5",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqF9xs-j7g1oQ5ig5ot0SLv7muOhdwl1qMA&usqp=CAU"
    },
    {
      type: "text",
      text: "*<문제 3>*\n 자동차에는 차체의 양옆 상황을 확인해줄 수 있는 사이드미러가 존재한다. 이는 차량의 좌측과 우측에 각 한 개씩 존재하는데 운전자석이 좌측에 위치한 상황에서 각 사이드미러를 어디에 맞추어야 하는가?\n\n1. 좌측 : 조수석, 우측 : 운전석\n2. 좌측 : 운전석, 우측 : 조수석\n3. 좌측 : 운전석, 우측 : 운전석\n4. 좌측 : 조수석, 우측 : 조수석",
      markdown: true
    },
    {
      type: "button",
      text: "문제 풀기",
      style: buttonStylePrimary,
	  action_type: 'call_modal',
	  action_name: 'writtenTestThree',
	  value: 'writtenTestThree', // request 영역
    }
];

// 필기시험 종료 후
exports.afterWrittenTestBlock = [
    {
      type: "header",
      text: "Page 6",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "http://kaka0.net/data/file/humor/thumb-990113839_zTt0q2k1_2c2abf3bf66f3cc331d9e4203fbc5816d1ae2082c0c3eb792f6298364c4b0778_600x726.jpg"
    },
    {
      type: "text",
      text: "음.. 헷갈리는 것이 몇 개 있었지만 나쁘지 않게 본 것 같아! 다음은 기능시험인가?",
      markdown: true
    },
    {
      type: "button",
      text: "다음으로",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'broadcastForFunctionTest',
	  value: 'broadcastForFunctionTest',		
    }
];

// 기능 시험 입장을 위해 알리는 블록
// 추후 변수명을 가져와서 합쳐야 함.
exports.broadcastForFunctionTestBlock =  [
    {
      type: "header",
      text: "Page 7",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
	  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTpf2AX3utJfKMSp2Fql0faQFFER16lzkJFQ&usqp=CAU"
    },
    {
      type: "text",
      text: "소마씨는 지금 바로 기능시험장으로 이동해주시기 바랍니다. 다시 한 번 알립니다. 소마씨는 ...\n\n\n앗.. 나잖아? 빨리 가야겠다!!!",
      markdown: true
    },
    {
      type: "button",
      text: "기능시험장으로",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'readyToFunctionTest',
	  value: 'readyToFunctionTest',
    }
];

// 기능 시험 시작 준비
exports.readyToFunctionTestBlock = [
    {
      type: "header",
      text: "Page 8",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/653/0c1e92110f11b7f16b2395752c1f6e45.jpeg"
    },
    {
      type: "text",
      text: "차에 타니까 갑자기 무척 떨리네..\n아니야!! 연습할 때는 잘 했잖아.. 잘 할 수 있을거야!",
      markdown: true
    },
    {
      type: "button",
      text: "기능시험 시작",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'functionTestOne',
	  value: 'functionTestOne',
    }
];

// 첫 번째 기능 시험 문제
exports.functionTestOneBlock = [
    {
      type: "header",
      text: "Page 9",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqF9xs-j7g1oQ5ig5ot0SLv7muOhdwl1qMA&usqp=CAU"
    },
    {
      type: "text",
      text: "*<문제 1>*\n 소마씨. 기능 시험 시작합니다. 출발하세요.\n\n앗.. 뭔가 잊은 것 같다..! 출발 전에 하는 게 있었는데 뭐였지..?\n\n1. 기도\n2. 안전벨트\n3. 코인 가격 확인\n4. 멘토링 확인",
      markdown: true
    },
    {
      type: "button",
      text: "문제 풀기",
      style: buttonStylePrimary,
	  action_type: 'call_modal',
	  action_name: 'functionTestOne',
	  value: 'functionTestOne',
    }
];

// 두 번째 기능 시험 문제
exports.functionTestTwoBlock = [
    {
      type: "header",
      text: "Page 10",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqF9xs-j7g1oQ5ig5ot0SLv7muOhdwl1qMA&usqp=CAU"
    },
    {
      type: "text",
      text: "*<문제 2>*\n 곧 있으면 *좌회전* 구간이야. *좌측 방향 지시등*을 켜야겠어.\n공식이 있었는데... *핸들을 돌리는 방향과 레버 방향이 동일하다*고 했지?\n\n1. 좌측 레버를 내린다.\n2. 좌측 레버를 올린다.\n3. 좌측 레버를 뽑는다.\n4. 우측 레버를 내린다.",
      markdown: true
    },
    {
      type: "button",
      text: "문제 풀기",
      style: buttonStylePrimary,
	  action_type: 'call_modal',
	  action_name: 'functionTestTwo',
	  value: 'functionTestTwo',
    }
];

// 세 번째 기능 시험 문제
exports.functionTestThreeBlock = [
    {
      type: "header",
      text: "Page 11",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqF9xs-j7g1oQ5ig5ot0SLv7muOhdwl1qMA&usqp=CAU"
    },
    {
      type: "text",
      text: "*<문제 3>*\n*_<돌발!><돌발!><돌발!><돌발!>_*\n*_<돌발!><돌발!><돌발!><돌발!>_*\n*_<돌발!><돌발!><돌발!><돌발!>_*\n*_<돌발!><돌발!><돌발!><돌발!>_*\n\n 기능시험 단골손님인 돌발상황이다!! 어떻게 해야 할까? \n\n1. 급정거 후 뒷목을 잡으며 내린다.\n2. 비상등을 켜고 엑셀을 밟아 빠르게 지나간다.\n3. 좌우측 방향지시등을 빠르게 번갈아 키면서 당황스러움을 표출한다.\n4. 빠르게 브레이크를 밟아 멈춘 후, 비상등을 켠다.",
      markdown: true
    },
    {
      type: "button",
      text: "문제 풀기",
      style: buttonStylePrimary,
	  action_type: 'call_modal',
	  action_name: 'functionTestThree',
	  value: 'functionTestThree',
    }
];

// 기능 시험이 끝나고
exports.afterFunctionTestBlock = [
    {
      type: "header",
      text: "Page 12",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLq6I92CSpdmNKkWE-0Rm1zVgr98gvQk8ykg&usqp=CAU"
    },
    {
      type: "text",
      text: "필기보다 기능이 쉬웠던건 기분탓일까..? 아무튼 앞으로 한 관문 남았다!! 도로주행은 둘이서 볼 수 있다는데 나랑 같이 하는 사람은 누구일까??",
      markdown: true
    },
    {
      type: "button",
      text: "다음으로",
	  action_type: 'submit_action',
	  action_name: 'broadcastForDrivingTest',
	  value: 'broadcastForDrivingTest',
      style: buttonStylePrimary
    }
];

// 도로주행 시험 입장을 위해 알리는 블록
// 추후 변수명을 가져와서 합쳐야 함.
exports.broadcastForDrivingTestBlock = [
    {
      type: "header",
      text: "Page 13",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://dispatch.cdnser.be/wp-content/uploads/2017/04/20170419125834_z11.jpg"
    },
    {
      type: "text",
      text: "소마씨, 폰머슬씨는 지금 바로 2번 차량 앞으로 이동해주시기 바랍니다. 다시 한번 알립니다. 소마씨, 폰머슬씨는 ...\n\n폰머슬씨..? 저사람인가..? 우와 덩치봐.. 교통사고 당하는 것보다 저 사람한테 맞는 게 더 아플 것 같다... 앗 이러고 있을 때가 아니지. 얼른 시험장으로 이동하자.",
      markdown: true
    },
    {
      type: "button",
      text: "시험장으로",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'drivingTestOne',
	  value: 'drivingTestOne',
    }
];

// 도로주행 시작 후 첫 번쨰 블록
exports.drivingTestOneBlock = [
    {
      type: "header",
      text: "Page 14",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://t1.daumcdn.net/cfile/tistory/99E5F5375A68C4B004"
    },
    {
      type: "text",
      text: "*감독관* : 폰머슬씨.. 몇번째죠? 이러다가 우리 정들겠네요.\n아홉 번째 재시험 응시하실 거고요. 지금부터 시험 시작입니다. 출발하시면 됩니다.\n\n폰머슬 : 아, 예~ 알겠습니다 지금 출발할게요.",
      markdown: true
    },
    {
      type: "button",
      text: "다음으로",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'drivingTestTwo',
	  value: 'drivingTestTwo',
    }
];

// 도로주행 시작 후 두 번째 블록
exports.drivingTestTwoBlock = [
    {
      type: "header",
      text: "Page 15",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://t1.daumcdn.net/cfile/tistory/222AB938581AD28830"
    },
    {
      type: "text",
      text: "*감독관*: 핸들 똑바로 잡으세요!! 차가 흔들리잖아요!!\n\n 아니 차선 맞추라고!! 진짜 운전 *같이하네!!!\n\n하.. *실격*입니다.\n\n\n*폰머슬*: 아이 ** 그냥 밟습니다\n\n\n*감독관*: 아 진짜 ***!!!@@",
      markdown: true
    },
    {
      type: "button",
      text: "다음으로",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'drivingTestThree',
	  value: 'drivingTestThree',		
    }
];

// 도로주행 시작 후 세 번째 블록
exports.drivingTestThreeBlock = [
	{
      type: "header",
      text: "Page 16",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "http://www.eplisvod.co.kr/shop/data/goods/1513216348t0.jpg"
    },
    {
      type: "text",
      text: "*감독관*: 하.. 간신히 돌아왔네.. 소마씨 앞에 타세요. 폰머슬씨는 뒤에 타시고요. 지금부터 시험 시작입니다.\n\n\n와...진짜 죽을뻔 했다..\n빨리 시험보고 집에나 가자..",
      markdown: true
    },
    {
      type: "button",
      text: "도로주행 시험 시작",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'drivingTestFour',
	  value: 'drivingTestFour',
    }
];

// 도로주행 시작 후 네 번째 블록
exports.drivingTestFourBlock = [
    {
      type: "header",
      text: "Page 17",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqF9xs-j7g1oQ5ig5ot0SLv7muOhdwl1qMA&usqp=CAU"
    },
    {
      type: "text",
      text: "*<문제 1>*\n 다음을 차선 변경 시에 *옳은 순서대로* 나열하시오.\n\nA. 방향 지시등을 켠다.\nB. 차선 변경을 한다.\nC. 변경할 차선에 차가 있는지 확인한다.\nD. 방향 지시등을 끈다.\n\n1. *A-B-C-D*\n2. *C-A-D-B*\n3. *A-C-B-D*\n4. *B-A-D-C*",
      markdown: true
    },
    {
      type: "button",
      text: "문제 풀기",
      style: buttonStylePrimary,
	  action_type: 'call_modal',
	  action_name: 'drivingTestOne',
	  value: 'drivingTestOne',
    }
];

// 도로주행 시험 종료
exports.drivingTestEndBlock = [
    {
      type: "header",
      text: "Page 18",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVC7rdLYCHhL6P9FSC6Q6gRdUKvf3dluOqpw&usqp=CAU"
    },
    {
      type: "text",
      text: "드디어 끝났다..! 죽을 뻔 했던 것 빼면 무난하게 합격했네.. 빨리 셔틀타고 집에 돌아가야지~!",
      markdown: true
    },
    {
      type: "button",
      text: "셔틀 타러가기",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'shuttleOne',
	  value: 'shuttleOne',
    }
];

// 셔틀 탑승 후 첫 번째 블록
exports.shuttleOneBlock = [
    {
      type: "header",
      text: "Page 19",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "http://www.yongin21.co.kr/news/photo/201009/31799_23901_5938.jpg"
    },
    {
      type: "text",
      text: "*기사님* : 오 학생이 마지막이구만!! 시험은 잘 봤나?\n\n소마 : 아 ㅎㅎ 같이 시험 본 사람때문에 죽을뻔 했던 것만 빼면 괜찮았어요. 운전을 얼마나 성격 *더럽게* 하는지..~ 그 사람은 재시험을 9번이나 봤다는데 또 떨어졌어요.",
      markdown: true
    },
    {
      type: "button",
      text: "다음으로",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'shuttleTwo',
	  value: 'shuttleTwo',
    }
];

// 셔틀 탑승 후 두 번째 블록
exports.shuttleTwoBlock = [
    {
      type: "header",
      text: "Page 20",
      style: headerStyleBlue
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://upload3.inven.co.kr/upload/2020/04/26/bbs/i014587113558.gif"
    },
    {
      type: "text",
      text: "*다른 사람들* : 9번이나 떨어졌데 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ\n\n*기사님* : 저런..ㅋㅋㅋㅋ 그친구는 운전을 어지간히 못했나봐~",
      markdown: true
    },
    {
      type: "button",
      text: "다음으로",
      style: buttonStylePrimary,
	  action_type: 'submit_action',
	  action_name: 'shuttleThree',
	  value: 'shuttleThree',
    }
];

// 셔틀 탑승 후 세 번째 블록
exports.shuttleThreeBlock = [
    {
      type: "header",
      text: "Page 21",
      style: headerStyleRed
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://m1.daumcdn.net/cfile262/image/2566AA4F54E0477813BA46"
    },
    {
      type: "text",
      text: "ㅋㅋㅋㅋㅋㅋㅋㅋ...\n\n어 저 사람은 아까 같이 시험 봤던..?\n뭐야 방금 나를 노려본건가..?\n느낌이 좋지 않다.........",
      markdown: true
    },
    {
      type: "button",
      text: "다음으로",
      style: buttonStyleDanger,
	  action_type: 'submit_action',
	  action_name: 'shuttleFour',
	  value: 'shuttleFour',
    }
];

// 셔틀 탑승 후 네 번쨰 블록
exports.shuttleFourBlock = [
    {
      type: "header",
      text: "Page 22",
      style: headerStyleRed
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://vfan-phinf.pstatic.net/a/32he9e/5_dcfUd018svckya4sqrjg19t_vhkudt.jpg?type=w1000"
    },
    {
      type: "text",
      text: "큰일났다..\n한 명.. 한 명.. 같이 웃던 사람들이 셔틀에서 내린다..\n간절하게 기도했다..\n폰머슬씨와 나만 남지 않기를...\n\n하지만 신은 가혹했다.\n남은 사람은 나와 폰머슬씨, 그리고 기사님뿐이다.",
      markdown: true
    },
    {
      type: "button",
      text: "다음으로",
      style: buttonStyleDanger,
	  action_type: 'submit_action',
	  action_name: 'quitFromShuttleOne',
	  value: 'quitFromShuttleOne',
    }
];

// 셔틀에서 하차 후 첫 번째 블록
exports.quitFromShuttleOneBlock = [
    {
      type: "header",
      text: "Page 23",
      style: headerStyleRed
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "http://www.yongin21.co.kr/news/photo/201009/31799_23901_5938.jpg"
    },
    {
      type: "text",
      text: "*기사님*: 학생! 도착했어. 면허 딴거 축하하고 조심히 들어가고.. \n아 키 큰 학생도 여기서 내려? 그래그래 어여 가!!\n\n어여 가라는 기사님의 말.. 마치 나한테 하는 것처럼 느껴졌다.",
      markdown: true
    },
    {
      type: "button",
      text: "다음으로",
      style: buttonStyleDanger,
	  action_type: 'submit_action',
	  action_name: 'quitFromShuttleTwo',
	  value: 'quitFromShuttleTwo',
    }
];

// 셔틀에서 하차 후 두 번째 블록
exports.quitFromShuttleTwoBlock = [
    {
      type: "header",
      text: "Page 24",
      style: headerStyleRed
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://upload2.inven.co.kr/upload/2016/08/30/bbs/i13523397092.jpg"
    },
    {
      type: "text",
      text: "차에서 내린 뒤로는 기억이 잘 나질 않는다.\n\n나는 땅에 발이 닿기 무섭게 달렸다.\n왜냐하면...\n\n*5톤 트럭*같은 *사람*이 나를 전력으로 쫓아오고 있었기 때문이다.",
      markdown: true
    },
    {
      type: "button",
      text: "다음으로",
      style: buttonStyleDanger,
	  action_type: 'submit_action',
	  action_name: 'quitFromShuttleThree',
	  value: 'quitFromShuttleThree',
    }
];

// 셔틀에서 하차 후 세 번째 블록
exports.quitFromShuttleThreeBlock = [
    {
      type: "header",
      text: "Page 25",
      style: headerStyleRed
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://mblogthumb-phinf.pstatic.net/20160705_214/joanishappy_146771917713536YBw_PNG/c0000575_4c2f7b218294c.png?type=w800"
    },
    {
      type: "text",
      text: "*그리고 나는...*",
      markdown: true
    },
    {
      type: "button",
      text: "다음으로",
      style: buttonStyleDanger,
	  action_type: 'submit_action',
	  action_name: 'quitFromShuttleFour',
	  value: 'quitFromShuttleFour',
    }
];

// 셔틀에서 하차 후 네 번째 블록
exports.quitFromShuttleFourBlock = [
    {
      type: "header",
      text: "Page 26",
      style: headerStyleRed
    },
    {
      type: "divider"
    },
    {
      type: "image_link",
      url: "https://img1.daumcdn.net/thumb/S240x240/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99D3613C5C4471E01F"
    },
    {
      type: "text",
      text: "난생 처음으로 *사람한테 교통사고*를 당했다.",
      markdown: true
    },
    {
      type: "button",
      text: "-END-",
      style: "default"
    }
];
