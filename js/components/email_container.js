const React = require('react');
const EMAILS = require('../emails');

let EmailContainer = function(props) {
	var email = EMAILS[props.params.emailId];
	return <Email id={email.id}
				from={email.from}
				to={email.to}
				title={email.title}
				content={email.title} />
};

module.exports = EmailContainer;
