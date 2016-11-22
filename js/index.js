require('babel-polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
const router = require('react-router');
const Router = router.Router;
const Route = router.Route;
const hashHistory = router.hashHistory;
const App = require('./components/app')
// const Mailbox = require('./components/mailbox');
// const EmailContainer = require('./components/email_container');

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
		</Route>
	</Router>
)

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(routes, document.getElementById('app'));
});
