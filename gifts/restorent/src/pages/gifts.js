import React,{useState,useEffect} from "react";
import idata from "../components/data.js";
import defaultimg from '../images/1.png';
import peo1 from '../images/1peo.jpg';
import peo2 from '../images/2peo.jpg';
import more from '../images/more.jpg';
import vik1 from '../images/Vector.png';
import vik2 from '../images/Vector2.png';
import vik3 from '../images/Vector3.png';
import { Link } from "react-router-dom";
import axios from "axios";

const Gifts = () => {
	const [itemsToDisplay, setItemsToDisplay] = useState([]);
	const [itemsToUse, setItemsToUse] = useState([]);
	const [cuisines, setCuisines] = useState([]);
	const [cuisines2, setCuisines2] = useState([]);
	const [cuisines3, setCuisines3] = useState([]);
	const [cuisines4, setCuisines4] = useState([]);
	const [price, setPrice ] = useState(250);
	useEffect( () => {
		
		axios.get('http://localhost:8080/gifts').then((res) => {
		
		var cuisines = [];
		var cuisines2 = [];
		var cuisines3 = [];
		var cuisines4 = [];
		var ItemsToDisplay = [];
		for (var i = 0; i < (res.data).length; i++) {
			ItemsToDisplay.push(res.data[i]);
			
			res.data[i]["Categories"].forEach(cuisine => {
				let c = cuisine;
				c = c.includes("'") ? c.substring(1, c.length) : c;
				if (cuisines.indexOf(c) < 0) {
					cuisines.push(c);
				}
			});
			
			res.data[i]["City"].substring(0, res.data[i]["City"].length).split(",")
			.forEach(cuisine2 => {
			  let l = cuisine2.substring(0, cuisine2.length);
			  l = l.includes("'") ? l.substring(0, l.length) : l;
				if (cuisines2.indexOf(l) < 0) {
					cuisines2.push(l);
				}
			});
			
			res.data[i]["Occasion"].substring(0, res.data[i]["Occasion"].length).split(",")
			.forEach(cuisine3 => {
			  let o = cuisine3.substring(0, cuisine3.length);
			  o = o.includes("'") ? o.substring(0, o.length) : o;
				if (cuisines3.indexOf(o) < 0) {
					cuisines3.push(o);
				}
			});
			
			res.data[i]["People"].substring(0, res.data[i]["People"].length).split(",")
			.forEach(cuisine4 => {
			  let p = cuisine4.substring(0, cuisine4.length);
			  p = p.includes("'") ? p.substring(0, p.length) : p;
				if (cuisines4.indexOf(p) < 0) {
					cuisines4.push(p);
				}
			});
		}

		setPrice(250);
		setCuisines( cuisines );
		setCuisines2( cuisines2 );
		setCuisines3( cuisines3 );
		setCuisines4( cuisines4 );
		setItemsToDisplay( ItemsToDisplay );
		setItemsToUse( ItemsToDisplay );
		console.log(idata);
		});
		
	},[]);

	const optionSelectedcat = () => {
		var e = document.getElementById("restfilter");
		var selected = e.options[e.selectedIndex].text;

		if (selected === "All")
			setItemsToDisplay(itemsToUse);
		else {
			let ItemsToDisplay = [];
			ItemsToDisplay = itemsToUse.filter(item =>
				item["Categories"].includes(selected)
			);
			setItemsToDisplay( ItemsToDisplay );
		}
	};
	
	const optionSelectedprice = (e) => {
	
		let ItemsToDisplay = [];
		const pricee = e.target.value;
		ItemsToDisplay = itemsToUse.filter(item => item["Price"] <= pricee);
		setPrice(pricee);
		setItemsToDisplay( ItemsToDisplay );
	};
  
	const optionSelectedlocation = () => {
		var e = document.getElementById("locationfilter");
		var selected = e.options[e.selectedIndex].text;
		if (selected === "All")
			setItemsToDisplay(itemsToUse);
		else {
			let ItemsToDisplay = [];
			ItemsToDisplay = itemsToUse.filter(item =>
				item["City"].toLowerCase().includes(selected.toLowerCase())
			);
			setItemsToDisplay( ItemsToDisplay );
		}
	};
	
	const optionSelectedocasn = () => {
		var e = document.getElementById("occasionfilter");
		var selected = e.options[e.selectedIndex].text;
		if (selected === "All")
			setItemsToDisplay(itemsToUse);
		else {
			let ItemsToDisplay = [];
			ItemsToDisplay = itemsToUse.filter(item =>
				item["Occasion"].toLowerCase().includes(selected.toLowerCase())
			);
			setItemsToDisplay( ItemsToDisplay );
		}
	};
	
	const optionSelectedparrd = (e) => {
		let attributeValue = e.target.getAttribute('data');
		if(attributeValue > 2)  {
			let ItemsToDisplay = [];
			ItemsToDisplay = itemsToUse.filter(item =>
				item["People"] > 2
			);
			setItemsToDisplay( ItemsToDisplay );
		}
		else {
			let ItemsToDisplay = [];
			ItemsToDisplay = itemsToUse.filter(item =>
				item["People"] == attributeValue
			);
			setItemsToDisplay( ItemsToDisplay );
		}

	};
	
return (
<div className="App listing">
	<div className="container">
		<div className="row">
			<div className="col-md-3">
				<div className="page-title"></div>
			</div>
			<div className="col-md-9">
				<div className="page-title">Gifts for all tastes</div>
			</div>
			<div className="col-md-3">
				<div className="filter-item">
					<div className="filter-lable">Category</div>
					<select id="restfilter" onChange={optionSelectedcat}>
						<option value="any">All</option>
							{cuisines.map(cuisine => {
								return <option value={cuisine}>{cuisine}</option>;
							})}
					</select>
				</div>
				<div className="filter-item">
					<div className="filter-lable">Price</div>
					<input id="pricefilter" type="range" min="0" max="250" onChange={optionSelectedprice}/> 
					
					<div id="showprice">Show up to {price}</div>
					
				</div>
				<div className="filter-item">
					<div className="filter-lable">Location</div>
					<select id="locationfilter" onChange={optionSelectedlocation}>
						<option value="any">All</option>
							{cuisines2.map(cuisine2 => {
								return <option value={cuisine2}>{cuisine2}</option>;
							})}
					</select>
				</div>
				<div className="filter-item">
					<div className="filter-lable">Occasion</div>
					<select id="occasionfilter" onChange={optionSelectedocasn}>
						<option value="any">All</option>
							{cuisines3.map(cuisine3 => {
								return <option value={cuisine3}>{cuisine3}</option>;
							})}
					</select>
				</div>
				<div className="filter-item">
					<div className="filter-lable">Participants</div>
					<span className="participent-opt" data="1" onClick={optionSelectedparrd}><img src={vik1} /> 1 person</span>
					<span className="participent-opt" data="2" onClick={optionSelectedparrd}><img src={vik2} /> 2 people</span>
					<span className="participent-opt" data="4" onClick={optionSelectedparrd}><img src={vik3} /> +2 people</span>
				</div>
			</div>
			<div className="col-md-9">
				<div className="row">
				{itemsToDisplay.map(rest => {
					let cuisines = rest["Categories"];
					return (
					<div className="col-md-4 main_list_div">
						<div className="restinfo">
							<div className="image-sec">
							<Link to={{
                                    pathname: "/single/",
                                    search: "?id="+rest["Id"],
                                  }}>
								<img src={idata[0][rest["Image"]]} className="list-img" alt="" />
								</Link>
							</div>
							<div className="content-sec">
								<div className="price-sec row">
									<div className="col-md-6 price-val">${rest["Price"]}</div>
									<div className="col-md-6 people-val">
									{rest["People"] == '1'? <img src={peo1} />:" "}
                                    {rest["People"] == '2'? <img src={peo2} />:" " }
                                    {rest["People"] > '2'? <img src={more} />:" " }
									{rest["People"]}
										{rest["People"] == '1'? " person": " people" }
									</div>
								</div>
							
								
								<span className="restname">{rest["Name"]}</span>
								<span className="restdesc">{rest["Description"].substring(0,90)}...</span>
								<div className="restcuisines" style={{display:"none"}}>
									{cuisines.map(cuisine => { let cuisineToShow = cuisine.substring(1, cuisine.length - 1);
									cuisineToShow = cuisineToShow.includes("'") ? cuisineToShow.substring(1, cuisineToShow.length) : cuisineToShow;
										return (
											<span className="cat-list">{cuisineToShow},</span>
										);
									})}
								</div>
							</div>
						</div>
					</div>
					);
				})}
				</div>
			</div>
		</div>
	</div>
</div>
  );
};
  
export default Gifts;