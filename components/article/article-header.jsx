const ArticleHeader = ({text}) => {
	return (
		<div className="grid">
			<div className="article__header">
				<h1 className="title title_h1 title_white">{text}</h1>
			</div>
		</div>
	);
};

export default ArticleHeader;
