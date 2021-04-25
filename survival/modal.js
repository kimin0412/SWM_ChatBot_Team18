// 필기 시험 1번 문제에 대한 모달
exports.writtenTestOneModal = {
  title: "필기 시험 1번 문제",
  accept: "확인",
  decline: "취소",
  value: "writtenTestOneCheck",
  blocks: [
    {
      type: "select",
      name: "writtenTestOneModal",
      options: [
        {
          text: "(1) 엑셀: 왼발, 브레이크: 오른발",
          value: "1"
        },
        {
          text: "(2) 엑셀: 왼발, 브레이크: 왼발",
          value: "2"
        },
        {
          text: "(3) 엑셀: 오른발, 브레이크: 왼발",
          value: "3"
        },
        {
          text: "(4) 엑셀: 오른발, 브레이크: 오른발",
          value: "4"
        }
      ],
      required: true,
      placeholder: "정답을 선택해주세요"
    }
  ]
}

exports.writtenTestTwoModal = {
  title: "필기 시험 2번 문제",
  accept: "확인",
  decline: "취소",
  value: "writtenTestTwoCheck",
  blocks: [
    {
      type: "select",
      name: "writtenTestTwoModal",
      options: [
        {
          text: "(1) P, D",
          value: "1"
        },
        {
          text: "(2) R, N",
          value: "2"
        },
        {
          text: "(3) P, N",
          value: "3"
        },
        {
          text: "(4) R, D",
          value: "4"
        }
      ],
      required: true,
      placeholder: "정답을 선택해주세요"
    }
  ]
}

exports.writtenTestThreeModal = {
  title: "필기 시험 3번 문제",
  accept: "확인",
  decline: "취소",
  value: "writtenTestThreeCheck",
  blocks: [
    {
      type: "select",
      name: "writtenTestThreeModal",
      options: [
        {
          text: "(1) 좌측: 조수석, 우측: 운전석",
          value: "1"
        },
        {
          text: "(2) 좌측: 운전석, 우측: 조수석",
          value: "2"
        },
        {
          text: "(3) 좌측: 운전석, 우측: 운전석",
          value: "3"
        },
        {
          text: "(4) 좌측: 조수석, 우측: 운전석",
          value: "4"
        }
      ],
      required: true,
      placeholder: "정답을 선택해주세요"
    }
  ]
}

exports.functionTestOneModal = {
  title: "기능 시험 1번 문제",
  accept: "확인",
  decline: "취소",
  value: "functionTestOneCheck",
  blocks: [
    {
      type: "select",
      name: "functionTestOneModal",
      options: [
        {
          text: "(1) 기도",
          value: "1"
        },
        {
          text: "(2) 안전벨트",
          value: "2"
        },
        {
          text: "(3) 코인 가격 확인",
          value: "3"
        },
        {
          text: "(4) 멘토링 확인",
          value: "4"
        }
      ],
      required: true,
      placeholder: "정답을 선택해주세요"
    }
  ]
}

exports.functionTestTwoModal = {
  title: "기능 시험 2번 문제",
  accept: "확인",
  decline: "취소",
  value: "functionTestTwoCheck",
  blocks: [
    {
      type: "select",
      name: "functionTestTwoModal",
      options: [
        {
          text: "(1) 좌측 레버를 내린다.",
          value: "1"
        },
        {
          text: "(2) 좌측 레버를 올린다.",
          value: "2"
        },
        {
          text: "(3) 좌측 레버를 뽑는다.",
          value: "3"
        },
        {
          text: "(4) 우측 레버를 내린다.",
          value: "4"
        }
      ],
      required: true,
      placeholder: "정답을 선택해주세요"
    }
  ]
}

exports.functionTestThreeModal = {
  title: "기능 시험 3번 문제",
  accept: "확인",
  decline: "취소",
  value: "functionTestThreeCheck",
  blocks: [
    {
      type: "select",
      name: "functionTestThreeModal",
      options: [
        {
          text: "(1) 급정거 후 뒷목을 잡으며 내린다.",
          value: "1"
        },
        {
          text: "(2) 비상등을 켜고 엑셀을 밟아 빠르게 지나간다.",
          value: "2"
        },
        {
          text: "(3) 좌우측 방향지시등을 빠르게 번갈아 키면서 당황스러움을 표출한다.",
          value: "3"
        },
        {
          text: "(4) 빠르게 브레이크를 밟아 멈춘 후, 비상등을 켠다.",
          value: "4"
        }
      ],
      required: true,
      placeholder: "정답을 선택해주세요"
    }
  ]
}

exports.drivingTestOneModal = {
  title: "주행 시험 1번 문제",
  accept: "확인",
  decline: "취소",
  value: "drivingTestOneCheck",
  blocks: [
    {
      type: "select",
      name: "drivingTestOneModal",
      options: [
        {
          text: "(1) A-B-C-D",
          value: "1"
        },
        {
          text: "(2) C-A-D-B",
          value: "2"
        },
        {
          text: "(3) A-C-B-D",
          value: "3"
        },
        {
          text: "(4) B-A-D-C",
          value: "4"
        }
      ],
      required: true,
      placeholder: "정답을 선택해주세요"
    }
  ]
}