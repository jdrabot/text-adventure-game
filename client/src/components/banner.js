import React from "react";
const imgRoot = process.env.PUBLIC_URL
  ? process.env.PUBLIC_URL
  : "http://localhost:3000";



function Banner() {
  return (
    <div>
      <img
        src={`${imgRoot}/images/bannerImage/banner.gif`}
        className="banner"
      />
    </div>
  );
}

export default Banner;
