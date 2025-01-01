import Navbar from "../navbar/Navbar";
import MainSlider2 from "../slider/MainSlider2";
import SocialIcons from "../../utils/SocialIcons";
import bgCircle from "../../assets/backgroundCircles.png";
import '../../App.css';

const Home = () => {
  return (
    <section className="app-container font-Montserrat">
      <div className="bg-container" />
      <Navbar />

      <div className="mt-[100px] mb-[140px] ml-[250px] mr-[160px] h-[780px] absolute z-[10]">
        <MainSlider2 />
      </div>

      <div className="absolute left-[150px] bottom-[80px]">
        <SocialIcons />
      </div>

      <img
        src={bgCircle}
        alt=""
        className="absolute bottom-[40px] right-[70px] w-[60%] z-[0]"
      />
    </section>
  );
};

export default Home;
