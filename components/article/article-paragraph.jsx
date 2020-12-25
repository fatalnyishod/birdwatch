import ArticleHeader from "./article-header";

const ArticleParagraph = ({children}) => {
	return (
		<p className="text text_light">
			{children}
		</p>
	);
};

export default ArticleParagraph;
