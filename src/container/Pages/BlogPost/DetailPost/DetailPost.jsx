import axios from "axios";
import React, { Component } from "react";
import "./DetailPost.css";

export default class DetailPost extends Component {
  state = {
    post: {
      title: "",
      body: "",
    },
  };

  componentDidMount = () => {
    let id = this.props.match.params.id;
    axios.get(`http://localhost:3004/post/${id}`).then((res) => {
      console.log("Result ", res);
      let post = res.data;
      this.setState({
        title: post.title,
        body: post.body,
      });
    });
  };
  render() {
    return (
      <div>
        <p>Detail Post</p>
        <hr />
        <p className="detail-title">{this.state.title}</p>
        <p className="detail-body">{this.state  .body}</p>
      </div>
    );
  }
}
