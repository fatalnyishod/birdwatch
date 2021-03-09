import Head from 'next/head';
import Banner from '../components/banner';
// import Filter from "../components/filter";
import RoundUp from '../components/round-up';
// import Foundation from "../components/foundation";
// import Team from "../components/team";
import Subscription from '../components/subscription';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ищем и смотрим птиц</title>
        <meta
          name='description'
          content='Видели людей, которые бегают по парку с биноклями и фотоаппаратами и что-то высматривают в кроне деревьев? Это бёрдвотчеры — любители птиц. Они коллекционируют встреченные виды и помогают развивать науку.'
        />
        <meta property='og:title' content='Ищем и смотрим птиц' />
        <meta
          property='og:description'
          content='Видели людей, которые бегают по парку с биноклями и фотоаппаратами и что-то высматривают в кроне деревьев? Это бёрдвотчеры — любители птиц. Они коллекционируют встреченные виды и помогают развивать науку.'
        />
        <meta property='og:image' content='http://birdwatch.ru/images/' />
        <meta property='og:url' content='http://birdwatch.ru' />
      </Head>

      <Banner />

      {/* <Filter /> */}

      <RoundUp />

      {/* <Foundation /> */}

      {/* <Team /> */}

      <Subscription />
    </>
  );
}
