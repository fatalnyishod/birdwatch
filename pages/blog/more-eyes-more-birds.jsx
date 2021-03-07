import Head from 'next/head';
import Layout from '../../components/layout';
import authors from '../../components/authors';
import ArticleLayout from '../../components/article/article-layout';
import ArticleHeader from '../../components/article/article-header';
import ArticleParagraph from '../../components/article/article-paragraph';
import ArticleTitle from '../../components/article/article-title';
import ArticleTitleHead from '../../components/article/article-title-head';
import ArticleSwiper from '../../components/article/article-swiper';
import ArticleQuote from '../../components/article/article-quote';
import ArticleImg from '../../components/article/article-img';

const Article = () => {
  return (
    <>
      <Head>
        <title>Группы бердвотчеров, орнитологические прогулки и туры</title>
        <meta name='description' content='Группы бердвотчеров, орнитологические прогулки и туры' />
        <meta property='og:title' content='Где найти единомышленников' />
        <meta
          property='og:description'
          content='Группы бердвотчеров, орнитологические прогулки и туры'
        />
        <meta property='og:image' content='http://birdwatch.ru/images/' />
        <meta property='og:url' content='http://birdwatch.ru/blog/more-eyes-more-birds' />
        <meta property='og:type' content='article' />
      </Head>

      <ArticleHeader coverClassName='article__header_more-eyes-more-birds' />
      <ArticleLayout author={authors.nastya}>
        <ArticleTitleHead>Где найти единомышленников</ArticleTitleHead>

        <ArticleParagraph>
          Бёрдинг не зависит от факторов вокруг — птицы есть всегда, везде и постоянно разные. Можно
          вальяжно ходить по парку и считать синиц, а можно штурмовать скалы в поисках гнезда
          белоплечего орлана. Не делайте так, если вы не орнитолог, ладно?
        </ArticleParagraph>

        <ArticleParagraph>
          У начинающих бёрдеров лайферы каждый день. Когда первая волна интереса еще не потухла, а
          новых птиц встречаешь меньше, пора вспомнить о бёрдерах вокруг и начать делиться
          впечатлениями.
        </ArticleParagraph>

        <ArticleTitle>Ищите бёрдеров в соцсетях</ArticleTitle>

        <ArticleParagraph>
          Мы собрали все более-менее активные группы бердеров из разных регионов страны, написали им
          и попросили в двух предложениях написать о себе.
        </ArticleParagraph>

        <ArticleParagraph>
          Многие группы помимо площадки для общения бёрдеров организовывают экскурсии или туры для
          наблюдения за птицами. Если вы начинающий — сходите в местный парк с орнитологом или
          опытным бёрдером. Есть прогулки и походы за более редкими лайферами — для продвинутых.
        </ArticleParagraph>

        <ArticleParagraph>Нажмите Ctrl + F для поиска своего региона.</ArticleParagraph>

        <ArticleTitle>По всей России</ArticleTitle>

        <ArticleParagraph>
          <a href='http://www.rbcu.ru/' className='link' target='_blank'>
            Союз Охраны Птиц России
          </a>
        </ArticleParagraph>

        <ArticleTitle>Санкт-Петербург и Ленобласть</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/birdstourspb' className='link' target='_blank'>
            Орнитологические экскурсии в Санкт-Петербурге
          </a>
        </ArticleParagraph>
        <ArticleParagraph>
          <a href='https://vk.com/ladogabirds' className='link' target='_blank'>
            Ладожская орнитологическая станция
          </a>
        </ArticleParagraph>

        <ArticleTitle>Москва и Мособласть</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/birdwatching_moscow' className='link' target='_blank'>
            Бёрдвотчинг Москва
          </a>
          <br />
          Прогулки бёрдеров и обучение
        </ArticleParagraph>
        <ArticleParagraph>
          <a href='https://vk.com/lyricforester' className='link' target='_blank'>
            Лирический лесник
          </a>
          <br />
          Экскурсии с орнитоолгом Григорием Евтухом
        </ArticleParagraph>
        <ArticleParagraph>
          <a href='https://vk.com/birdsmoscow' className='link' target='_blank'>
            Птицы Москвы и Подмосковья
          </a>
          <br />
          Сообщество любителей и профессионалов-орнитологов, которые хотят использовать наблюдения в
          научных целях. Поддерживают{' '}
          <a href='http://ru-birds.ru' target='_blank' className='link'>
            Рубёрдс
          </a>
          .
        </ArticleParagraph>
        <ArticleParagraph>
          <a href='https://vk.com/shkola_ptic' className='link' target='_blank'>
            Школа наблюдения за птицами
          </a>
          <br />
          Проводят практические занятия: экскурсии в городе и загородом, планируют проводить лекции
          и семинары. В группе есть тесты по видам птиц и статьи для начинающих. Делают обучающие
          карточки по видам птиц, например, как отличить грача от ворона или зуйка от галстучника.
        </ArticleParagraph>

        <ArticleTitle>Екатеринбург и область</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/birdwatching_ekb' className='link' target='_blank'>
            Бёрдинг и организация орнитологических экскурсий
          </a>
          <br />
          Организуют городские и загородные орнитологические экскурсий. Учат и предоставляют
          гидов-натуралистов, издают карманные определители-путеводители по местной фауне и флоре.
        </ArticleParagraph>
        <ArticleParagraph>
          <a href='https://vk.com/birds_sverdl' className='link' target='_blank'>
            Птицы Свердловской области
          </a>
        </ArticleParagraph>

        <ArticleTitle>Архангельск</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/arhptica' className='link' target='_blank'>
            Архптица
          </a>
        </ArticleParagraph>

        <ArticleTitle>Пермь и край</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/birdingperm' className='link' target='_blank'>
            Бёрдинг в Перми
          </a>
          <br />
          Организуют орнитологические экскурсии, проводят весенние и осенние соревнования по
          спортивной орнитологии, координируют участие во всероссийских учетах птиц.
        </ArticleParagraph>

        <ArticleTitle>Рязань и область</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/pticy_ryazan' className='link' target='_blank'>
            Рязанский клуб «Птицы»
          </a>
          <br />
          Сообщество любителей и профессионалов бёрдвотчинга. Помогают начинающим, участвуют во
          всероссийских орнитологических акциях. Члены клуба встречаются один раз в месяц областной
          библиотеке.
        </ArticleParagraph>

        <ArticleTitle>Алтай</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/ornitoexur' className='link' target='_blank'>
            Алтайские познавательные экскурсии
          </a>
          <br />
          Экскурсии для знакомства с миром природы. Во время экскурсий наблюдают за птицами и учатся
          их распознавать. Учат работать с Джи-пи-эс навигатором и фотографировать.
        </ArticleParagraph>

        <ArticleTitle>Ульяновск и область</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/volgabirdwatching' className='link' target='_blank'>
            Волга бёрдвотчинг
          </a>
        </ArticleParagraph>
        <ArticleParagraph>
          <a href='https://vk.com/ulbirds' className='link' target='_blank'>
            Птицы Ульяновской области
          </a>
        </ArticleParagraph>

        <ArticleTitle>Челябинск и область</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/chelbirds' className='link' target='_blank'>
            Птицы Челябинской области
          </a>
          <br />
          Группа для общения и знакомства любителей диких птиц. Группа оказывает посильную помощь в
          спасении попавших в беду диких птиц.
        </ArticleParagraph>

        <ArticleTitle>Брянск и область</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/bryanskbirds' className='link' target='_blank'>
            Птицы Брянского леса и не только...
          </a>
          <br />
          Группу ведут профессиональные орнитологами заповедника «Брянский лес» для обмена
          наблюдениями за птицами.
        </ArticleParagraph>
        <ArticleParagraph>
          <a href='https://vk.com/club194312432' className='link' target='_blank'>
            Птицы Брянска и Брянской области
          </a>
        </ArticleParagraph>

        <ArticleTitle>Нижний Новгород и область</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/nestory_tours' className='link' target='_blank'>
            Несторы турс
          </a>
          <br />
          Организуют туры и экскурсии по наблюдению за птицами и другими животными в дикой природе.
        </ArticleParagraph>
        <ArticleParagraph>
          <a href='https://vk.com/birdsnino' className='link' target='_blank'>
            Птицы Нижегородской области
          </a>
          <br />
          Наблюдение за птицами, обмен интересной информацией, фотоохота и ее трофеи, обсуждения и
          вопросы.
        </ArticleParagraph>

        <ArticleTitle>Марий Эл</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/maribirds' className='link' target='_blank'>
            Птицы Марий Эл
          </a>
          <br />
          Группа рассказывает о птицах республики, продвигает бережное отношение к природе,
          например, правильное кормлению птиц в зимой. Помогает собрать единомышленников для
          совместных учётов и наблюдений.
        </ArticleParagraph>

        <ArticleTitle>Курск и область</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/birdskursk' className='link' target='_blank'>
            Птицы города Курска
          </a>
          <br />
          Группа собирает и публикует авторские фото и описания птиц.
        </ArticleParagraph>

        <ArticleTitle>Самара и область</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/club128993027' className='link' target='_blank'>
            Птицы Самарской области
          </a>
          <br />
          Объединяют бёрдвотчеров Самарской и Ульяновской областей. Публикуют фото участников
          ежегодного фотоконкурса Жигулёвского заповедника «Большой год». Также помогают попавшим в
          беду птицам. Группу консультирует старший научный сотрудник Жигулёвского заповедника,
          кандидат биологических наук Г. П. Лебедева.
        </ArticleParagraph>

        <ArticleTitle>Владимир и область</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/birds33' className='link' target='_blank'>
            Птицы Владимирской области
          </a>
          <br />
          Публикуют наблюения, фотографии и статьи о местных птицах, помогают найти
          единомышленников.
        </ArticleParagraph>

        <ArticleTitle>Киров и область</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/aves_kirov' className='link' target='_blank'>
            Птицы Кировской области
          </a>
        </ArticleParagraph>

        <ArticleTitle>Новгородская область</ArticleTitle>
        <ArticleParagraph>
          <a href='https://vk.com/club163319592' className='link' target='_blank'>
            Птицы Новгородской области
          </a>
          <br />
          Сообщество ведёт орнитолог Рдейского заповедника Наталия Зуева. В группе публикуют фото и
          заметки участников. Результаты наблюдений публикуются в научных журналах и сборниках
          статей.
        </ArticleParagraph>

        <ArticleParagraph bold={true}>
          Если у вас есть своя группа, посвященная птицам, напишите нам на почту{' '}
          <a href='mailto:inbox@birdwatch.ru' className='link'>
            inbox@birdwatch.ru
          </a>
          , мы добавим в список.
        </ArticleParagraph>

        <ArticleParagraph>Удачного бёрдинга!</ArticleParagraph>
      </ArticleLayout>
    </>
  );
};

export default Article;
