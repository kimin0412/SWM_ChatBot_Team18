const stageLength = 5

exports.getStageLength = () => stageLength

exports.getImageUrl = (stageNum) => {
    const img_urls = Array(stageLength + 1)
    img_urls[1] = 'https://images.velog.io/images/leehj8896/post/03f50b2e-ea19-4e1d-926e-2fd4dd025b69/image.png'
    img_urls[2] = 'https://images.velog.io/images/leehj8896/post/6e0aeeee-f39c-488e-bb15-dcdac0996954/image.png'
    img_urls[3] = 'https://images.velog.io/images/leehj8896/post/ef2a81b9-103b-40f0-9baa-5f8033dc5350/image.png'
    img_urls[4] = 'https://images.velog.io/images/leehj8896/post/2f0b78a9-f543-4d1b-b45a-1cfef11b838c/image.png'
    img_urls[5] = 'https://images.velog.io/images/leehj8896/post/f521b327-f3b9-47c3-91d7-e41c32c5515c/image.png'
    return img_urls[stageNum]
}

exports.getQuestionContents = (stageNum) => {
    const contents = Array(stageLength + 1)
    contents[1] = [
        '평소와 같이 함께 알바를 하던 중 유정이 말한다.',
        '',
        '유정: 와 오빠 아까 그 손님 진짜 예쁘지 않아?',
    ]
    contents[2] = [
        '갖은 노력 끝에 유정과 카톡을 주고 받게 되었다.',
        '카톡을 하다가 영화 얘기가 나왔다.',
        '',
        '유정: 이번에 귀멸의 칼날 영화 나온거 알아? 친구가 진짜 재밌대',
    ]
    contents[3] = [
        '결국 유정과 영화를 보게된 현우.',
        '유정은 차가 막혀 5분 정도 늦는다고 한다.',
        '그런데 약속 장소에 나타난 유정의 모습이 평소와는 조금 달라보인다.',
        '조금은 꾸민 것 같기도..?',
    ]
    contents[4] = [
        '어제 밤새 과제를 한 현우는 영화를 보다가 그만 잠이 들어버렸다..',
        '시간 가는줄 모르고 영화를 본 유정은 영화가 끝난 후 현우에게 묻는다.',
        '',
        '유정: 오빠 영화 어땠어??',
    ]
    contents[5] = [
        '맛있는 저녁까지 먹고 나온 현우와 유정.',
        '뭔가 더 하긴 시간이 애매하고 이대로 헤어지자니 현우는 너무 아쉽다.',
        '이때 유정이 폰 시계를 보고 묻는다.',
        '',
        '유정: 이제 집에 갈까?',
    ]
    return contents[stageNum]
}

exports.getAnswerChoices = (stageNum) =>{
    const choices = Array(stageLength + 1)
    choices[1] = [
        '',
        ['그런가? 나는 잘 못 봐서 모르겠다', 2], // 2
        ['와 그니깐 완전 내 스타일이었어 번호 딸걸', 5], // 5
        ['그렇긴 한데 내 스타일은 아닌 것 같아', 3], // 3
        ['웬일이야 너가 다른 사람 칭찬을 다 하고', 4], // 4
        ['음.. 나는 너가 더 예쁜 것 같은데', 1], // 1
    ]
    choices[2] = [
        '',
        ["그래? 나는 애니메이션 별로 안 좋아해서 ㅎㅎ", 5], // 5
        ['데이트 신청 하는거야?', 4], // 4
        ["오 재밌겠다 일요일에 같이 보러 갈래?", 1], // 2
        ["오 나도 친구가 재밌다고 꼭 보라던데", 2], // 1
        ['아 맞아 그거 진짜 보고 싶은데 같이 볼 사람이 없네..', 3], // 3
    ]
    choices[3] = [
        '',
        ['300초 밖에 안 늦었네?', 4], // 4
        ['오 오늘 좀 꾸몄네? 누구한테 잘 보이려고~?', 5], // 5
        ['오 뭐야뭐야? 무야호~', 3], // 2
        ['멀리서 꽃이 걸어온다 했더니 너였구나', 2], // 3
        ['오늘 예쁘게 하고 왔네?', 1], // 1
    ]
    choices[4] = [
        '',
        ['진짜 재밌었어ㅋㅋ', 5], // 5
        ['나 중간에 잠들어 버렸어 ㅠㅠ 미안', 3], // 1
        ['나 영화관에서 애니메이션 처음 보는데 왜 보는지 알 것 같아', 1], // 2
        ['난 생각보다 그냥 그렇던데.. 너는?', 2], // 3
        ['최근 본 것중에 제일 별로. 맛있는거나 먹으러 가자', 4], // 4
    ]
    choices[5] = [
        '',
        ['그러자. 넌 어느 쪽으로 가?', 2], // 2
        ['무슨 소리야 밤새 놀아야지', 5], // 5
        ['아 술 먹고 싶었는데.. 다음엔 일찍 만나서 술 먹을래?', 4], // 3
        ['너 선릉쪽 산댔나? 방향도 비슷한데 데려다 줄게', 1], // 1
        ['그러자. 이따가 계좌번호랑 금액 보내줄게', 3], // 4
    ]
    return choices[stageNum]
}

