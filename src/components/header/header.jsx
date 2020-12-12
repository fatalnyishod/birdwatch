import React from 'react';
import {Route, Link} from 'react-router-dom';

const Header = () => {
	return (
		<div className="header">
			<div className="grid header__grid">
				<div className="header__logo-wrap">
					<Route>
						<Link to="/" className="header__logo">
						</Link>
					</Route>
				</div>

				<input type="text" className="header__search" placeholder="Найти вид"/>

				<div className="header__nav">
					<Route>
						<Link to="#" className="header__nav-item">Журнал</Link>
						<Link to="#" className="header__nav-item">О нас</Link>
						<Link to="#" className="header__nav-item">Для чего все это?</Link>
						<Link to="#" className="header__nav-item">Контакты</Link>
					</Route>
				</div>
			</div>
		</div>
	);
};

export default Header;
