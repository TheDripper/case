const express = require('express');
const app = express();
const axios = require('axios');
const fs = require('fs');
const pics = './public/pics';
app.set('views',__dirname + '/views');
app.set('view engine','jsx');
app.use(express.static('public'));
app.engine('jsx',require('express-react-views').createEngine());

app.get('/loader',async (req,res)=>{
	let files = [];
	fs.readdirSync(pics).forEach(file=>{
		files.push(file);
	});
	res.render('index',{files: files});
});
app.listen(3000,()=>console.log('brick'));
