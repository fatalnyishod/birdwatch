import React from 'react';
import {Route, Link} from 'react-router-dom';

const RoundUp = () => {
	return (
		<div className="round-up">
			<div className="grid">
				<h4 className="title title_h4">Последние записи</h4>
			</div>
			<margin-16/>

			<div className="grid round-up__grid">
				<Route>
					<Link to="#" className="round-up__item">
						<img src="https://i.pinimg.com/originals/7b/a6/94/7ba694ed1fd5966886c1eb79dfcddaf5.jpg" className="round-up__img"/>
						<h3 className="title title_h3">Марат Магомедов | 13 декабря 2020</h3>
						<p className="text text_light">Langtang National Park — Langtang Village to Kyanjin Gumba, Rasuwa, Madhyamanchal, Nepal</p>
					</Link>

					<Link to="#" className="round-up__item">
						<img src="https://nnst1.gismeteo.ru/images/2018/12/1860bc77.jpg" className="round-up__img"/>
						<h3 className="title title_h3">Вадим Злыгастев | 12 декабря 2020</h3>
						<p className="text text_light">Langtang National Park — Langtang Village to Kyanjin Gumba, Rasuwa, Madhyamanchal, Nepal</p>
					</Link>

					<Link to="#" className="round-up__item">
						<img src="https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2020-03/RIAN_2824702.HR_.ru_.jpg?itok=YEoU8tHn" className="round-up__img"/>
						<h3 className="title title_h3">Михаил Данилов | 11 декабря 2020</h3>
						<p className="text text_light">Langtang National Park — Langtang Village to Kyanjin Gumba, Rasuwa, Madhyamanchal, Nepal</p>
					</Link>

					<Link to="#" className="round-up__item">
						<img src="https://tayga.info/media/images/news/159/159949/thumb.jpg" className="round-up__img"/>
						<h3 className="title title_h3">Марат Магомедов | 10 декабря 2020</h3>
						<p className="text text_light">Langtang National Park — Langtang Village to Kyanjin Gumba, Rasuwa, Madhyamanchal, Nepal</p>
					</Link>
				</Route>
			</div>

			<div className="grid round-up__grid">
				<Route>
					<Link to="#" className="round-up__item">
						<img src="https://tvzvezda.ru/storage/news_other_images/2019/12/15/45ff7331ffe645f2a78f2c55fa918413.jpg" className="round-up__img"/>
						<h3 className="title title_h3">Михаил Данилов | 9 декабря 2020</h3>
						<p className="text text_light">Langtang National Park — Langtang Village to Kyanjin Gumba, Rasuwa, Madhyamanchal, Nepal</p>
					</Link>

					<Link to="#" className="round-up__item">
						<img src="https://img6.eadaily.com/c650x400/o/541/9882205265e7a8f54b48339a0bf88.jpeg" className="round-up__img"/>
						<h3 className="title title_h3">Вадим Злыгастев | 8 декабря 2020</h3>
						<p className="text text_light">Langtang National Park — Langtang Village to Kyanjin Gumba, Rasuwa, Madhyamanchal, Nepal</p>
					</Link>

					<Link to="#" className="round-up__item">
						<img src="https://im.kommersant.ru/Issues.photo/OGONIOK/2019/043/KMO_085979_08045_1_t218_222727.jpg" className="round-up__img"/>
						<h3 className="title title_h3">Вадим Злыгастев | 7 декабря 2020</h3>
						<p className="text text_light">Langtang National Park — Langtang Village to Kyanjin Gumba, Rasuwa, Madhyamanchal, Nepal</p>
					</Link>

					<Link to="#" className="round-up__item">
						<img src="https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-11/20190124_gaf_uw8_402.jpg?itok=M5zf0W24" className="round-up__img"/>
						<h3 className="title title_h3">Марат Магомедов | 6 декабря 2020</h3>
						<p className="text text_light">Langtang National Park — Langtang Village to Kyanjin Gumba, Rasuwa, Madhyamanchal, Nepal</p>
					</Link>
				</Route>
			</div>
		</div>
	);
};

export default RoundUp;
