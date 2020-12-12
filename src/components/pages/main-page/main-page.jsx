import React from 'react';
import Header from '../../header/header.jsx';

const MainPage = ({link}) => {
	return (
		<>
			<Header />
			<div>
				<span>this is main</span>
				<br />
				<span>
					u can go to the <a href={link}>article</a>
				</span>
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
