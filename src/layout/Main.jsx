import React from "react";
import Header from "../components/Header/Header.jsx";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="bg-cyan-50">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
