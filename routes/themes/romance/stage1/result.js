exports.getBlock = (message, actions) => {
    
    const input_answer = actions.input_answer;
    let result = '';
    if(input_answer === '1'){
        result = '왜 이래 부담스럽게;;';
    }
    else if(input_answer === '2'){
        result = 'ㅋㅋ 되겠냐';
    }
    else if(input_answer === '3'){
        result = '여자는 딱 보면 알거든';
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
                "action_name": 'romance_stage2_question',
                "value": 'romance_stage2_question',
            },
        ],
    };
};