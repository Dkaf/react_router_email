const React = require('react');

var Email = function(props) {
	return (
		<div>
			<ul>
				<li>{props.from}</li>
				<li>{props.to}</li>
				<li>{props.title}</li>
				<li>{props.content}</li>
			</ul>
		</div>
	)
}

module.exports = Email;
