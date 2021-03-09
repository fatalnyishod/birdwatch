import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';

SwiperCore.use([Navigation, Pagination]);

const ArticleSwiper = ({imgs, isSign, mods}) => {
  const swiperSettings = {
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
        prevEl: '#prev',
        nextEl: '#next'
      },
      pagination: {
        el: '.article__swiper-pagination',
        bulletElement: 'div',
        bulletClass: 'article__swiper-bullet',
        bulletActiveClass: 'article__swiper-bullet_active',
        clickable: 'true'
      },
      loop: true
    },
    slides = [];

  imgs.forEach((el, i) => {
    slides.push(
      <SwiperSlide key={i}>
        <img src={el} alt='' className='article__swiper-img' />
        {isSign ? <span className='text text_sign'>{isSign[i]}</span> : null}
      </SwiperSlide>
    );
  });

  return (
    <div className={'article__swiper ' + mods}>
      <Swiper {...swiperSettings}>
        {slides}

        <div className='article__swiper-nav article__swiper-nav_prev' id='prev'></div>
        <div className='article__swiper-nav article__swiper-nav_next' id='next'></div>
        <div className='article__swiper-pagination'></div>
      </Swiper>
    </div>
  );
};

export default ArticleSwiper;
