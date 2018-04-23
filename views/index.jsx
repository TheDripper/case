const React = require('react');

class Case extends React.Component {
	//let files = this.props.files.map(file=>file
	render() {
		console.log(this.props.files);
		return <h1>test</h1>;
	}
}

module.exports = Case;
