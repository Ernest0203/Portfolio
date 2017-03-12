import React, {Component} from 'react';
import { connect } from 'react-redux';

//import SkillsSection from './SkillsSection.js';
import Old from './PortfolioOld.js';
import DatabaseController from '../database/databaseController';

class Portfolio extends Component {

	render() {
		return (
			<section className="portfolio">
				<h2 className="portfolio__title">Pet projects</h2>
				<Old />
			</section>
		);
	}
}

export default Portfolio;