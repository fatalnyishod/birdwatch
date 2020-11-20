import React from 'react';

const Header = ({eventsLink, allArticlesLink, aboutLink}) => {
  return (
    <div className='header'>
      <div className='header__logo' />

      <div className='header__nav'>
        <a href={eventsLink} className='header__nav-item'>
          Мероприятия
        </a>
        <a href={allArticlesLink} className='header__nav-item'>
          Все статьи
        </a>
        <a href={aboutLink} className='header__nav-item'>
          Команда
        </a>
      </div>
    </div>
  );
};

export default Header;
