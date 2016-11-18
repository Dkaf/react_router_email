var React = require('react');
var Link = router.Link;

let Inbox = function(props) {
	return (
		<div>
			<Link to={'/:mailbox_name/:emailId'}>{props.from}</Link>
		</div>
	)
}

module.exports = Inbox;
