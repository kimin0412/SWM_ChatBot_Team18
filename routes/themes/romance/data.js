const stageLength = 2

exports.getStageLength = () => stageLength

exports.getQuestionContents = (stageNum) => {
    const contents = Array(stageLength + 1)
    contents[1] = [
        '어느날 함께 알바를 하던 중 YY이가 말한다.',
        '와 오빠 아까 그 손님 진짜 예쁘지 않아?',
    ]
    contents[2] = [
        'YY이와 카톡을 하다가 영화 얘기가 나왔다.',
        '이번에 귀멸의 칼날 영화 나온거 알아? 궁금하다',
    ]
    
    return contents[stageNum]
}

exports.getAnswerChoices = (stageNum) =>{
    const choices = Array(stageLength + 1)
    choices[1] = [
        '',
        '아니? 무슨 소리야 너가 더 예뻐',
        '와 그니깐 완전 내 스타일 번호 딸걸 ㅠ',
        '눈만 보고 니가 어떻게 알아',
    ]
    choices[2] = [
        '',
        "그래? 나는 그런거 안봐서 잘 모르겠네 ㅋㅋ",
        "오 재밌겠다 일요일에 같이 보러 갈래?",
        "그걸 이제 알았어? 정보가 느리네",
    ]
    return choices[stageNum]
}

exports.getResult = (stageNum, answer) =>{
    const result = Array(stageLength + 1)
    result[1] = [
        '',
        '왜 이래 부담스럽게;;',
        'ㅋㅋㅋ 되겠냐',
        '여자는 딱 보면 알거든',
    ]
    result[2] =[
        '',
        '오키오키',
        '내가 너랑? 왜?',
        '덕후 자식 ㅋㅋ',
    ]
    return result[stageNum][answer]
}