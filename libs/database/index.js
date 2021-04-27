// mongoose MongoDB ODM
const mongoose = require('mongoose');

const Config = require('config');

/** Mongoose Database 객체 */
const database = {};

/** MongoDB Database에 연결하는 메소드입니다. */
database.connect = async () => {
	
	// deprecated error 표시 방지
	mongoose.set('useNewUrlParser', true);
	mongoose.set('useFindAndModify', false);
	mongoose.set('useCreateIndex', true);
	mongoose.set('useUnifiedTopology', true);
	
	// Database 서버 주소 (localhost)
	const connURL = Config.database.URL
	
	try {
		// Database 연결
		await mongoose.connect(connURL) 
		console.log('Database successfully connected')
	
		// Set DB events
		const db = mongoose.connection;
		db.on('reconnected', () => {
			console.log('Database Reconnected');
		});
		db.on('disconnected', () => {
			console.log('Database Disconnected');
		});
		db.on('error', (err) => {
			console.log('DB Error : ', err);
		})
	}
	catch (err) {
		console.log('DB Connection Error : ', err);
	}
}

/** 사용자 모델 객체 */
database.users = require('./model/users');

/** Database 관련 서비스들 */
database.service = require('./service');

module.exports = database;