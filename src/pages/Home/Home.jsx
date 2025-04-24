import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Property from "../../components/Property/Property";
import Card from "../../components/cards/Card";

// import { cardData } from "../../components/cards/cardData";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Property />
      <div className="home-card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
