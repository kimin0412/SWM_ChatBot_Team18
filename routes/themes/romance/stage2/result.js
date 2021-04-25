exports.getBlock = (message, actions) => {
    
    const input_answer = actions.input_answer;
    let result = '';
    if(input_answer === '1'){
        result = '오키오키';
    }
    else if(input_answer === '2'){
        result = '내가 너랑? 왜?';
    }
    else if(input_answer === '3'){
        result = '덕후 자식 ㅋㅋ';
    }
    
    return {
        conversationId: message.conversation_id,
        text: 'YY',
        blocks: [
            {
              "type": "header",
              "text": "YY",
              "style": "red"
            },
            {
                "type": 'text',
                "text": result,
                "markdown": true,
            },
            {
                "type": 'button',
                "text": '다음',
                "style": 'default',
                "action_type": 'submit_action',
                "action_name": 'romance_ending',
                "value": 'romance_ending',
            },
        ],
    };
};