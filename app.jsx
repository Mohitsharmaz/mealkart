import React from "react";
import ReactDOM from "react-dom/client";
import {data} from './resList.js'

console.log("data is",data)
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <h1>MealKart</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const ResCard = ({data}) => {
    console.log("props", data)
    let {name, cusine, areaName, avgRatingString,cloudinaryImageId} = data
  return (
    <div className="res-card">
      <div className="img-container">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
      </div>
      <div className="res-content">
        <p className="res-name">{name}</p>
        <p className="res-cusine">{cusine}</p>
        <h6 className="res-rating">{areaName}</h6>
        <h6 className="res-rating"> &#9733; {avgRatingString}</h6>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {/* <ResCard resName="KFC" cusine="Biryani , North Indian, Asian" rating="3.9" />
        <ResCard resName="Cold Monster" cusine="Cold Coffee ,Sanwhich, pizza" rating = "4.5"/> */}
        {
            data.map((item,index)=>{
                return <ResCard key={index} data={item.info}/>
            })
        }
        <ResCard data={data[0].info}/>
        {/* <ResCard resName="KFC" cusine="Biryani , North Indian, Asian" /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
