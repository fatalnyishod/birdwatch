const ArticleAuthor = ({name, desc, photo}) => {
  return (
    <div className='article__author'>
      <img src={photo} alt='Автор' className='article__author-img' />
      <p className='text'>{name}</p>

      <div className='article__author-line' />
      <p className='text'>{desc}</p>
    </div>
  );
};

export default ArticleAuthor;
