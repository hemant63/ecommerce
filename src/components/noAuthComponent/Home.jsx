import React from "react";
import { useNavigate } from "react-router-dom";
// import Body from "../authComponent/Body";
import Cards from "../noAuthComponent/Card"
import Crousel from "./Crousel";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Crousel />
      <div className="description">
        <h2>Deals Of The Day</h2>
        
      </div>
    </div>
  );
};

export default Home;
