const ArticleImg = ({img, sign}) => {
  return (
    <div className='article__img-wrap'>
      <img src={img} alt='' className='article__img' />
      {sign ? <span className='text text_sign'>{sign}</span> : null}
    </div>
  );
};

export default ArticleImg;
