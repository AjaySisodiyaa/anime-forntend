import React from "react";
import lodingIcon from "../../assets/loading.svg";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <img style={{ width: "100px" }} src={lodingIcon} alt="loding..." />
    </div>
  );
};

export default Loading;
