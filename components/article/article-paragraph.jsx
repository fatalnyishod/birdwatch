const ArticleParagraph = ({children, bold = false}) => {
  return <p className={bold ? 'text text_b' : 'text'}>{children}</p>;
};

export default ArticleParagraph;
