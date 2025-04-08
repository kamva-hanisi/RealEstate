import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Property from "../../components/Property/Property";
import Card from "../../components/cards/Card";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Property />
      {/* <Card /> */}
      <div className="home-cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
