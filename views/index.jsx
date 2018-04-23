const React = require('react');

class Case extends React.Component {
	render() {
		let files = this.props.files.map(file=>{
			let base = file.split('.')[0];
			let src = '/pics/'+file;
			return <img key={base} src={src} />
		});
		console.log(this.props.files);
		return <div>{files}</div>
	}
}

module.exports = Case;
