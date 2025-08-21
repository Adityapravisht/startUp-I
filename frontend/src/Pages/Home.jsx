import Navbar from "../components/navigation/Navbar";
import MyNewCarousel from "../components/Functionalities/MyCrousel";
import BothCards from "../components/Layout/bothCards";
import CommentCarousel from "../components/functionalities/CommentCrousel";
import ImageSlider from "../components/Functionalities/ImageSlider";
import HomeTop from "../components/Atoms/HomeTop";
import TrendingNews from "../components/Atoms/TrendingNew";
import Suggestions from "../components/Atoms/Suggestions";
import Menu from "../components/Atoms/Menu";

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
