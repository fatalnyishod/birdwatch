import Link from "next/link";

const RoundUp = () => {
	return (
		<div className="round-up">
			<div className="grid">
				<h4 className="title title_h4">Последние записи</h4>
			</div>
			<margin-16 />

			<div className="grid round-up__grid">
				<Link href="/blog/binokulars-and-other-optics">
					<a className="round-up__item">
						<div className="round-up__item-wrap">
							<img
								src="https://i.pinimg.com/originals/7b/a6/94/7ba694ed1fd5966886c1eb79dfcddaf5.jpg"
								className="round-up__img"
							/>
							<h3 className="title title_h3 title_white">
								Бинокли, подзорные трубы и другая оптика
							</h3>
						</div>
						<span className="text text_light">Марат Магомедов, 12 января</span>
						<p className="text">
							Бинокль — главное оружие бёрдера, его нужно выбирать с умом. Рассказываем, как это
							сделать правильно.
						</p>
					</a>
				</Link>

				<Link href="/blog/find-your-guide">
					<a className="round-up__item">
						<div className="round-up__item-wrap">
							<img
								src="https://nnst1.gismeteo.ru/images/2018/12/1860bc77.jpg"
								className="round-up__img"
							/>
							<h3 className="title title_h3 title_white">Определите свой определитель</h3>
						</div>
						<span className="text text_light">Екатерина Сичинава, 12 января</span>
						<p className="text">Руководство по многообразию полевых определителей.</p>
					</a>
				</Link>

				<Link href="/blog/where-is-your-lifelist">
					<a className="round-up__item">
						<div className="round-up__item-wrap">
							<img
								src="https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2020-03/RIAN_2824702.HR_.ru_.jpg?itok=YEoU8tHn"
								className="round-up__img"
							/>
							<h3 className="title title_h3 title_white">
								Записывайте свои наблюдения, они нужны сообществу бёрдеров и ученым-орнитологам
							</h3>
						</div>
						<span className="text text_light">Анастасия Бесфамильная, 12 января</span>
						<p className="text">
							Лайфлист как главная гордость и сокровище бёрдвотчера. Рассказываем, где лучше вести
							полевые дневники, чеклисты и публиковать фотографии. И как правильно это делать.
						</p>
					</a>
				</Link>

				<Link href="/blog/more-eyes-more-birds">
					<a className="round-up__item">
						<div className="round-up__item-wrap">
							<img
								src="https://tayga.info/media/images/news/159/159949/thumb.jpg"
								className="round-up__img"
							/>
							<h3 className="title title_h3 title_white">Чем больше глаз — тем больше птиц</h3>
						</div>
						<span className="text text_light">Анастасия Бесфамильная, 12 января</span>
						<p className="text">
							Единомышленники, наставники и друзья в орнитологии — где искать экскурсии и туры.
						</p>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default RoundUp;
