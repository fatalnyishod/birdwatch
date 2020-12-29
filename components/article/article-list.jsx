const ArticleList = ({list}) => {
	const items = [];

	list.forEach((item) => {
		items.push(<li className="ul__li ul__li_light" dangerouslySetInnerHTML={{__html: item}} />);
	});

	return (
		<ul className="ul">
			{items}
		</ul>
	);
};

export default ArticleList;