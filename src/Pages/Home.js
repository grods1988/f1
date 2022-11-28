import React from "react";
import Toolbar from "../Toolbar";
import Navbaro from "../components/Navbar";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbaro />
      <div className="container">
        <h1>
          THIS SECTION IS IN PROGRESS in the meantime visit the other sections
        </h1>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
