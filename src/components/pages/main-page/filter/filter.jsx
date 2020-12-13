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
						<img src="https://www.mordovmedia.ru/media/news/90164/1509f6be25c98dbb38bcbe9663ce4606.jpg" className="filter__img"/>
						<span className="link">Вид птицы</span>
					</Link>

					<Link to="#" className="filter__item">
						<img src="https://greenbelarus.info/files/larus_hyperboreus_by_i.samusenka_01i.jpg" className="filter__img"/>
						<span className="link">Вид птицы</span>
					</Link>

					<Link to="#" className="filter__item">
						<img src="https://lh3.googleusercontent.com/proxy/RS2jYTwHeIl4IXFY1shlzc3Z8rTgPFZbbrXBAuAHRsD5-15uof1TNW6LoRh50ac_Pw7dg5n-tK8Jtix4DsIVeFd1ZvP8pEwd2CH2H2bL8V5n" className="filter__img"/>
						<span className="link">Вид птицы</span>
					</Link>
				</Route>
			</div>
		</div>
	);
};

export default Filter;
