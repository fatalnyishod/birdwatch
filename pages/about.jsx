import Head from "next/head";
import Layout from "../components/layout";
import ArticleParagraph from "../components/article/article-paragraph";
import ArticleTitle from "../components/article/article-title";
import ArticleSubitle from "../components/article/article-subtitle";
import ArticleList from "../components/article/article-list";
import ArticleSwiper from "../components/article/article-swiper";
import ArticleQuote from "../components/article/article-quote";
import ArticleImg from "../components/article/article-img";
import ArticleAuthor from "../components/article/article-author";

const About = () => {
	return (
		<>
			<Head>
				<title>Бёрдвотчинг — О нас</title>
				<meta name="description" content="Бёрдвотчинг — О нас."/>
				<meta property="og:title" content="Бёрдвотчинг — О нас"/>
				<meta property="og:description" content="Бёрдвотчинг — О нас."/>
				<meta property="og:image" content="http://birdwatch.ru/images/"/>
				<meta property="og:url" content="http://birdwatch.ru/about"/>
			</Head>

			<Layout>
				<div className="article">
					<div className="grid article__grid">
						<div className="article__wrap article__wrap_main">
							<h1 className="title title_h1">Команда</h1>

							<ArticleParagraph>
								Занявшись бёрдингом, мы обнаружили, что в рунете нет ни одного ресурса, который бы систематизировал базовую информацию для новичков об этой деятельности. Поэтому мы решили создать его сами — вы смотрите на первую, пробную версию сайта birdwatch.ru.
							</ArticleParagraph>

							<ArticleParagraph>
								Идея проекта — команда бёрдеров из Санкт-Петербурга Horny Orni Team. Загляните в наш <a className="link">канал</a> и <a className="link">чат</a> в Телеграме, там активно.
							</ArticleParagraph>

							<ArticleList
								list = {
									[
										"Дизайн — <a class=\"link\">Вадим Злыгастев</a>",
										"Разработка — <a class=\"link\">Михаил Данилов</a>",
										"Ученые-орнитологи — <a class=\"link\">Сергей Петров</a> и <a class=\"link\">Юрий Михайлов</a>"
									]
								}
							/>

							<ArticleTitle>
								Помощь
							</ArticleTitle>

							<ArticleSubitle>
								Словом
							</ArticleSubitle>

							<ArticleParagraph>
								Если вы автор блога, канала или сайта — расскажите про ресурс. Опубликуйте у себя ссылку на любую статью с комментарием — для вас это контент, а к нам придут люди, которые могут стать бёрдерами.
							</ArticleParagraph>
							
							<ArticleSubitle>
								Делом
							</ArticleSubitle>

							<ArticleParagraph>
								В первую очередь копирайтеры, разбирающиеся в орнитологии или практике бердинга. Тем для статей у нас много, а авторов мало.
							</ArticleParagraph>

							<ArticleParagraph>
								Еще нам нужны программисты, умеющие работать с большим количеством данных и разработчики мобильным приложений на iOS.
							</ArticleParagraph>

							<ArticleParagraph>
								Если вы копирайтер или программист — напишите <a className="link">в Телеграм</a> или на почту — <a className="link">fatalnyishod@gmail.com</a>.
							</ArticleParagraph>

							<ArticleSubitle>
								Деньгами
							</ArticleSubitle>

							<ArticleParagraph>
								Основную работу мы делаем на энтузиазме и своими силами, но некоторые вещи вроде хостинга и сервера требуют средств. Если вам сильно хочется прислать нам денег, вот номер Сберовской карты — _`номер карты сюда`_.
							</ArticleParagraph>

							<ArticleParagraph>
								Напишите в комментарии к переводу, что это на развитие сайта.
							</ArticleParagraph>

							<ArticleSubitle>
								Сотрудничество
							</ArticleSubitle>

							<ArticleParagraph>
								Если вы представитель чего-нибудь хорошего (например, магазина с биноклями), и у вас есть предложение, пишите сюда — <a className="link">fatalnyishod@gmail.com</a>.
							</ArticleParagraph>

							<ArticleParagraph>
								<span className="text text_b">Ornytology rocks!</span>
							</ArticleParagraph>
						</div>

						<div className="article__wrap article__wrap_side"/>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default About;
