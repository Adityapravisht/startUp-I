
import MyNewCarousel from "../components/functionalities/MyCrousel";
import BothCards from "../components/layout/bothCards";
import CommentCarousel from "../components/functionalities/CommentCrousel";
import ImageSlider from "../components/functionalities/ImageSlider";
import BookViewer from "../components/functionalities/BookViewer";
import TrendingNews from "../components/Atoms/TrendingNew";
import Suggestions from "../components/Atoms/Suggestions";
import Menu from "../components/Atoms/Menu";
import { FooterBg } from "../components/navigation/FooterBg";

const Home = () => {
  return (
    <div>
      <CommentCarousel />
      <BothCards />
      <MyNewCarousel />
      <ImageSlider />
      <BookViewer />
      <TrendingNews/>
    
      <Menu/>
     <Suggestions/>
      <FooterBg />

    </div>
  );
};

export default Home;
