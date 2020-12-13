import React from 'react';
import {Route, Link} from 'react-router-dom';

const Footer = () => {
	return (
		<div className="footer">
			<div className="grid footer__grid">
				<div className="footer__info">
					<p className="text">Bird-Watching</p>
				</div>

				<div className="footer__nav">
					<Route>
						<Link to="#" className="footer__nav-item">Журнал</Link>
						<Link to="#" className="footer__nav-item">О нас</Link>
						<Link to="#" className="footer__nav-item">Для чего все это?</Link>
						<Link to="#" className="footer__nav-item">Контакты</Link>
					</Route>
				</div>
			</div>
		</div>
	);
};

export default Footer;
