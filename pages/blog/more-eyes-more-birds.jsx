import Head from "next/head";
import Layout from "../../components/layout";
import authors from "../../components/authors";
import ArticleLayout from "../../components/article/article-layout";
import ArticleHeader from "../../components/article/article-header";
import ArticleParagraph from "../../components/article/article-paragraph";
import ArticleTitle from "../../components/article/article-title";
import ArticleSwiper from "../../components/article/article-swiper";
import ArticleQuote from "../../components/article/article-quote";
import ArticleImg from "../../components/article/article-img";

const Article = () => {
  return (
    <>
      <Head>
        <title>Группы бердвотчеров, орнитологические прогулки и туры</title>
        <meta name="description" content="Группы бердвотчеров, орнитологические прогулки и туры" />
        <meta property="og:title" content="Бёрдвотчинг — что это и ĸаĸ начать?" />
        <meta
          property="og:description"
          content="Группы бердвотчеров, орнитологические прогулки и туры"
        />
        <meta property="og:image" content="http://birdwatch.ru/images/" />
        <meta
          property="og:url"
          content="http://birdwatch.ru/blog/birdwatching-what-it-is-and-how-to-start"
        />
        <meta property="og:type" content="article" />
      </Head>

      <Layout>
        <ArticleHeader text="Больше глаз — больше птиц" />
        <ArticleLayout author={authors.marat}>
          <ArticleParagraph>
            Удобство бёрдвотчинга в независимости от факторов — птицы есть всегда, везде и постоянно
            разные. Можно вальяжно ходить по парку и считать синиц, а можно штурмовать скалы в
            поисках гнезда белоплечего орлана. (Не делайте так, если вы не орнитолог, ладно?)
          </ArticleParagraph>

          <ArticleParagraph>
            Бёрдинг подсаживает не хуже сигарет — если интерес появился и вы начали считать виды —
            все, обратной дороги нет. Бёрдеры любят вспоминать о начале своего пути, когда лайферы
            ежедневно и ближайший парк — русское поле экспериментов, а единственное сожаление в том,
            что начал увлекаться птицами так поздно.
          </ArticleParagraph>

          <ArticleParagraph>
            В момент, когда первая волна интереса еще не потухла, а новых птиц уже сильно меньше,
            пора вспомнить о бёрдерах вокруг и начать делиться впечатлениями.
          </ArticleParagraph>

          <ArticleTitle>Где найти бёрдеров?</ArticleTitle>

          <ArticleParagraph>
            В Европе, Штатах и, например, в Колумбии, где больше всего видов птиц на свете, бёрдинг
            — это индустрия разной степени глобальности. В России пока еще хобби гиков и
            фотоохотников, однако найти единомышленников можно.
          </ArticleParagraph>

          <ArticleParagraph>
            Мы собрали все более-менее активные группы бердеров из разных регионов страны, написали
            им и попросили в двух предложениях написать о себе.
          </ArticleParagraph>

          <ArticleParagraph>
            Многие группы помимо площадки для общения бёрдеров организовывают экскурсии или туры для
            наблюдения за птицами. Если вы начинающий — сходите в местный парк в орнитологом или
            опытным бёрдером, если вам нужны новые виды, можно записаться на экскурсию посложнее,
            грех не записать себе в чек-лист пару жирных лайферов. Несколько пар глаз и ушей ведь
            продуктивнее, чем одни ;)
          </ArticleParagraph>

          <ArticleParagraph>
            <a href="#" className="link link_spoiler">
              Посмотрите список и найдите тех, кто к вам ближе
            </a>
            {"  "}↓
          </ArticleParagraph>

          <ArticleParagraph>Желаю удачи!</ArticleParagraph>
        </ArticleLayout>
      </Layout>
    </>
  );
};

export default Article;
