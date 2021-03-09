import Link from 'next/link';

const RoundUp = () => {
  return (
    <div className='round-up'>
      <div className='grid'>
        <h4 className='title title_h4'>Последние статьи</h4>
      </div>
      <margin-16 />

      <div className='grid round-up__grid'>
        <Link href='/blog/binokulars-and-other-optics'>
          <a className='round-up__item'>
            <div className='round-up__item-wrap'>
              <img src='/images/backgrounds/binokulars.jpg' className='round-up__img' />
              <h3 className='title title_h3 title_white'>Как выбрать бинокль для бёрдвотчинга</h3>
            </div>
            <span className='text text_light'>Степан Сурков, 9 марта</span>
            <p className='text'>
              Что учесть, чтобы не потратить деньги на бесполезный или неудобный бинокль.
            </p>
          </a>
        </Link>

        <Link href='/blog/find-your-guide'>
          <a className='round-up__item'>
            <div className='round-up__item-wrap'>
              <img src='/images/backgrounds/find-your-guide.jpg' className='round-up__img' />
              <h3 className='title title_h3 title_white'>Определители птиц</h3>
            </div>
            <span className='text text_light'>Анастасия Бесфамильная, 9 марта</span>
            <p className='text'>Руководство по многообразию полевых определителей.</p>
          </a>
        </Link>

        <Link href='/blog/where-is-your-lifelist'>
          <a className='round-up__item'>
            <div className='round-up__item-wrap'>
              <img src='/images/backgrounds/where-is-your-lifelist.png' className='round-up__img' />
              <h3 className='title title_h3 title_white'>Чеклисты для бёрдвотчеров</h3>
            </div>
            <span className='text text_light'>Анастасия Бесфамильная, 9 марта</span>
            <p className='text'>
              Зачем записывать увиденных птиц и как это делать: блокноты, Ебёрд, Рубёрд и
              Айнатуралист.
            </p>
          </a>
        </Link>

        <Link href='/blog/biotopes'>
          <a className='round-up__item'>
            <div className='round-up__item-wrap'>
              <img src='images/backgrounds/biotopes.jpg' className='round-up__img' />
              <h3 className='title title_h3 title_white'>Биотопы: где какие птицы обитают</h3>
            </div>
            <span className='text text_light'>Екатерина Сичинава, 9 марта</span>
            <p className='text'>
              Списки мест с видами, которые в них встречаются, помогут во время планирования похода
              и при поиске нужных птиц.
            </p>
          </a>
        </Link>

        <Link href='/blog/more-eyes-more-birds'>
          <a className='round-up__item'>
            <div className='round-up__item-wrap'>
              <img src='images/backgrounds/more-eyes-more-birds.png' className='round-up__img' />
              <h3 className='title title_h3 title_white'>Где найти единомышленников</h3>
            </div>
            <span className='text text_light'>Анастасия Бесфамильная, 9 марта</span>
            <p className='text'>
              Единомышленники, наставники и друзья в орнитологии — где искать экскурсии и туры.
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RoundUp;