exports.getResult = (stageNum, answer) =>{
    const result = Array(stageLength + 1)
    result[1] = [
        '',
        '그렇게 눈썰미가 없으니 모쏠인거야!\n\n[결과]\n무난무난~',
        'ㅋㅋㅋ 되겠냐\n\n[결과]\n💀Bad💀',
        '너 스타일이면 어쩔껀데 ㅋㅋㅋ\n\n[결과]\nGood!!',
        '왜 시비야 ㅡㅡ\n\n[결과]\n💀Bad💀',
        '뭐래 ㅋㅋㅋㅋ 나한테 뭐 바라는거 있어?\n\n[결과]\nGood!!',
    ]
    result[2] = [
        '',
        '그래? 애니메이션 되게 좋아할것 같은데..\n\n[결과]\n💀Bad💀',
        'ㅋㅋㅋㅋ 뭐 잘못 먹었어?\n\n[결과]\n💀Bad💀',
        '내가 너랑? 왜? ㅋㅋㅋㅋ\n\n[결과]\nGood!!',
        '그치 친구들 중에 나만 못봤어\n\n[결과]\nGood!!',
        '하긴 오빠 완전 아싸잖아\n\n[결과]\n무난무난~',
    ]
    result[3] = [
        '',
        '뭐 5분가지고 그러냐\n\n[결과]\n무난무난~',
        '뭐래 재수없어ㅡㅡ\n\n[결과]\n💀Bad💀',
        '그만큼 신나시다는 거지~\n\n[결과]\n무난무난~',
        '왜 만나자마자 헛소리야 ㅋㅋㅋㅋ\n\n[결과]\nGood!!',
        '뭐래 ㅋㅋㅋ\n\n[결과]\nGood!!',
    ]
    result[4] = [
        '',
        '아까 보다가 잠든거 아니었어?\n\n[결과]\n💀Bad💀',
        '어젯밤에 안자고 뭐했어 ㅡㅡ\n\n[결과]\n무난무난~',
        '그치 완전 재밌었어\n\n[결과]\nGood!!',
        '그래? 난 재밌던데..\n\n[결과]\n무난무난~',
        '나랑 완전 안맞아 ㅋ 그래서 뭐 먹지?\n\n[결과]\n무난무난~',
    ]
    result[5] = [
        '',
        '나 선릉쪽! 오빠는?\n\n[결과]\n무난무난~',
        '미안 나 내일 과제있어서 ㅠ\n\n[결과]\n💀Bad💀',
        '미안 나 술을 별로 안 좋아해 ㅠ\n\n[결과]\n💀Bad💀',
        '굳이? 그러든가 ㅎㅎ\n\n[결과]\nGood!!',
        '알겠어 잘가~\n\n[결과]\n무난무난~',
    ]
    return result[stageNum][answer]
}