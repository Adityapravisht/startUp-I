import React from "react";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import MyNewCarousel from "../Components/Functionalities/MyCrousel";
import BothCards from "../Components/Layout/bothCards";
import CommentCarousel from "../Components/Functionalities/CommentCrousel";
import ImageSlider from "../Components/Functionalities/ImageSlider";

const Home = () => {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Navbar />
      <CommentCarousel />
      <BothCards />
      <MyNewCarousel />
      <ImageSlider />
      <div style={{ marginTop: "10rem" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
