const nodemailer = require('nodemailer');
const express = require('express');
const app = express();



app.get('/',(req,res)=>{
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'tylerhillwebdev@gmail.com',
			pass: '3lDi4bloCorte5'
		}
	});
	
	const mailOptions = {
		from: 'tylerhillwebdev@gmail.com',
		to: 'tylerehill@gmail.com',
		subject: 'does this work honey??',
		html: '<p>Oh  mama yes</p>'
	}
	transporter.sendMail(mailOptions,function(err,info){
		if(err)
			console.log(err);
		else
			console.log(info);
	});
	res.send('get');
});

app.post('/',(req,res)=>{
	res.send('test');
});

app.listen(3000,()=>{console.log('ON')});
