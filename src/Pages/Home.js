import React from "react";
import Toolbar from "../Toolbar";
import Navbaro from "../components/Navbar";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbaro />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
