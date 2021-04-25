const express = require('express');
const router = express.Router();
const libKakaoWork = require('../libs/kakaoWork'); // 카카오워크 라이브러리 함수
const survivalBlocks = require('./block'); // 미리 작성된 시나리오 블록 가져오기  (block)
const survivalModals = require('./modal'); // 미리 작성된 시나리오 모달 가져오기  (modal)
const survivalChecks = require('./check'); // 미리 작성된 시나리오 채점 가져오기, (block)

async function survivalGameProcessRequest(req, res){
	const { message, value } = req.body;
	
	switch(value){
		case 'writtenTestOne':
			return res.json({
				view: survivalModals.writtenTestOneModal
			});
			break;
			
		case 'writtenTestTwo':
			return res.json({
				view: survivalModals.writtenTestTwoModal
			});
			break;
			
		case 'writtenTestThree':
			return res.json({
				view: survivalModals.writtenTestThreeModal
			});
			break;
		case 'functionTestOne':
			return res.json({
				view: survivalModals.functionTestOneModal
			});
			break;
		case 'functionTestTwo':
			return res.json({
				view: survivalModals.functionTestTwoModal
			});
			break;
		case 'functionTestThree':
			return res.json({
				view: survivalModals.functionTestThreeModal
			});
			break;
		case 'drivingTestOne':
			return res.json({
				view: survivalModals.drivingTestOneModal
			});
			break;	
	}
};

