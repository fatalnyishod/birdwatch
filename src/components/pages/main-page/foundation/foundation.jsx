import React from 'react';
import {Route, Link} from 'react-router-dom';

const Foundation = () => {
	return (
		<div className="foundation">
			<div className="grid">
				<div className="foundation__wrap">
					<div className="foundation__column">
						<h4 className="title title_h4 title_main">О главном</h4>
						<h2 className="title title_h2">Что такое<br/>Bird-Watching?</h2>
						<p className="text text_light">
							Наблюдение за птицами, наблюдение за живыми птицами в их естественной среде обитания, популярное времяпрепровождение и научный спорт, который практически полностью сложился в 20 веке. В 19 веке почти все ученики птиц пользовались ружьями и могли идентифицировать незнакомый вид только тогда, когда его труп находился в их руках. Современное наблюдение за птицами стало возможным во многом благодаря разработке оптических приборов, в частности бинокля, который позволял людям видеть и изучать диких птиц, не причиняя им вреда, лучше, чем когда-либо прежде.
						</p>
						<Route>
							<Link to="#" className="btn">Узнать подробнее</Link>
						</Route>
					</div>

					<img src={require('../../../../assets/images/img_1.png')} className="foundation__img"/>
				</div>

				<div className="foundation__wrap">
					<img src={require('../../../../assets/images/img_2.png')} className="foundation__img"/>

					<div className="foundation__column">
						<h4 className="title title_h4 title_main">А как у нас</h4>
						<h2 className="title title_h2">Как обстоят дела<br/>в России?</h2>
						<p className="text text_light">
							Наблюдение за птицами, наблюдение за живыми птицами в их естественной среде обитания, популярное времяпрепровождение и научный спорт, который практически полностью сложился в 20 веке. В 19 веке почти все ученики птиц пользовались ружьями и могли идентифицировать незнакомый вид только тогда, когда его труп находился в их руках. Современное наблюдение за птицами стало возможным во многом благодаря разработке оптических приборов, в частности бинокля, который позволял людям видеть и изучать диких птиц, не причиняя им вреда, лучше, чем когда-либо прежде.
						</p>
						<Route>
							<Link to="#" className="btn">Узнать подробнее</Link>
						</Route>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Foundation;
