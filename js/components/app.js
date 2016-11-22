const React = require('react');
const Mailbox = require('./mailbox');

let App = function(props) {
	return (

		<div>
			<h1>Mailbox</h1>
			<ul>
				<li> <Mailbox mailboxName='inbox' /> </li>
				<li> <Mailbox mailboxName='spam' /> </li>
			</ul>
			<div>
				{props.children}
			</div>
		</div>
	)
}

module.exports = App;
