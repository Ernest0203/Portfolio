import React, {Component} from 'react'

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<h2>Contacts:</h2>
				<div className="email">
					<span>E-MAIL:</span>
					<a href="mailto:ernest2332@gmail.com">ernest2332@gmail.com</a>
				</div>
				<div className="skype">
					<span>SKYPE:</span>
					<a href="skype:big-ben03">big-ben03</a>
				</div>
			</footer>
		);
	}
}

