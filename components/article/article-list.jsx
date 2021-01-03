const ArticleList = ({list}) => {
	const items = [];

	list.forEach((item, i) => {
		items.push(<li className="ul__li ul__li_light" dangerouslySetInnerHTML={{__html: item}} key={i}/>);
	});

	return (
		<ul className="ul">
			{items}
		</ul>
	);
};

export default ArticleList;