import React from 'react';
import {Route, Link} from 'react-router-dom';

const Team = () => {
	return (
		<div className="team">
			<div className="grid team__grid">
				<h2 className="title title_h2">
					Нас уже больше 100 :)
					<br/>
					И с каждым днем наше сообщество растет
				</h2>

				<Route>
					<Link to="" className="btn">Присоединиться к нам</Link>
				</Route>
			</div>
		</div>
	);
};

export default Team;
