const ArticleAuthor = ({name, desc, photo}) => {
	return (
		<div className="article__author">
			<img src={photo} alt="Автор" className="article__author-img"/>
			<p className="text">{name}</p>
			{/* <p className="text text_light" dangerouslySetInnerHTML={{ __html: desc}}></p> */}
			{/* socials */}
			<div className="article__author-line" />
			<p className="text">«Зачем и почему?»</p>
		</div>
	)
};

export default ArticleAuthor;
