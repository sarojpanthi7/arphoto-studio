import React from "react";
import { backgroundimage } from "../../assets/index";

const Body = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="mx-20 h-[60vh] mt-4 px-20"
    ></div>
  );
};

export default Body;
