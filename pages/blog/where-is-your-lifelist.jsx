import Head from 'next/head';
import Subscription from '../../components/subscription';
import authors from '../../components/authors';
import ArticleLayout from '../../components/article/article-layout';
import ArticleHeader from '../../components/article/article-header';
import ArticleParagraph from '../../components/article/article-paragraph';
import ArticleTitle from '../../components/article/article-title';
import ArticleTitleHead from '../../components/article/article-title-head.jsx';
import ArticleSwiper from '../../components/article/article-swiper';
import ArticleQuote from '../../components/article/article-quote';
import ArticleUl from '../../components/article/article-ul.jsx';

const Article = () => {
  return (
    <>
      <Head>
        <title>Чеклисты для бёрдвотчеров</title>
        <meta name='description' content='Зачем записывать увиденных птиц и как это делать' />
        <meta property='og:title' content='Чеклисты для бёрдвотчеров' />
        <meta
          property='og:description'
          content='Зачем записывать увиденных птиц и как это делать'
        />
        <meta property='og:image' content='http://birdwatch.ru/images/' />
        <meta property='og:url' content='http://birdwatch.ru/blog/where-is-your-lifelist' />
        <meta property='og:type' content='article' />
      </Head>

      <ArticleHeader coverClassName='article__header_where-is-your-lifelist' />
      <ArticleLayout author={authors.nastya}>
        <ArticleTitleHead>Чеклисты для бёрдвотчеров</ArticleTitleHead>

        <ArticleParagraph>
          Речь не о восьми правилах эффективности, а о чеклистах со списками птиц.
        </ArticleParagraph>

        <ArticleParagraph>
          Список всех увиденных за жизнь птиц — лайфлист — ваше главное мерило успеха. Кто-то
          гонится за его удлинением: увидеть больше птиц, найти самых редких. Другие стремятся за
          углублением лайфлиста: добавить больше информации о каждой конкретной птице, например,
          определить пол и гнездится ли она в этом месте.
        </ArticleParagraph>

        <ArticleQuote>
          Чеклист — это список птиц не за всю жизнь, а за одно наблюдение. Из этих чеклистов и
          складывается ваш лайфлист.
        </ArticleQuote>

        <ArticleTitle>Чеклист и лайфлист ведут в блокноте или в приложении</ArticleTitle>

        <ArticleSwiper
          imgs={[
            '/images/where-is-your-lifelist/1-1-where-is-your-lifelist.jpg',
            '/images/where-is-your-lifelist/1-2-where-is-your-lifelist.jpg'
          ]}
        />

        <ArticleParagraph>
          <b>Блокноты и записные книжки</b>
          <br />
          Можно использовать обычный блокнот и разделить его как минимум на три столбца: вид птицы,
          место и дату встречи. Лучше записывать ещё и с кем вы были на наблюдении, увидели ли вы
          птицу случайно или специально пошли бёрдвотчить, погоду и особенности птицы.
        </ArticleParagraph>

        <ArticleParagraph>
          На Амазоне есть и{' '}
          <a
            href='https://www.amazon.com/Rite-Rain-Weather-Notebook-195/dp/B000KELRXU'
            className='link'
          >
            специальные записные книжки
          </a>
          .
        </ArticleParagraph>

        <ArticleUl>
          <li>
            <div>
              <b>Минусы</b>
              <span>
                Блокнот занимает место, на запись приходится тратить много времени, его легко
                потерять или испортить в дождь или снег, рукописными записями сложно делиться.
              </span>
            </div>
          </li>
          <li>
            <div>
              <b>Плюсы</b>
              <span>Греет душу как и любая другая книга.</span>
            </div>
          </li>
        </ArticleUl>

        <ArticleSwiper
          imgs={[
            '/images/where-is-your-lifelist/2-1-where-is-your-lifelist.png',
            '/images/where-is-your-lifelist/2-2-where-is-your-lifelist.png',
            '/images/where-is-your-lifelist/2-3-where-is-your-lifelist.png',
            '/images/where-is-your-lifelist/2-4-where-is-your-lifelist.png',
            '/images/where-is-your-lifelist/2-5-where-is-your-lifelist.png'
          ]}
        />

        <ArticleTitle>
          <a href='https://ebird.org/home' className='link'>
            Ebird
          </a>
        </ArticleTitle>

        <ArticleParagraph>
          Приложение и сайт для ведения чеклистов. В приложении дата и местоположение записываются
          автоматически. Чтобы добавить птицу достаточно ввести начало названия — программа сама
          предложит варианты. К записям можно добавлять комментарии и дополнительную информацию.
          Фотографии загружаются потом через сайт.
        </ArticleParagraph>

        <ArticleParagraph>
          Ебёрд автоматически переносит новые виды из чеклистов в лайфлист.
        </ArticleParagraph>

        <ArticleParagraph>
          Ебёрд работает в связке с{' '}
          <a href='https://merlin.allaboutbirds.org/' className='link'>
            Merlin Bird ID
          </a>{' '}
          — это тоже приложение, но в нём описания всех видов птиц, записи их голоса и возможность
          определить птицу по описанию или фото. Определение работает не очень надёжно.
        </ArticleParagraph>

        <ArticleParagraph>
          Мы используем Ебёрд с Мерлин Бёрд Айди каждый день: отмечаем там случайные наблюдения и
          птиц с бёрдвотчерских поездок.
        </ArticleParagraph>

        <ArticleSwiper
          imgs={[
            '/images/where-is-your-lifelist/3-1-where-is-your-lifelist.png',
            '/images/where-is-your-lifelist/3-2-where-is-your-lifelist.png',
            '/images/where-is-your-lifelist/3-3-where-is-your-lifelist.png'
          ]}
        />

        <ArticleTitle>
          <a href='https://www.inaturalist.org/' className='link'>
            iNaturalist
          </a>
        </ArticleTitle>

        <ArticleParagraph>
          Это приложение и сайт не только для птиц, но и для отметок растений и всего что движется.
          Птиц сюда загружают только с фотографиями, поэтому вид птицы помогает определить
          сообщество сайта. Здесь нет возможности вести чеклист всего наблюдения, поэтому каждый вид
          придётся загружать по одному.
        </ArticleParagraph>

        <ArticleParagraph>
          Когда вы регистрируетесь, приложение предлагает разрешить другим использовать ваши
          изображения по лицензии Creative Commons. Благодаря этому ваши фото смогут использовать
          для исследований.
        </ArticleParagraph>

        <ArticleSwiper
          imgs={[
            '/images/where-is-your-lifelist/4-1-where-is-your-lifelist.png',
            '/images/where-is-your-lifelist/4-2-where-is-your-lifelist.png',
            '/images/where-is-your-lifelist/4-3-where-is-your-lifelist.png'
          ]}
        />

        <ArticleTitle>
          Сайт{' '}
          <a href='http://ru-birds.ru' className='link'>
            ru-birds
          </a>{' '}
          и приложение «
          <a
            href='https://play.google.com/store/apps/details?id=birds.mobile.birds'
            className='link'
          >
            Наблюдение за птицами
          </a>
          »
        </ArticleTitle>

        <ArticleParagraph>
          Здесь можно вести чеклисты как в Ебёрде. Отличие — отмечется не усредненное местоположение
          списка в целом, а местоположение каждой увиденной птицы. Владелец базы данных — Зоомузей
          МГУ.
        </ArticleParagraph>

        <ArticleTitle>Отмечайте живых свободных птиц</ArticleTitle>

        <ArticleParagraph>
          Добавляйте в чеклист только тех птиц, которых вы точно определили по звуку или виду. Птиц
          в клетках, вольерах и зоопарках мы не добавляем — только птиц на свободе. Мёртвые птицы
          тоже обычно не учитываются, но некоторые бёрдеры всё же отмечают их.
        </ArticleParagraph>

        <ArticleParagraph>
          Если вы никогда не составляли список наблюдений за птицами — начните сегодня. Старые
          наблюдение тоже можно добавить, если вы точно помните вид, время и место встречи с птицей.
        </ArticleParagraph>
      </ArticleLayout>

      <Subscription />
    </>
  );
};

export default Article;
