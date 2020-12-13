import React from 'react';
import {Route, Link} from 'react-router-dom';

const Filter = () => {
	return (
		<div className="filter">
			<div className="grid">
				<h4 className="title title_h4">Здесь быстрый фильтр</h4>
			</div>
			<margin-16/>

			<div className="grid filter__grid">
				<Route>
					<Link to="#" className="filter__item">
						<img src="https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRoMWtCBHn-Se1bzh5MjJmuA" className="filter__img"/>
						<span className="link">Вид птицы</span>
					</Link>

					<Link to="#" className="filter__item">
						<img src="https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRoMWtCBHn-Se1bzh5MjJmuA" className="filter__img"/>
						<span className="link">Вид птицы</span>
					</Link>

					<Link to="#" className="filter__item">
						<img src="https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRoMWtCBHn-Se1bzh5MjJmuA" className="filter__img"/>
						<span className="link">Вид птицы</span>
					</Link>

					<Link to="#" className="filter__item">
						<img src="https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRoMWtCBHn-Se1bzh5MjJmuA" className="filter__img"/>
						<span className="link">Вид птицы</span>
					</Link>
				</Route>
			</div>
		</div>
	);
};

export default Filter;
