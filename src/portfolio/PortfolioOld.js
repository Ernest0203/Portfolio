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
						</div>
					</li>
					<li className="portfolio-old__list-item">
						<img src="" alt=""/>
						<div className="content">
							<h6 className="title"></h6>
						</div>
					</li>
					<li className="portfolio-old__list-item">
						<img src="" alt=""/>
						<div className="content">
							<h6 className="title"></h6>
						</div>
					</li>
				</ul>
			</article>
		);
	}
}

export default Portfolio;