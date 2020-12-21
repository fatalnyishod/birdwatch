import Head from "next/head";
import Layout from "../../components/layout";

export default function Blog() {
	return (
		<>
			<Head>
				<title>Бёрдвотчинг — Блог</title>
				<meta name="description" content="Бёрдвотчинг — Блог."/>
				<meta property="og:title" content="Бёрдвотчинг — Блог"/>
				<meta property="og:description" content="Бёрдвотчинг — Блог."/>
				<meta property="og:image" content="http://birdwatch.ru/images/"/>
				<meta property="og:url" content="http://birdwatch.ru/blog"/>
			</Head>

			<Layout>
			</Layout>
		</>
	);
}
