import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Toolbar from "./Toolbar";
import News from "./Pages/News";
import Raceresults from "./Pages/Raceresults";
import Errorpage from "./Pages/Errorpage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="container"><Toolbar /></div> */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/raceresults" element={<Raceresults />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
