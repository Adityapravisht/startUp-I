import React from "react";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import MyNewCarousel from "../Components/Functionalities/MyCrousel";
import BothCards from "../Components/Layout/bothCards";
import CommentCarousel from "../Components/Functionalities/CommentCrousel";
import ImageSlider from "../Components/Functionalities/ImageSlider";
import Upload from "../Components/Atoms/Upload";
import BookViewer from "../Components/Functionalities/BookViewer";

const Home = () => {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Navbar />
      {/* <CommentCarousel />
      <BothCards />
      <MyNewCarousel />
      <ImageSlider /> */}
      <Upload/>
      {/* <BookViewer/> */}
      <div style={{ marginTop: "10rem" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
