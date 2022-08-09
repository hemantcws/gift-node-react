import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { Link } from "react-router-dom";

const ImageSlider = ({images}) => {

const settings = {
	infinite: true,
	dots: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

  ]
};
return (
  <>
  <div className="imgslider home">
    <Slider {...settings}>
    {images.map((item) => (
      <div key={item.id}>
	  <Link to="#">
      <img src={item.src} alt={item.alt} />
      </Link>
      </div>
    ))}
    </Slider>
  </div>
    </>
)
}
export default ImageSlider;
