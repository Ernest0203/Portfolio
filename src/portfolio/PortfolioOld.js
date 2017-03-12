import React, {Component} from 'react';
import { connect } from 'react-redux';

class Portfolio extends Component {

	render() {
		return (
			<article className="portfolio-old">
				<h3 className="portfolio-old__title">Webpages (old)</h3>
				<ul className="portfolio-old__list">
					<li className="portfolio-old__list-item">
						<img src="" alt=""/>
						<div className="content">
							<h6 className="title"></h6>
							<a href="" className="btn-link">Sources</a>
							<a href="" className="btn-link">Preview</a>
						</div>
					</li>
				</ul>
			</article>
		);
	}
}

export default Portfolio;