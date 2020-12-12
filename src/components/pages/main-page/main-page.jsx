import React from 'react';
import Header from '../../header/header.jsx';

const MainPage = () => {
	return (
		<>
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

			<div>
				<h1 className="title title_h1">Заголовок первого уровня</h1>
				<h2 className="title title_h2">Заголовок второго уровня</h2>
				<h3 className="title title_h3">Заголовок третьего уровня</h3>
				<h4 className="title title_h4">Заголовок четвертого уровня</h4>

				<blockquote>
					<p className="text text_quote">Цитата.</p>
				</blockquote>

				<p className="text">Текст.</p>
				<p className="text text_b">Жирный текст.</p>
				<p className="text text_s">Подпись.</p>
				<p className="text text_s text_b">Подпись жирным.</p>

				<a href="#" className="link">Ссылка</a>
			</div>
		</>
	);
};

export default MainPage;
