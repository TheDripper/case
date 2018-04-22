const express = require('express');
const app = express();
const axios = require('axios');
const knex = require('knex')({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: 'root',
		database: 'front'
	}
});
app.get('/',(req,res)=>{
	knex('wp_posts').select('post_title').then(posts=>{
		console.log(posts);
		res.send(posts);
	});
});
app.listen(3000,()=>console.log('brick'));
