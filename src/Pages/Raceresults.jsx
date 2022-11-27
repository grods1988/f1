import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import resultsData from "../resultsData";
import { Form, Container, Button, Card } from "react-bootstrap";

function Raceresults() {
  const [year, setYear] = useState("");
  const [ranking, setRanking] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1e2e850ac9msh7c289f39ee50a35p1ca0eajsn229da1eaba8e",
      "X-RapidAPI-Host": "formula-1-all-time-statistics.p.rapidapi.com",
    },
  };
  // fetch
  const fetchResults = async (year) => {
    try {
      const { data } = await axios(
        `https://formula-1-all-time-statistics.p.rapidapi.com/${year}/races/all`,
        options
      );
      //   console.log(data);
      setRanking(data);
    } catch (err) {
      console.log(err.response);
    }
  };
  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");
    fetchResults(year);
    setYear("");
  };
  if ({ year } < 1950) {
    return (
      <div className="alert alert-info">
        {" "}
        <h2>Invalid Value</h2>
      </div>
    );
  }
  return (
    <>
      <section>
        <div className="container my-3 ">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="search"
              name="search"
              className="w-50 p-2 rounded border-2 shadow-lg text-uppercase  "
              placeholder="Enter any Year (1950-Current) "
              //   super important to connect to state.
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />

            <div className="row my-3">
              <div className="col ">
                <Button variant="danger" size="lg" onClick={handleSubmit}>
                  Search Race Winners
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* // Loading the results */}

      <div className="container my-3">
        <div className="row">
          {ranking.map((rank, index) => {
            const { grandPrix, date, driver, team, laps, raceTime } = rank;

            return (
              <div className=" col-md-3  mb-3 shadow-lg " key={index}>
                <div className="card  border border-2 border- rounded-2 h-100">
                  <div className="card-body ">
                    <h5 className="card-title bg-danger text-light rounded p-1 text-center">
                      {index + 1}:{grandPrix}
                    </h5>
                    <p className="card-text m-0">{date}</p>
                    <p className="lead m-0">{laps} Laps</p>
                    Total RaceTime: {raceTime}
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item ">
                      <h4>{driver}</h4>
                    </li>
                    <li className="list-group-item">
                      <h6 className="m-0">{team}</h6>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Raceresults;

// TODO:  https://newsapi.org/v2/everything?q=formula1&language=en&from=2022-10-26&sortBy=publishedAt&pageSize=30&excludeDomains=yahoo.com,Biztoc.com,cryptodaily.co.uk,globenewswire.com&apiKey=706e3f9a85834c848a24dd1ec7f8159f
