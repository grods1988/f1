import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import bg1 from "./image/bg1.jpg";
import bg2 from "./image/bg2.jpg";
import bg3 from "./image/bg3.jpg";
import bg4 from "./image/bg4.jpg";
import bg5 from "./image/bg5.jpg";
import bg6 from "./image/bg6.jpg";

function Testapi() {
  const [input, setInput] = useState("");
  const [ranking, setRanking] = useState([]);
  const [image, setimage] = useState({ bg1 });

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
  // --

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchResults(input);
  };

  // const fetchImg = async () => {
  //   try {
  //     const data = await axios(
  //       "https://source.unsplash.com/collection/1445529"
  //     );
  //     console.log(data);
  //     setimage(data);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };
  // fetchImg();

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
