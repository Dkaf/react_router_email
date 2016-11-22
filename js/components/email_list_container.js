const React = require('react');
const EMAILS = require('../emails');
const EmailList = require('./email_list');

let EmailListContainer = function(props) {
	return <EmailList emails={EMAILS} />
};

module.exports = EmailListContainer;
