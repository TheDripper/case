let Imap = require('imap');
let inspect = require('util').inspect;

var imap = new Imap({
	user: "drownlux@gmail.com",
	password: "1BelVita!",
	host: "imap.gmail.com",
	port: 993,
	tls: true
});

function openInbox(cb) {
	imap.openBox('INBOX', true, cb);
}

imap.once('ready',function(){
	openInbox((err,box)=>{
		let f = imap.seq.fetch('1:2', {
			bodies: ''
		});
		f.on('message',(msg,seqno)=>{
			var prefix = '(#' + seqno + ') ';
			msg.on('body',(str,fo)=>{
				let buffer = '';
				str.on('data',chunk=>{
					buffer += chunk.toString('utf8');
				});
				str.once('end',()=>{
					console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
				});
			});
      			msg.once('attributes', function(attrs) {
      			  console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
      			});
      			msg.once('end', function() {
      			  console.log(prefix + 'Finished');
      			});
		});
    		f.once('error', function(err) {
    		  console.log('Fetch error: ' + err);
    		});
    		f.once('end', function() {
    		  console.log('Done fetching all messages!');
    		  imap.end();
    		});
	});
});
imap.once('error', function(err) {
  console.log(err);
});
imap.once('end',()=>{
	console.log('ned');
});

imap.connect();
