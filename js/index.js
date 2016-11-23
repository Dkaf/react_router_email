require('babel-polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
const router = require('react-router');
const
const Router = router.Router;
const Route = router.Route;
const hashHistory = router.hashHistory;
const App = require('./components/app')
// const Mailbox = require('./components/mailbox');
const EmailListContainer = require('./components/email_list_container');

var routes = (
	<Router history={hashHistory}>
		<IndexRedirect
		<Route path="/" component={App}>
			<Route path=":mailbox" component={email_list_container} />
				<Route path=":emailId">
		</Route>

	</Router>
)

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(routes, document.getElementById('app'));
});
