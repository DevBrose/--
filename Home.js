import React from "react";
import Navbar from "./Navbar";
import "./index.css";
import "./Navbarstyle.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome</h1>
      <p>I'm a freelancer front end developer</p>
      <form action="./about" class="inline">
        <button class="button">About</button>
      </form>

      <img src="/Images/Katt.jpg" alt="Katt" />
    </div>
  );
};

export default Home;
