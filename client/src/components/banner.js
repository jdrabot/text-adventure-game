import React from "react";
const imgRoot = process.env.PUBLIC_URL
  ? process.env.PUBLIC_URL
  : "https://safe-cliffs-00867.herokuapp.com/";



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
