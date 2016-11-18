var React = require('react');
var Link = router.Link;


var App = function(props) {
	return (

		<div>
			<ul>
				<li><Link to={'/:mailbox_name'}>{props.name}</Link></li>
				<li><Link to={'/spam'}>Spam</Link></li>
			</ul>
			<div>
				{props.children}
			</div>
	)	</div>
}

module.exports = App;
