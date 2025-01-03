import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import image1 from "../../assets/apex s1.png";
import image2 from "../../assets/bata.png";
import image3 from "../../assets/lotto.png";


import "./MainSlider.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const MainSlider2 = () => {
  const datas = [
    {
      img: image1,
      classStrock: "apex-strock",
      classFill: "apex-text",
    },
    {
      img: image2,
      classStrock: "bata-strock",
      classFill: "bata-text",
    },
    {
      img: image3,
      classStrock: "lotto-strock",
      classFill: "lotto-text",
    },
  ];

  return (
    <Carousel
      showThumbs={true}
      swipeable={true}
      autoPlay={true}
      infiniteLoop={true}
      fadeIn={true}
      showStatus={false}
      useKeyboardArrows={true}
    >
      {datas.map((data, i) => (
        <div key={i}>
          <img src={data.img} alt="Slide 1" className="z-[10]" />
          <div className={data.classFill}></div>
          <div className={data.classStrock}></div>
          <div className="flex absolute top-[61.5%] right-[180px] text-xl gap-1 text-[#b93f3f]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MainSlider2;
