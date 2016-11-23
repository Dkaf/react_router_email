const React = require('react');

let EmailSnippet = function(props) {
	return (
		<div>
			<ul>
				<li>{props.from}</li>
				<li>{props.title}</li>
			</ul>
		</div>
	)
}

module.exports = EmailSnippet;
