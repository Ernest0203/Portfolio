import React, {Component} from 'react';
import { connect } from 'react-redux';

import DatabaseController from '../database/databaseController';

class About extends Component {
	constructor(props) {
		super(props);
		this.editSkill = this.editSkill.bind(this);
	};

	componentWillMount() {
		this.database = new DatabaseController();
		this.database.connect();
		this.fetchData();
	};

	fetchData() {
		this.database.getDataFromServer((data) => {
			this.props.fetchData(data)
		});
	};

	editSkill(e, item) {
		let newItem = e.target.innerText;
		if (!newItem) {
			e.target.classList.add('empty')
			e.target.focus()
			return false
		} 
		else { 
			e.target.classList.remove('empty') 
		}
		this.database.editItem(null, null, newItem);
	};

	render() {
		return (
			<section className="about">
				<h2 className="about__greet">Greetings!</h2>
				<p className="about__text" contentEditable="true" onBlur={this.editSkill}>{this.props.about}</p>
			</section>
		);
	}
};

const mapStateToProps = (state) => {
	const { about } = state.about
	return {
		about
	}
};

function mapDispatchToProps(dispatch) {
	return {
		fetchData: (data) => dispatch({type: 'FETCH_DATA', data}),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(About)
