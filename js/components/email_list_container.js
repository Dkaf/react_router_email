const React = require('react');
const EMAILS = require('../emails');
const EmailList = require('./email_list');

let EmailListContainer = function(props) {
	let mailbox = EMAILS[props.params.mailbox];
	return
		<div>
			<h1>{props.params.mailbox}</h1>
			<EmailList emails={mailbox} />
		</div>
};

module.exports = EmailListContainer;
