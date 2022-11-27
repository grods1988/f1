import React from "react";
import { useEffect, useState } from "react";
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

function News() {
  const [news, setNews] = useState(newsData[0].articles);
  const [readMore, setReadMore] = useState(false);

  //   remove articles
  const removeArticle = (title) => {
    const newArticles = news.filter((article) => article.title !== title);
    setNews(newArticles);
  };

  //TODO:Fetch data:

  if (news.length < 1) {
    return (
      <Container>
        <Alert variant="danger">
          No more Articles left to show Please Refresh the page
        </Alert>
      </Container>
    );
  }
  return (
    <section>
      <Container className="container-addon">
        {news.map((item, index) => {
          const {
            source,
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
          } = item;

          return (
            <Col key={index}>
              <Card style={{ width: "18rem" }} className="card-addon">
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    FIXME:
                    {readMore
                      ? description
                      : `${description.substring(0, 100)}`}
                    ...
                    <button
                      className="readmore"
                      onClick={() => setReadMore(!readMore)}
                    >
                      {readMore ? "Show Less" : "...Read more"}
                    </button>
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <h6>Source: {source.name}</h6>
                    Author: {author}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Published on: {publishedAt.toString().substring(0, 10)}
                  </ListGroup.Item>
                  {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                </ListGroup>
                <Card.Body>
                  <Button className="button-addon" href={url} target="_blank">
                    Visit Source
                  </Button>
                  <Button
                    onClick={() => removeArticle(title)}
                    className="button-addon "
                    variant="danger"
                  >
                    Remove Article
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Container>
    </section>
  );
}

export default News;
