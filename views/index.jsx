const React = require('react');

class Layout extends React.Component {
	render() {
		let files = this.props.files;	
		return (
		<html>
		<head>
		<link rel="stylesheet" href="/css/style.css" />
		</head>
		<body>
		<Case files={files} />
		<script src="/js/front.js"></script>
		</body>
		</html>
		)
	}
}

class Case extends React.Component {
	render() {
		let files = this.props.files.map(file=>{
			let base = file.split('.')[0];
			let src = '/pics/'+file;
			let piecestyle = {
				backgroundImage: 'url('+src+')'
			}
			return <div className="piece" key={base} style={piecestyle}><span></span></div>
		});
		console.log(this.props.files);
		return <div>{files}</div>
	}
}

export default Layout
