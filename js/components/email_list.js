const React = require('react');
const Email = require('./email');

let EmailList = function(props) {
	let emails = Object.keys(props.emails).map(function(emailId, index) {
		let email = props.emails[emailId];
		return (
			<li key={index}>
				<EmailSnippet
					id={email.id}
					from={email.from}
					title={email.title}
					 />
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
