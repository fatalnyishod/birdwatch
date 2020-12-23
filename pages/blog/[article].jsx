import Head from "next/head";
import Layout from "../../components/layout";
import ArticleHeader from "../../components/article/article-header";
import ArticleParagraph from "../../components/article/article-paragraph";
import ArticleTitle from "../../components/article/article-title";
import ArticleSwiper from "../../components/article/article-swiper";
import ArticleQuote from "../../components/article/article-quote";
import ArticleImg from "../../components/article/article-img";
import ArticleAuthor from "../../components/article/article-author";

const Article = (props) => {
	return (
		<>
			<Head>
				<title>ID этой статьи — {props.articleId}</title>
				<meta name="description" content="Какое-нибудь описание."/>
				<meta property="og:title" content={`ID этой статьи — ${props.articleId}`}/>
				<meta property="og:description" content="Какое-нибудь описание."/>
				<meta property="og:image" content="http://birdwatch.ru/images/"/>
				<meta property="og:url" content={`http://birdwatch.ru/blog/${props.articleId}`}/>
				<meta property="og:type" content="article"/>
			</Head>

			<Layout>
				<div className="article">
					<ArticleHeader />

					<div className="grid article__grid">
						<div className="article__wrap article__wrap_main">
							<ArticleTitle text="Это заголовок"/>
							
							<ArticleParagraph text="Это абзац"/>

							<ArticleImg img="/images/backgrounds/green-bird.png" />

							<ArticleQuote text="А это цитата." />

							<ArticleSwiper 
								imgs = {[
									'/images/backgrounds/green-bird.png',
									'/images/backgrounds/green-bird.png',
									'/images/backgrounds/green-bird.png'
								]}
							/>
						</div>

						<div className="article__wrap article__wrap_side">
							<ArticleAuthor
								name="Марат Магомедов"
								desc="Бёрдер, 85 видов. Horny Orni Teammate. Канал — @birder_diary"
								photo="https://sun9-50.userapi.com/impf/c857416/v857416582/21e9bb/k-TZNgRp2Ak.jpg?size=640x640&quality=96&proxy=1&sign=a1b2aa8815e35a19748b017a12ef0911&type=album"
							/>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

export async function getServerSideProps ({query}) {
	return {
		props: {
			"articleId": query.article
		}
	}	
}

export default Article;
