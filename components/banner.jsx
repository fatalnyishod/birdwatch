import Header from './header';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__overlay'></div>

      <Header isBanner={true} />

      <div className='grid banner__grid'>
        <div className='banner__wrap'>
          <h1 className='title title_h1 banner__title'>Ищем и смотрим птиц</h1>
          <margin-24 />

          <p className='text text_b text_white'>
            Это называется бёрдвотчинг. Если хотите видеть красивых птиц, чаще бывать на природе
            и помогать учёным — присоединяйтесь.
          </p>
          <margin-24 />

          <Link href='/blog/birdwatching-what-it-is-and-how-to-start'>
            <a className='btn btn_white'>Узнать о бёрдвотчинге</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
