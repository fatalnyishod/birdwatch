import Head from 'next/head';
import Layout from '../components/layout';
import ArticleLayout from '../components/article/article-layout';
import ArticleParagraph from '../components/article/article-paragraph';
import ArticleTitle from '../components/article/article-title';
import ArticleSubitle from '../components/article/article-subtitle';
import Donate from '../components/donate.jsx';
import ArticleUl from '../components/article/article-ul.jsx';
import ArticleSwiper from '../components/article/article-swiper';
import ArticleQuote from '../components/article/article-quote';
import ArticleImg from '../components/article/article-img';
import ArticleAuthor from '../components/article/article-author';

const About = () => {
  return (
    <>
      <Head>
        <title>Бёрдвотчинг — О нас</title>
        <meta name='description' content='Бёрдвотчинг — О нас.' />
        <meta property='og:title' content='Бёрдвотчинг — О нас' />
        <meta property='og:description' content='Бёрдвотчинг — О нас.' />
        <meta property='og:image' content='http://birdwatch.ru/images/' />
        <meta property='og:url' content='http://birdwatch.ru/about' />
      </Head>

      <Layout>
        <ArticleLayout>
          <h1 className='title title_h1'>Команда</h1>
          <ArticleParagraph>
            Занявшись бёрдингом, мы обнаружили, что в рунете нет ни одного ресурса, который бы
            систематизировал базовую информацию для новичков об этой деятельности. Поэтому мы решили
            создать его сами — вы смотрите на первую, пробную версию сайта birdwatch.ru.
          </ArticleParagraph>
          <ArticleParagraph>
            Идея проекта — команда бёрдеров из Санкт-Петербурга Horny Orni Team.
            <br />
            Загляните в наш{' '}
            <a href='https://t.me/hornyorniteam' className='link'>
              канал
            </a>{' '}
            и 
            <a href='https://t.me/hornyornichat' className='link'>
              чат
            </a>{' '}
            в Телеграме, там активно.
          </ArticleParagraph>
          <ArticleTitle>Спасибо</ArticleTitle>
          <ArticleParagraph>
            <a href='https://www.instagram.com/zvadim1593/' className='link'>
              Вадиму Злыгастеву
            </a>{' '}
            — за концепт и дизайн.
            <br />
            Михаилу Данилову — за разработку и код.
            <br />
            <a href='http://stepansurkov.ru/' className='link'>
              Степану Суркову
            </a>{' '}
            — за редакторскую работу.
            <br />
            Всем пишущим авторам.
          </ArticleParagraph>
          <ArticleParagraph></ArticleParagraph>
          <ArticleParagraph></ArticleParagraph>
          <ArticleTitle>Помощь</ArticleTitle>
          <ArticleParagraph>
            <b>Словом</b>
            <br />
            Если вы автор блога, канала или сайта — расскажите про ресурс. Опубликуйте у себя ссылку
            на любую статью с комментарием — для вас это контент, а к нам придут люди, которые могут
            стать бёрдерами.
          </ArticleParagraph>
          <ArticleParagraph>
            <b>Делом</b>
            <br />
            Нам нужны авторы, разбирающиеся в орнитологии или бёрдинге. Тем для статей у нас много,
            а авторов мало. Еще нужны разработчики, умеющие работать с большим количеством данных.
            <br />
            Если вы копирайтер или программист, напишите нам —{' '}
            <a href='mailto:inbox@birdwatch.ru' className='link'>
              inbox@birdwatch.ru
            </a>
            .
          </ArticleParagraph>

          <ArticleParagraph>
            <b>Деньгами</b>
            <br />
            Основную работу мы делаем на энтузиазме и своими силами, но некоторые вещи вроде
            хостинга и сервера требуют средств. Если вы хотите поддержать развитие проекта, пришлите
            любую сумму.
          </ArticleParagraph>

          <Donate />

          <ArticleSubitle>Сотрудничество</ArticleSubitle>
          <ArticleParagraph>
            Если вы представитель чего-нибудь хорошего (например, магазина с биноклями), и у вас
            есть предложение, пишите на почту —{' '}
            <a href='mailto:inbox@birdwatch.ru' className='link'>
              inbox@birdwatch.ru
            </a>
            .
          </ArticleParagraph>
          <ArticleParagraph>
            <span className='text text_b'>Ornytology rocks!</span>
          </ArticleParagraph>
        </ArticleLayout>
      </Layout>
    </>
  );
};

export default About;
