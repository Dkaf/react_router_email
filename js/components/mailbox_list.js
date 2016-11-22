const React = require('react');
const Email = require('./email');

let MailboxList = function(props) {
	let mailboxes = Object.getOwnPropertyNames(props.emails).map(function(mailboxName, index) {
		
	})
	return {
		<div>
			<Mailbox mailboxName="inbox" />
			<Mailbox mailboxName="spam" />
		</div>
	}
}
