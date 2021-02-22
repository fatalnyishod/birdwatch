import Header from './header';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__overlay'></div>

      <Header isBanner={true} />

      <div className='grid banner__grid'>
        <div className='banner__wrap'>
          <h1 className='title title_h1 banner__title'>
            Бёрдвотчинг —
            <br />
            что это и как начать?
          </h1>
          <margin-24 />

          <p className='text text_b text_white'>
            Видели людей, которые бегают по парку с биноклями и фотоаппаратами и что-то высматривают
            в кроне деревьев? Это бёрдвотчеры — любители птиц. Они коллекционируют встреченные виды
            и помогают развивать науку.
          </p>
          <margin-24 />

          <p className='text text_b text_white'>Вы тоже можете попробовать, это затягивает.</p>
          <margin-24 />

          <Link href='/blog/birdwatching-what-it-is-and-how-to-start'>
            <a className='btn btn_white'>Подробнее о бёрдвотчинге</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
