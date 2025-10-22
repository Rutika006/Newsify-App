import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles || []);
      setTotalResults(parsedData.totalResults || 0);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setArticles([]);
      setLoading(false);
      props.setProgress(100);
    }
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [page]);

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <div className={`container my-3 ${props.darkMode ? 'text-white bg-dark' : ''}`}>
      <h1 className="text-center" style={{ margin: '90px 0px 35px 0px' }}>
        Newsify - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading && articles?.map((ele) => (
          <div className="col-md-4" key={ele.url}>
            <NewsItem
              title={ele.title ? ele.title : ""}
              description={ele.description ? ele.description : ""}
              imageUrl={ele.urlToImage}
              newsUrl={ele.url}
              date={ele.publishedAt}
            />
          </div>
        ))}
      </div>
      <div className="container d-flex justify-content-between my-3">
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>
          &larr; Previous
        </button>
        <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: 'us',
  pageSize: 6,
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
  darkMode: PropTypes.bool
};

export default News;
