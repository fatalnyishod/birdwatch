const ArticleAuthor = ({name, desc, photo}) => {
	return (
		<div className="article__author">
			<img src={photo} alt="Автор" className="article__author-img"/>
			<h3 className="title title_h3">{name}</h3>
			<p className="text text_light">{desc}</p>
		</div>
	)
};

export default ArticleAuthor;
