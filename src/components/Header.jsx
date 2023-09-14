import React from "react";
import "../css/Header.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import img1 from "../images/imbd.png";
import img2 from "../images/fruit.png";

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="header">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="text-box">
        <h1>
          John Wick 3: <br />
          Parabellum
        </h1>
        <div className="ratings">
          <span>
            <img src={img1} alt="" />
            <small>92.0/100</small>
          </span>
          <span>
            <img src={img2} alt="" />
            <small>97%</small>
          </span>
        </div>
        <p>
          After gunning down a member of the High Table, John Wick
          finds himself stripped of the organization's protective
          services.  Now stuck with a $14 m bounty in his head, Wick
          must fight his way throught the streets of New York, as he becomes
          target of the world's most ruthless killers!
        </p>
        <Link to="" style={{ width: "150px" }}>
          <AiFillPlayCircle />
          <span>WATCH TRAILER</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
