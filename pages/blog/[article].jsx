import {useRouter} from "next/router";
import Layout from "../../components/layout";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";

SwiperCore.use([Navigation, Pagination]);

const Article = () => {
	const router = useRouter(),
		articleId = router.query.article,
		swiperSettings = {
			slidesPerView: 1,
			spaceBetween: 24,
			navigation: {
				prevEl: "#prev",
				nextEl: "#next"
			},
			pagination: {
				el: ".article__swiper-pagination",
				bulletElement: "div",
				bulletClass: "article__swiper-bullet",
				bulletActiveClass: "article__swiper-bullet_active",
				clickable: "true",
			},
			loop: true
		}

	return (
		<Layout>
			<div className="article">
				<div className="grid">
					<div className="article__header">
						<h1 className="title title_h1 title_white">Langtang National Park — Langtang Village to Kyanjin Gumba, Rasuwa, Madhyamanchal, Nepal</h1>
					</div>
				</div>

				<div className="grid article__grid">
					<div className="article__wrap article__wrap_main">
						<p className="text text_light">
							Bit is a popular developer-first platform for managing and collaborating over components across projects and teams. It’s built for components written in any JS framework, or without a framework. Using Bit you can build a reusable component system for your organization, that gets adoption. Through Bit you can seamlessly isolate components from different GitHub projects, and export them into a unified collection in the bit.dev platform. From there, everyone can discover, install and update components anywhere. When building a design system, Bit lets your colalborate and reuse components to keep your UI/UX consistent and development standardized. It also brings everyone together over your actual managed code, in a visual way.
						</p>

						<p className="text text_light">
							Bit is a popular developer-first platform for managing and collaborating over components across projects and teams. It’s built for components written in any JS framework, or without a framework. Using Bit you can build a reusable component system for your organization, that gets adoption. Through Bit you can seamlessly isolate components from different GitHub projects, and export them into a unified collection in the bit.dev platform. From there, everyone can discover, install and update components anywhere. When building a design system, Bit lets your colalborate and reuse components to keep your UI/UX consistent and development standardized. It also brings everyone together over your actual managed code, in a visual way.
						</p>

						<p className="text text_light">
							Bit is a popular developer-first platform for managing and collaborating over components across projects and teams. It’s built for components written in any JS framework, or without a framework. Using Bit you can build a reusable component system for your organization, that gets adoption. Through Bit you can seamlessly isolate components from different GitHub projects, and export them into a unified collection in the bit.dev platform. From there, everyone can discover, install and update components anywhere. When building a design system, Bit lets your colalborate and reuse components to keep your UI/UX consistent and development standardized. It also brings everyone together over your actual managed code, in a visual way.
						</p>

						<h2 className="title title_h2">Заголовок 2</h2>

						<p className="text text_light">
							Bit is a popular developer-first platform for managing and collaborating over components across projects and teams. It’s built for components written in any JS framework, or without a framework. Using Bit you can build a reusable component system for your organization, that gets adoption. Through Bit you can seamlessly isolate components from different GitHub projects, and export them into a unified collection in the bit.dev platform. From there, everyone can discover, install and update components anywhere. When building a design system, Bit lets your colalborate and reuse components to keep your UI/UX consistent and development standardized. It also brings everyone together over your actual managed code, in a visual way.
						</p>

						<div className="article__swiper">
							<div className="article__swiper-nav article__swiper-nav_prev" id="prev"></div>

							<Swiper {...swiperSettings}>
								<SwiperSlide>
									<img src="/images/backgrounds/green-bird.png" alt="" className="article__swiper-img"/>
								</SwiperSlide>
								<SwiperSlide>
									<img src="/images/backgrounds/green-bird.png" alt="" className="article__swiper-img"/>
								</SwiperSlide>
							</Swiper>

							<div className="article__swiper-nav article__swiper-nav_next" id="next"></div>

							<div className="article__swiper-pagination"></div>
						</div>

						<div className="article__quote">
							<p className="text text_quote">Эй! Иди сюда!<br/>Что это у тебя?<br/>Ааа... А я думала, сова.</p>
						</div>

						<img src="/images/backgrounds/green-bird.png" alt="" className="article__img"/>
					</div>

					<div className="article__wrap article__wrap_side">
						<div className="article__author">
							<img src="https://sun9-50.userapi.com/impf/c857416/v857416582/21e9bb/k-TZNgRp2Ak.jpg?size=640x640&quality=96&proxy=1&sign=a1b2aa8815e35a19748b017a12ef0911&type=album" alt="Автор" className="article__author-img"/>
							<h3 className="title title_h3">Марат Магомедов</h3>
							<p className="text text_light">Бёрдер, 85 видов. Horny Orni Teammate. Канал — @birder_diary</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Article;
