import React from 'react';
import Header from '../../../header/header.jsx';

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner__overlay"></div>

			<Header/>

			<div className="grid banner__grid">
				<div className="banner__wrap">
					<h1 className="title title_h1 banner__title">Bird-Watching в России</h1>
					<margin-24/>
					<p className="text text_b text_white">Они окружают нас повсюду: у дома и на даче, в высоких горах и в бескрайних степях, в Арктике и в пустынях. Даже в Москве проживает более 200 видов птиц. А многих ли из них вы замечаете?</p>
					<margin-24/>
					<span className="btn">Присоединиться к нам</span>
				</div>
			</div>
		</div>
	);
};

export default Banner;
