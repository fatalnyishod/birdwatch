import Head from 'next/head';
import Subscription from '../../components/subscription';
import authors from '../../components/authors';
import ArticleLayout from '../../components/article/article-layout';
import ArticleHeader from '../../components/article/article-header';
import ArticleParagraph from '../../components/article/article-paragraph';
import ArticleTitle from '../../components/article/article-title';
import ArticleTitleHead from '../../components/article/article-title-head.jsx';
import ArticleSwiper from '../../components/article/article-swiper';
import ArticleOl from '../../components/article/article-ol.jsx';
import ArticleImg from '../../components/article/article-img';

const Article = () => {
  return (
    <>
      <Head>
        <title>Как выбрать бинокль для бёрдвотчинга</title>
        <meta
          name='description'
          content='Рассказываем что нужно учесть, чтобы вы не потратили деньги на неудобный или ненужный бинокль.'
        />
        <meta property='og:title' content='Бёрдвотчинг — что это и ĸаĸ начать?' />
        <meta
          property='og:description'
          content='Рассказываем что нужно учесть, чтобы вы не потратили деньги на неудобный или ненужный бинокль.'
        />
        <meta property='og:image' content='http://birdwatch.ru/images/' />
        <meta
          property='og:url'
          content='http://birdwatch.ru/blog/birdwatching-what-it-is-and-how-to-start'
        />
        <meta property='og:type' content='article' />
      </Head>

      <ArticleHeader coverClassName='article__header_binokulars' />
      <ArticleLayout author={authors.stepan}>
        <ArticleTitleHead>Как выбрать бинокль для бёрдвотчинга</ArticleTitleHead>
        <ArticleParagraph>
          Бинокль нужен, чтобы рассматривать детали птиц и видеть их вдалеке. Рассказываем что нужно
          учесть, чтобы вы не потратили деньги на неудобный или ненужный бинокль.
        </ArticleParagraph>

        <ArticleTitle>Не покупайте бинокль, пока нет опыта</ArticleTitle>

        <ArticleParagraph>
          На старте у вас две задачи: научиться смотреть на птиц через бинокль и понять, хотите ли
          вы продолжать заниматься бёрдвотчингом.
        </ArticleParagraph>

        <ArticleParagraph>
          Поищите старый бинокль у себя или попросите у друзей. На орнитологических экскурсиях тоже
          дают бинокль напрокат бесплатно. Если всё же не нашли временного бинокля — купите самый
          дешёвый.
        </ArticleParagraph>

        <ArticleParagraph>
          Сначала вы будете смотреть самых распространенных птиц — старый или дешёвый бинокль
          справится с этой задачей. Научитесь глядя в него находить птиц и быстро фокусироваться на
          них.
        </ArticleParagraph>

        <ArticleParagraph>
          Находите птицу глазами, а потом наводите на неё бинокль. Если фокус не подходит — крутите
          колесо сверху бинокля.
        </ArticleParagraph>

        <ArticleParagraph>
          Когда решите, что бёрдвотчинг с вами всерьёз и надолго — уже будет опыт наблюдения и вы
          будете знать, что для вас в бинокле важнее всего: вес, угол обзора, скорость фокусировки
          или что-то другое.
        </ArticleParagraph>

        <ArticleParagraph>
          Вот два бинокля, один из которых самый бюджетный — он подойдёт для начала, а второй — уже
          для серьёзно увлечённых.
        </ArticleParagraph>

        <ArticleTitle>
          <a href='https://bre.is/GgoxNvTr' className='link'>
            Китайский бинокль
          </a>{' '}
          — 1 400 ₽
        </ArticleTitle>

        <ArticleImg img={'/images/binokulars/1-binokulars.png'} />

        <ArticleParagraph>
          Такие бинокли используют на орнитологических прогулках в Петербурге. Бинокль легкий,
          фокусировка плавная и удобная. Минусы стандартные для такой цены: небольшой угол обзора и
          при плохом освещении качество картинки резко падает.
        </ArticleParagraph>

        <ArticleTitle>
          <a href='https://veber.ru/search/?q=Veber+Nature+Russia' className='link'>
            Veber Nature Russia
          </a>{' '}
          — 6 580 ₽
        </ArticleTitle>

        <ArticleImg img={'/images/binokulars/2-binokulars.png'} />

        <ArticleParagraph>
          Небольшой бинокль, который легко носить. Не запотевает от перепадов температур,
          водонепроницаемый, угол обзора больше чем у похожих биноклей. Очень чёткая картинка.
        </ArticleParagraph>

        <ArticleParagraph>
          Плохо держатся крышки на линзах. Чтобы сфокусироваться приходится делать несколько
          оборотов колеса, поэтому, если птица летит быстро — рискуете не успеть разглядеть.
        </ArticleParagraph>

        <ArticleTitle>Хочу такой же, но дешевле</ArticleTitle>

        <ArticleParagraph>
          Посмотрите объявления на Авито и Юле. Продавцы не всегда пишут модель бинокля в названии
          объявления, поэтому смотрите фотографии.
        </ArticleParagraph>

        <ArticleImg
          img={'/images/binokulars/3-binokulars.png'}
          sign='Veber Russia Nature на Авито'
        />

        <ArticleParagraph>
          Другой вариант купить дешевле: спросить в группах бёрдвотчеров. Возможно, кто-то решил
          купить новый бинокль и готов продать старый.
        </ArticleParagraph>

        <ArticleTitle>На какие параметры обратить внимание</ArticleTitle>

        <ArticleOl>
          <li>
            <div>
              <b>Размер и вес — лучше меньше</b>
              <span>
                Выбирайте полностью под себя. Учитывайте, что бинокль придётся носить на шее или в
                рюкзаке по несколько часов.
              </span>
            </div>
          </li>

          <li>
            <div>
              <b>Призмы: порро и руф по качеству почти одинаковые, но руф легче и удобнее</b>
              <span>
                Порро-бинокли — «со ступенькой» из-за формы призмы, руф — полностью прямые. Раньше
                порро были лучше по качеству картинки, но теперь разница с руф практически
                незаметна. Зато руф-бинокли меньше и легче.
              </span>
            </div>
          </li>

          <li>
            <div>
              <b>Увеличение и диаметр линзы — подойдут средние значения</b>
              <span>
                Две цифры, которые пишут на биноклях и в характеристиках. 10x42 значит 10 —
                кратность, во сколько бинокль максимально увеличивает, 42 — диаметр передней линзы,
                который влияет на угол обзора, четкость изображения и как будет видно в сумерках. Не
                нужно гнаться за большими цифрами, потому что большая кратность плохо влияет на
                остальные параметры — средние значения 8–10 х 40–50, отлично подходят для
                бёрдвотчинга.
              </span>
            </div>
          </li>

          <li>
            <div>
              <b>Азот, чтобы линзы не запотевали</b>
              <span>
                Азот закачивают внутрь бинокля, чтобы линзы не запотевали от перепада температур.
                Лучше, чтобы бинокль был с ним, но это не критично.
              </span>
            </div>
          </li>

          <li>
            <div>
              <b>Покрытие и материал, чтобы не развалился</b>
              <span>
                Важно, чтобы он выдерживал хотя бы минимальные удары и падения. Плюс, когда бинокль
                водостойкий. Если пойдёт снег или дождь, не придётся его сразу прятать.
              </span>
            </div>
          </li>
        </ArticleOl>
      </ArticleLayout>

      <Subscription />
    </>
  );
};

export default Article;
