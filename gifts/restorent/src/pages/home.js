import React from "react";
import banner2 from '../images/banner2.jpg';
import images from "../components/images.js";
import ImageSlider from "../components/imageSlider.js";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App home">
		<div className="container">
			<div className="banner">
				<Link to="#">
					<img src={banner2} className="home-banner" alt="banner" />
				</Link>
			</div>
			<ImageSlider images={images}/>
		</div>
    </div>
  );
};
  
export default Home;