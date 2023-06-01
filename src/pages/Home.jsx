import React from "react";
import NavBar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import HomeSlider from "../components/Home/HomeSlider";
import HomeAbout from "../components/Home/HomeAbout";
import ItemsSlider from "../components/Home/ItemsSlider";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeSlider />
      <HomeAbout />
      <ItemsSlider />
    </>
  );
};

export default Home;
