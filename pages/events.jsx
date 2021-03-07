import Head from 'next/head';
import Layout from '../components/layout';
import ArticleLayout from '../components/article/article-layout';
import ArticleParagraph from '../components/article/article-paragraph';
import ArticleTitle from '../components/article/article-title';
import ArticleSubitle from '../components/article/article-subtitle';

const Events = () => {
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
          <h1 className='title title_h1'>Мероприятия</h1>

          <ArticleParagraph>
            Мы периодически куда нибудь ездим и к нам можно присоединиться. Как только будет готова
            программа, она появится на этой странице.
          </ArticleParagraph>

          <ArticleParagraph>Подпишитесь на рассылку, чтобы не пропустить.</ArticleParagraph>
        </ArticleLayout>
      </Layout>
    </>
  );
};

export default Events;
