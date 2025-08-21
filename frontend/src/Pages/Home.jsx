import React from "react";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import MyNewCarousel from "../Components/Functionalities/MyCrousel";
import BothCards from "../Components/Layout/bothCards";
import CommentCarousel from "../Components/Functionalities/CommentCrousel";
import ImageSlider from "../Components/Functionalities/ImageSlider";
import Upload from "../Components/Atoms/Upload";
import BookViewer from "../Components/Functionalities/BookViewer";
import HomeTop from "../Components/Atoms/HomeTop";
import TrendingNews from "../Components/Atoms/TrendingNew";
import Suggestions from "../Components/Atoms/Suggestions";
import Menu from "../Components/Atoms/Menu";
import UsersList from "./UsersList";

const Home = () => {
  return (
    <div style={{ height: "100vh", position: "relative",backgroundColor:'white',color:'gray' }}>
      <Navbar />
      <HomeTop/>
      <TrendingNews/>
      <CommentCarousel />
      <BothCards />
      <MyNewCarousel />
      <Suggestions/>

      <ImageSlider />


      <Menu/>

      {/* <UsersList/> */}

      
      {/* <Upload/> */}
      {/* <BookViewer/> */}
      {/* <div style={{ marginTop: "10rem" }}>
        <Footer />

      </div> */}
    </div>
  );
};

export default Home;
