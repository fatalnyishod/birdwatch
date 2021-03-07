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
import ArticleImg from '../../components/article/article-img';
const Article = () => {
  return (
    <>
      <Head>
        <title>Определители птиц</title>
        <meta
          name='description'
          content='Давайте определимся с термином. Бёердвотчинг — это наблюдение и учет за птицами во всех его проявлениях. Если вы зимой подĸармливаете птиц на оĸонной ĸормушĸе, а потом считаете ĸаĸие прилетели — вы уже бёрдвотчер.'
        />
        <meta property='og:title' content='Определители птиц' />
        <meta
          property='og:description'
          content='Давайте определимся с термином. Бёердвотчинг — это наблюдение и учет за птицами во всех его проявлениях. Если вы зимой подĸармливаете птиц на оĸонной ĸормушĸе, а потом считаете ĸаĸие прилетели — вы уже бёрдвотчер.'
        />
        <meta property='og:image' content='http://birdwatch.ru/images/' />
        <meta property='og:url' content='http://birdwatch.ru/blog/find-your-guide' />
        <meta property='og:type' content='article' />
      </Head>

      <ArticleHeader coverClassName='article__header_find-your-guide' />
      <ArticleLayout author={authors.nastya}>
        <ArticleTitleHead>Определители птиц</ArticleTitleHead>

        <ArticleParagraph>
          В России обитает примерно 800 видов птиц. Все они имеют одинаковое базовое строение: два
          крыла, перья и клюв. Дальше все усложняется. Чтобы было проще отличать один вид
          от другого, орнитологи составляют определители, где описывают главные отличительные черты.
        </ArticleParagraph>

        <ArticleQuote>
          Познакомьтесь с топографией птиц. Не зная что такое первостепенные маховые или цевка
          сложно будет воспользоваться этой информацией из определителя, поэтому базовые строения
          об анатомии стоит изучить. Многие похожие птицы отличаются друг от друга незначительно,
          и даже самые мелкие детали могут быть решающими в определении вида.
        </ArticleQuote>

        <ArticleTitle>На что обратить внимание при выборе определителя</ArticleTitle>

        <ArticleParagraph>
          <b>Размер и вес.</b> В поездках определитель придётся носить с собой и быстро
          перелистывать, поэтому выбирайте небольшие издания. Когда наблюдаете за местными видами на
          кормушках или рядом с домом, это не так важно.
        </ArticleParagraph>

        <ArticleParagraph>
          <b>Фотографии или иллюстрации.</b> Выясните как вам проще определять: по рисункам или
          фото. В определителях должны быть изображения птиц в разных позах, например в полете,
          и крупные планы отличительных особенностей. В фото определителях условия освещения
          и различия в позах птиц могут скрыть важные особенности или выделить несущественные.
          В рисованном определителе такой проблемы нет, так как автор сам выбирает нужный ракурс.
        </ArticleParagraph>

        <ArticleParagraph>
          <b>Карты ареала.</b> Полезны для того, чтобы узнать, какие птицы живут рядом с вами,
          а какие виды прилетают только иногда.
        </ArticleParagraph>

        <ArticleTitle>Определители, которые чаще всего рекомендуют орнитологи</ArticleTitle>

        <ArticleSwiper
          imgs={[
            '/images/find-your-guide/1-1-find-your-guide.jpg',
            '/images/find-your-guide/1-2-find-your-guide.jpg',
            '/images/find-your-guide/1-3-find-your-guide.jpg'
          ]}
        />
        <ArticleParagraph>
          <b>Полный определитель птиц европейской части России</b>
          <br />
          <i>Редактор — Михаил Калякин</i>
        </ArticleParagraph>
        <ArticleParagraph>
          Собраны все виды птиц которые встречаются в Европейской части России: как гнездящиеся, так
          и зимующие либо пролётные. В книге подробно описаны виды и ареалы их обитания, собрано
          много фотографий птиц в разном возрасте и окрасе, фото гнезд. Размер для походного
          определителя не подходящий, а вот для домашней настольной книги отличный вариант.
        </ArticleParagraph>

        <ArticleSwiper
          imgs={[
            '/images/find-your-guide/2-1-find-your-guide.jpg',
            '/images/find-your-guide/2-2-find-your-guide.png'
          ]}
        />
        <ArticleParagraph>
          <b>Птицы Москвы и Подмосковья</b>
          <br />
          <i>Автор — Василий Вишневский</i>
        </ArticleParagraph>
        <ArticleParagraph>
          Тоже фотоопределитель, но более компактный. В нём собрано большинство птиц, которых часто
          встречают в садах и парках. Приведены краткие описания птиц с главными отличительными
          признаками. Это не полный определитель, но для начинающих бёрдвочеров в Москве
          и Подмосковье подходящий вариант. Отдельный плюс книги: она есть во многих книжных.
        </ArticleParagraph>

        <ArticleSwiper
          imgs={[
            '/images/find-your-guide/3-1-find-your-guide.jpg',
            '/images/find-your-guide/3-2-find-your-guide.jpg',
            '/images/find-your-guide/3-3-find-your-guide.jpg'
          ]}
        />
        <ArticleParagraph>
          <b>Птицы Подмосковья</b>
          <br />
          <i>Редактор — Виктор Зубакин</i>
        </ArticleParagraph>
        <ArticleParagraph>
          Преимущества этой книги: рисунки на которых видны отличительные признаки. Птицы нарисованы
          в разных возрастных и сезонных нарядах, понятные описания видов.
        </ArticleParagraph>

        <ArticleSwiper
          imgs={[
            '/images/find-your-guide/4-1-find-your-guide.jpg',
            '/images/find-your-guide/4-2-find-your-guide.jpg',
            '/images/find-your-guide/4-3-find-your-guide.jpg'
          ]}
        />
        <ArticleParagraph>
          <b>Птицы Сибири</b>
          <br />
          <i>В двух томах, автор — Вадим Рябицев</i>
        </ArticleParagraph>
        <ArticleParagraph>
          Первый том (черно-белый) — справочный. Второй том (цветной) — сам определитель. Во нём
          естьцветные иллюстрации птиц в разных сезонных и возрастных нарядах, в удобных для
          определения ракурсах – на земле, воде, на присаде, в полете. Есть описание распространения
          видов с цветными картами ареалов. Для европейской части России вариант не подойдёт, потому
          что в нём много видов, которые встречаются только в Сибири.
        </ArticleParagraph>

        <ArticleSwiper
          imgs={[
            '/images/find-your-guide/5-1-find-your-guide.jpg',
            '/images/find-your-guide/5-2-find-your-guide.jpg'
          ]}
        />
        <ArticleParagraph>
          <b>Птицы Европейской части России</b>
          <br />
          <i>В двух томах, автор — Вадим Рябицев</i>
        </ArticleParagraph>
        <ArticleParagraph>
          Книга для Европейской России от Калининградской области на западе и до Урала на востоке,
          от Кавказа на юге до Земли Франца-Иосифа на севере. Определитель дает полную информацию о
          птицах и пригодится как бёрдвотчерам-любителям, так и профессиональным орнитологам.
          Иллюстрации во втором томе нарисованы самим автором. Наша команда использует этот
          определитель.
        </ArticleParagraph>

        <ArticleSwiper
          imgs={[
            '/images/find-your-guide/6-1-find-your-guide.jpg',
            '/images/find-your-guide/6-2-find-your-guide.jpg'
          ]}
        />
        <ArticleParagraph>
          <b>Birds of East Asia</b>
          <br />
          <i>Автор — Mark Brazil</i>
        </ArticleParagraph>
        <ArticleParagraph>
          Однотомный полевой справочник по Восточной Азии: охватывает основные острова, включая
          Японию и Тайвань, азиатский континент от Камчатки до Корейского полуострова. Большую часть
          полевого определителя занимает информация и указание ареала каждого вида птиц с цветным
          изображением каждого вида, часто с примерами молодых, самцов и самок. Книга на английском
          языке.
        </ArticleParagraph>

        <ArticleSwiper
          imgs={[
            '/images/find-your-guide/7-1-find-your-guide.jpg',
            '/images/find-your-guide/7-2-find-your-guide.jpg'
          ]}
        />
        <ArticleParagraph>
          <b>Birds of Europe</b>
          <br />
          <i>Автор — Lars Svensson</i>
        </ArticleParagraph>
        <ArticleParagraph>
          Превосходная книга, с отличным оформлением и полезной информацией. Иллюстрации четкие,
          яркие и точные с научной точки зрения. У каждой птицы подробное описание ее идентификации,
          отличия от других птиц с похожей внешностью и указание ареала обитания. Книга на
          английском языке.
        </ArticleParagraph>

        <ArticleSwiper
          imgs={[
            '/images/find-your-guide/8-1-find-your-guide.jpg',
            '/images/find-your-guide/8-2-find-your-guide.png',
            '/images/find-your-guide/8-3-find-your-guide.png'
          ]}
        />
        <ArticleParagraph>
          <b>Птицы европейской части России</b>
          <br />
          <i>Автор — Василий Вишневский</i>
        </ArticleParagraph>
        <ArticleParagraph>
          Книга написана простым литературным языком и подойдет больше для начинающих бёрдвочеров.
          Отличительная особенность — описание и изображения яиц птиц со шкалой, по которой можно
          понять их размер.
        </ArticleParagraph>

        <ArticleSwiper
          imgs={[
            '/images/find-your-guide/9-1-find-your-guide.jpg',
            '/images/find-your-guide/9-2-find-your-guide.png',
            '/images/find-your-guide/9-3-find-your-guide.png'
          ]}
        />
        <ArticleParagraph>
          <b>Приложение: Collins Bird Guide</b>
        </ArticleParagraph>
        <ArticleParagraph>
          Справочник по птицам издательства Коллинз — главный европейский полевой определитель. В
          отличие от книги, здесь есть не только фото и описания, но записи голоса птиц. Приложение
          определяет ваше местоположение и показывает птиц нужного региона.
        </ArticleParagraph>
      </ArticleLayout>

      <Subscription />
    </>
  );
};

export default Article;
