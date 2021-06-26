import React from "react";
// import { Redirect } from "react-router";
import bannerImage from "./images/bannerImage/banner.gif";



function Banner() {
  return (
    <div>
      <img src={bannerImage} className="banner" />
    </div>
  );
}

export default Banner;
