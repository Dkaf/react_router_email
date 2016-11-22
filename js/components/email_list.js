const React = require('react');
const Email = require('./email');
const EMAILS = require('../emails');

let EmailList = function(props) {
	let emails = Object.keys(props.emails).map(function(emailId, index) {
		let email = props.emails[emailId];
		return (
			<li key={index}>
				<Email id={email.id} from={contact.from} to={email.to} title={email.title} content={email.content} />
			</li>
		);
	});
	return (
		<ul>
			{emails}
		</ul>
	);
};

module.exports = EmailList;
