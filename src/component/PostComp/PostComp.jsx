import React, { Component } from "react";
import "./PostComp.css";

const PostComp = (props) => {
  return (
    <div>
      <div className="post">
        <div className="img-thumb">
          <img src="https://placeimg.com/200/150/tech" alt="post" />
        </div>
        <div className="content">
          <p className="title" onClick={() => props.goDetail(props.data.id)} >{props.data.title}</p>
          <p className="desc">{props.data.body}</p>
          <button className="btn-update" onClick={() => props.update(props.data)}>Update</button>
          <button className="btn-remove" onClick={() => props.remove(props.data.id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};
export default PostComp;
