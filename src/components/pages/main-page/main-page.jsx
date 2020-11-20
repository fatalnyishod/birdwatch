import React from 'react';
import Header from '../../header/header.jsx';

const MainPage = ({link}) => {
  return (
    <>
      <Header />
      <div>
        <span>this is main</span>
        <br />
        <span>
          u can go to the <a href={link}>article</a>
        </span>
      </div>
    </>
  );
};

export default MainPage;
