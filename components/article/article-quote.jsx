const ArticleQuote = ({children}) => {
	return (
		<div className="article__quote">
			<p className="text text_quote">
				{children}
			</p>
		</div>
	);
};

export default ArticleQuote;
