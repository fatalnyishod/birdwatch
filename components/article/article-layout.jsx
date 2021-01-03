import ArticleAuthor from "./article-author";

const ArticleLayout = ({children, author}) => {
	return (
		<div className="article">
			<div className="grid article__grid">
				<div className="article__wrap article__wrap_main">
					{children}
				</div>

				{
					author ?
						<div className="article__wrap article__wrap_side">
							<ArticleAuthor
								name = {author.name}
								desc = {author.desc}
								photo = {author.photo}
							/>
						</div>
						:
						null
				}
			</div>
		</div>
	);
};

export default ArticleLayout;
