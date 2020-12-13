import React from 'react';
import Banner from './banner/banner.jsx';
import Filter from './filter/filter.jsx';
import RoundUp from './round-up/round-up.jsx';
import Foundation from './foundation/foundation.jsx';
import Team from './team/team.jsx';

const MainPage = () => {
	return (
		<>
			<Banner/>

			<Filter/>

			<RoundUp/>

			<Foundation/>

			<Team/>

			<span>&nbsp;</span>
		</>
	);
};

export default MainPage;
