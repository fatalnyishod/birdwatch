import React from 'react';
import Banner from './banner/banner.jsx';
import Filter from './filter/filter.jsx';
import RoundUp from './round-up/round-up.jsx';

const MainPage = () => {
	return (
		<>
			<Banner/>

			<Filter/>

			<RoundUp/>

			<span>&nbsp;</span>
		</>
	);
};

export default MainPage;
