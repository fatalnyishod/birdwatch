import Layout from "../components/layout";
import Banner from "../components/banner";
import Filter from "../components/filter";
import RoundUp from "../components/round-up";
import Foundation from "../components/foundation";
import Team from "../components/team";
import Subscription from "../components/subscription";

export default function Home() {
	return (
		<Layout>
			<Banner/>

			<Filter/>

			<RoundUp/>

			<Foundation/>

			<Team/>

			<Subscription/>
		</Layout>
	);
}
