const React = require('react');
const Email = require('./email');
const router = require('react-router')
const Link = router.Link;
// const EMAILS = require('../emails');

let Mailbox = function(props) {
	// let mail = EMAILS[props.params.mailboxName];
	return (
		<div>
			<Link to={'/' + props.mailboxName}>{props.mailboxName}</Link>
		</div>
	)
}

module.exports = Mailbox;
