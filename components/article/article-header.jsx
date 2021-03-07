import Header from '../header';

const ArticleHeader = ({text, coverClassName}) => {
  return (
    <div className={'article__header ' + coverClassName}>
      <Header isBanner={true} />
      <div className='grid'>
        <h1 className='title title_h1 title_white'>{text}</h1>
      </div>
    </div>
  );
};

export default ArticleHeader;
