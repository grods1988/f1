import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Testapi() {
  const [input, setInput] = useState("");
  const [ranking, setRanking] = useState([]);

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
      // console.log(data);
      setRanking(data);
    } catch (err) {
      console.log(err.response);
    }
  };

  // useEffect(() => {
  //   fetchResults();
  // }, []);

  // F! NEWS FETCHING
  // const url = "https://f1-news.p.rapidapi.com/news";
  // const options2 = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "1e2e850ac9msh7c289f39ee50a35p1ca0eajsn229da1eaba8e",
  //     "X-RapidAPI-Host": "f1-news.p.rapidapi.com",
  //   },
  // };

  // const fetch = async () => {
  //   try {
  //     const { data } = await axios(url, options2);
  //     console.log(data);
  //     setnews(data);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  // fetch();

  //   https://newsapi.org/v2/everything?q=formula1&language=en&from=2022-10-26&sortBy=publishedAt&pageSize=30&excludeDomains=yahoo.com,Biztoc.com,cryptodaily.co.uk,globenewswire.com&apiKey=706e3f9a85834c848a24dd1ec7f8159f

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchResults(input);
  };

  return (
    <div className="main-app">
      <div className="App-header">
        <header className="App">
          <div>
            <h1 className="heading">
              {" "}
              <span className="span1">Formula </span>
              <span className="span2">one</span> <br></br>Race Results
            </h1>
            <p className="howto">
              Please add the Year you want to check the winners of each Grand
              Prix held that year from the first year '1950'
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="form">
              <label className="race-count" htmlFor="Search">
                Search Season year{" "}
              </label>
              <input
                className="form-input"
                type="text"
                name="search"
                id="search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="1995"
              />
              <button className="btn" type="submit" onClick={handleSubmit}>
                Search
              </button>
            </form>
          </div>
        </header>
        <main className="results-container">
          <h3 className="race-count">Total Races Held:{ranking.length}</h3>
          {ranking.map((result, index) => {
            const { grandPrix, date, driver, team, laps } = result;
            return (
              <div key={index} className="results">
                <h4>🖲️Grand Prix: {grandPrix}</h4>
                <p>📅date: {date}</p>
                <p className="winner">🏁Winner: {driver}</p>
                <a href="" className="team">
                  🧑‍🤝‍🧑Team: {team}
                </a>
                <p>💯Total laps : {laps}</p>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default Testapi;
