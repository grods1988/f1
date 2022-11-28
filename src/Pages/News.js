import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import newsData from "../newsData";

import {
  Button,
  Card,
  Row,
  Col,
  ListGroup,
  Container,
  Alert,
} from "react-bootstrap";

console.log(newsData[0].articles);

function News() {
  const [news, setNews] = useState(newsData[0].articles);
  const [readMore, setReadMore] = useState(false);

  //   remove articles
  const removeArticle = (title) => {
    const newArticles = news.filter((article) => article.title !== title);
    setNews(newArticles);
  };

  //TODO:Fetch data:
  const fetchResults = async (year) => {
    try {
      const { data } = await axios(
        `https://newsapi.org/v2/everything?q=formula1&language=en&from=2022-10-29&sortBy=publishedAt&pageSize=30&excludeDomains=yahoo.com,Biztoc.com,cryptodaily.co.uk,globenewswire.com&apiKey=706e3f9a85834c848a24dd1ec7f8159f`
      );
      const newsData = data.articles;
      setNews(newsData);
      console.log(newsData);
    } catch (err) {
      console.log(err.response);
    }
  };
  //   useEffect(() => {
  //     fetchResults();
  //   }, []);

  if (news.length < 1) {
    return (
      <div className="container">
        <Alert variant="danger display-2">
          No more Articles left to show Please Refresh the page
        </Alert>
      </div>
    );
  }
  return (
    <div className="container d-flex justify-content-center align-items-end flex-wrap">
      {news.map((item) => {
        const { author, content, description, source, title, url, urlToImage } =
          item;
        return (
          <div className="row mx-3 ">
            <div className="col gy-2">
              <div className="card" style={{ width: "19rem" }}>
                <div className="inner">
                  <img src={urlToImage} className="card-img-top" alt={title} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <a href={url} target="_blank" className="btn color-1">
                    Read more
                  </a>
                  <button
                    onClick={() => removeArticle(title)}
                    className="btn btn-secondary btn mx-1 "
                  >
                    Remove Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default News;