async function survivalGameProcessCallback(req, res){
	const { message, actions, action_time, value } = req.body;
	
	switch(value){
		case 'enterWrittenTest':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 2',
				blocks: survivalBlocks.enterWrittenTestBlock,
			});
			break;
			
		case 'writtenTestOne':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 3',
				blocks: survivalBlocks.writtenTestOneBlock,
			});
			break;
			
		case 'writtenTestTwo':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 4',
				blocks: survivalBlocks.writtenTestTwoBlock,
			});
			break;
			
		case 'writtenTestThree':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 5',
				blocks: survivalBlocks.writtenTestThreeBlock,
			});
			break;
		
		case 'afterWrittenTest':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 6',
				blocks: survivalBlocks.afterWrittenTestBlock,
			});
			break;
		
		case 'broadcastForFunctionTest':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 7',
				blocks: survivalBlocks.broadcastForFunctionTestBlock,
			});
			break;
		
		case 'readyToFunctionTest':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 8',
				blocks: survivalBlocks.readyToFunctionTestBlock,
			});
			break;
			
		case 'functionTestOne':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 9',
				blocks: survivalBlocks.functionTestOneBlock,
			});
			break;
			
		case 'functionTestTwo':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 10',
				blocks: survivalBlocks.functionTestTwoBlock,
			});
			break;
			
		case 'functionTestThree':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 11',
				blocks: survivalBlocks.functionTestThreeBlock,
			});
			break;
		
		case 'afterFunctionTest':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 12',
				blocks: survivalBlocks.afterFunctionTestBlock,
			});
			break;
			
		case 'broadcastForDrivingTest':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 13',
				blocks: survivalBlocks.broadcastForDrivingTestBlock,
			});
			break;

		case 'drivingTestOne':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 14',
				blocks: survivalBlocks.drivingTestOneBlock,
			});
			break;
	
		case 'drivingTestTwo':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 15',
				blocks: survivalBlocks.drivingTestTwoBlock,
			});
			break;

		case 'drivingTestThree':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 16',
				blocks: survivalBlocks.drivingTestThreeBlock,
			});
			break;

		case 'drivingTestFour':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 17',
				blocks: survivalBlocks.drivingTestFourBlock,
			});
			break;

		case 'drivingTestEnd':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 18',
				blocks: survivalBlocks.drivingTestEndBlock,
			});
			break;

		case 'shuttleOne':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 19',
				blocks: survivalBlocks.shuttleOneBlock,
			});
			break;

		case 'shuttleTwo':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 20',
				blocks: survivalBlocks.shuttleTwoBlock,
			});
			break;
			
		case 'shuttleThree':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 21',
				blocks: survivalBlocks.shuttleThreeBlock,
			});
			break;
			
		case 'shuttleFour':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 22',
				blocks: survivalBlocks.shuttleFourBlock,
			});
			break;
			
		case 'quitFromShuttleOne':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 23',
				blocks: survivalBlocks.quitFromShuttleOneBlock,
			});
			break;
			
		case 'quitFromShuttleTwo':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 24',
				blocks: survivalBlocks.quitFromShuttleTwoBlock,
			}); 
			break;
			
		case 'quitFromShuttleThree':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 25',
				blocks: survivalBlocks.quitFromShuttleThreeBlock,
			});
			break;
			
		case 'quitFromShuttleFour':
			await libKakaoWork.sendMessage({
				conversationId: message.conversation_id,
				text: 'page 26',
				blocks: survivalBlocks.quitFromShuttleFourBlock,
			});
			break;

			
		// 이하 생존 게임 정답 체크
		case 'writtenTestOneCheck':
			if(actions.writtenTestOneModal == '4'){ // 4번이 정답임, 변수로 처리 필요
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '필기 시험 1번 문제 채점 결과',
					blocks: survivalChecks.writtenTestOneRight,
				});
			}
			else{
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '필기 시험 1번 문제 채점 결과',
					blocks: survivalChecks.writtenTestOneWrong,
				});				
			}
			break;
			
		case 'writtenTestTwoCheck':
			if(actions.writtenTestTwoModal == '3'){ // 3번이 정답임, 변수로 처리 필요
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '필기 시험 2번 문제 채점 결과',
					blocks: survivalChecks.writtenTestTwoRight,
				});
			}
			else{
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '필기 시험 2번 문제 채점 결과',
					blocks: survivalChecks.writtenTestTwoWrong,
				});				
			}
			break;
			
		case 'writtenTestThreeCheck':
			if(actions.writtenTestThreeModal == '3'){ // 3번이 정답임, 변수로 처리 필요
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '필기 시험 3번 문제 채점 결과',
					blocks: survivalChecks.writtenTestThreeRight,
				});
			}
			else{
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '필기 시험 3번 문제 채점 결과',
					blocks: survivalChecks.writtenTestThreeWrong,
				});				
			}
			break;
			
		case 'functionTestOneCheck':
			if(actions.functionTestOneModal == '2'){ // 2번이 정답임, 변수로 처리 필요
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '기능 시험 1번 문제 채점 결과',
					blocks: survivalChecks.functionTestOneRight,
				});
			}
			else{
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '기능 시험 1번 문제 채점 결과',
					blocks: survivalChecks.functionTestOneWrong,
				});				
			}
			break;			

		case 'functionTestTwoCheck':
			if(actions.functionTestTwoModal == '1'){ // 1번이 정답임, 변수로 처리 필요
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '기능 시험 2번 문제 채점 결과',
					blocks: survivalChecks.functionTestTwoRight,
				});
			}
			else{
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '기능 시험 2번 문제 채점 결과',
					blocks: survivalChecks.functionTestTwoWrong,
				});				
			}
			break;
			
		case 'functionTestThreeCheck':
			if(actions.functionTestThreeModal == '4'){ // 4번이 정답임, 변수로 처리 필요
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '기능 시험 3번 문제 채점 결과',
					blocks: survivalChecks.functionTestThreeRight,
				});
			}
			else{
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '기능 시험 3번 문제 채점 결과',
					blocks: survivalChecks.functionTestThreeWrong,
				});				
			}
			break;

		case 'drivingTestOneCheck':
			if(actions.drivingTestOneModal == '3'){ // 4번이 정답임, 변수로 처리 필요
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '주행 시험 1번 문제 채점 결과',
					blocks: survivalChecks.drivingTestOneRight,
				});
			}
			else{
				await libKakaoWork.sendMessage({
					conversationId: message.conversation_id,
					text: '주행 시험 1번 문제 채점 결과',
					blocks: survivalChecks.drivingTestOneWrong,
				});				
			}
			break;
			
		default:
	}
	return;
};

module.exports = {
	router,
	survivalGameProcessCallback,
	survivalGameProcessRequest
}