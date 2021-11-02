import React from "react";
import "./YoutubeComp.css";
import img from "../../assets/img/img.jpg";

const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumbnail">
        <img src={img} alt="thumbnail" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.judul}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: "10.00",
  judul: "How to tracing",
  desc: "1x Baru Saja",
};

export default YoutubeComp;
