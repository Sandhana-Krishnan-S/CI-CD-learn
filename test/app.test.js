const app = require('../src/app.js');
const request = require('supertest');

test('Does get / gives "Hi from CI/CD..." as respond' , async () => {
	const res = await request(app).get('/');
	expect(res.statusCode).toBe(200);
	expect(res.text).toBe('Hi from CI/CD in ec2 instance.');
});


