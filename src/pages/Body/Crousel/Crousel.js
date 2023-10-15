import React, { useState } from "react";
import Slider from "react-slick";
import Img1 from "../../../assets/imgs/HTML.jpg";
import Img2 from "../../../assets/imgs/CSS.jpg";
import Img3 from "../../../assets/imgs/JS.jpg";
import Img4 from "../../../assets/imgs/REACT.jpg";
import Img5 from "../../../assets/imgs/HCJ.jpg";

export default function SkillSlider() {
  const [state, setState] = useState({
    slideIndex: 0,
    updateCount: 0,
  });
  var settings = {
    dots: true,
    infinite: true,
    // fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    afterChange: () =>
      setState((state) => ({ updateCount: state.updateCount + 1 })),
    beforeChange: (current, next) => setState({ slideIndex: next }),
  };
  return (
    <div style={{ marginLeft: "40px" }} className=" ">
      <Slider {...settings}>
        <div className="text-center">
          <img src={Img1} alt="Image 1" className="w-10 h-12" />
        </div>
        <div>
          <img src={Img2} alt="Image 1" className="w-10 h-12" />
        </div>
        <div>
          <img src={Img3} alt="Image 1" className="w-10 h-12" />
        </div>
        <div>
          <img src={Img4} alt="Image 1" className="w-10 h-12" />
        </div>
        <div>
          <img src={Img5} alt="Image 1" className="w-10 h-12" />
        </div>
      </Slider>
    </div>
  );
}
