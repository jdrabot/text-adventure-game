import React from "react";

const styles = {
  bannerStyle: {
    background: "black",
    height: "60px",
    color: "rgb(12, 177, 26)",
  },
};

function Banner() {
  return (
    <div style={styles.bannerStyle}>
      <h1>Castle of Madness</h1>
    </div>
  );
}

export default Banner;
