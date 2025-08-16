const express = require('express');

const app = express();

app.get('/' , (req, res) => {
	res.send('Hi from CI/CD in ec2 instance.');
});

module.exports = app;
