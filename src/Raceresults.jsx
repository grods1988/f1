import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import resultsData from "./resultsData";
import { Form, Container, Button, Card } from "react-bootstrap";

function Raceresults() {
  const [input, setInput] = useState("");
  const [ranking, setRanking] = useState(resultsData);

  console.log(ranking);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1e2e850ac9msh7c289f39ee50a35p1ca0eajsn229da1eaba8e",
      "X-RapidAPI-Host": "formula-1-all-time-statistics.p.rapidapi.com",
    },
  };

  const fetchResults = async (year) => {
    try {
      const { data } = await axios(
        `https://formula-1-all-time-statistics.p.rapidapi.com/${year}/races/all`,
        options
      );
      console.log(data);
      //   setRanking(data);
    } catch (err) {
      console.log(err.response);
    }
  };

  // TODO:  https://newsapi.org/v2/everything?q=formula1&language=en&from=2022-10-26&sortBy=publishedAt&pageSize=30&excludeDomains=yahoo.com,Biztoc.com,cryptodaily.co.uk,globenewswire.com&apiKey=706e3f9a85834c848a24dd1ec7f8159f

  //  FIXME: Handlers
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     fetchResults(input);
  //   };
  //   onSubmit = { handleSubmit };

  return (
    <section>
      <Container>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Enter the year to know Race winners eg: 1988"
          name="search"
          id="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="d-grid gap-2">
          <Button variant="danger" size="lg">
            Search Race Winners
          </Button>
        </div>
      </Container>

      <Container className="result-cards  card-group">
        <div className="d-flex m-2 shadow-lg p-3 mb-5 bg-body rounded">
          <Card
            bg="light"
            text="dark"
            // style={{ width: "100%" }}
            className="d-flex  flex-row mb-3 justify-content-between flex-wrap  shadow-lg "
          >
            {ranking.map((winner, index) => {
              const { driver, grandPrix, date, laps, team, raceTime } = winner;
              console.log(driver);
              return (
                <article
                  className="race-card m-2 border
                    "
                  key={index}
                >
                  <Card.Header className="bg-dark text-info ">
                    {index + 1}: {grandPrix}
                  </Card.Header>
                  <Card.Body className="bg-light text-dark">
                    <Card.Title> {driver} </Card.Title>
                    <Card.Title> {team} </Card.Title>
                    <Card.Title>
                      <p>Date: {date}</p>
                      <p>Total Laps: {laps}</p>
                      <p>Race Time: {raceTime}</p>
                    </Card.Title>
                  </Card.Body>
                </article>
              );
            })}
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default Raceresults;
