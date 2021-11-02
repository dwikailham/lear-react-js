import React, { Component } from "react";
import PostComp from "../../../component/PostComp/PostComp";
import "./BlogPost.css";
import axios from "axios";
import "../../../../node_modules/antd/dist/antd.css";
import { Input } from "antd";

const { TextArea } = Input;

export default class BlogPost extends Component {
  state = {
    post: [],
    formBlogpost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false,
    value: "",
  };

  getPostAPI() {
    axios
      .get("http://localhost:3004/post?_sort=id&_order=desc")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  }

  postDataToAPI = () => {
    axios.post("http://localhost:3004/post", this.state.formBlogpost).then(
      (res) => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogpost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      },
      (err) => {
        console.log("error ", err);
      }
    );
  };

  componentDidMount() {
    this.getPostAPI();
  }

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/post/${data}`).then((result) => {
      this.getPostAPI();
    });
  };

  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formBlogpost: data,
      isUpdate: true,
    });
  };

  putDataToAPI = () => {
    axios
      .put(
        `http://localhost:3004/post/${this.state.formBlogpost.id}`,
        this.state.formBlogpost
      )
      .then((res) => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogpost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      });
  };

  handleFormChange = (event) => {
    let formBlogpostNew = { ...this.state.formBlogpost };
    let timeStamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogpostNew["id"] = timeStamp;
    }
    formBlogpostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogpost: formBlogpostNew,
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  handleDetail = (id) => {
    this.props.history.push(`/detail-post/${id}`);
  };

  render() {
    return (
      <div>
        <p>Halaman Blogpost</p>
        <hr />
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>

          <Input
            placeholder="Add a Title"
            allowClear
            value={this.state.formBlogpost.title}
            onChange={this.handleFormChange}
            name="title"
            id="title"
            className="input-title"
          />

          <label htmlFor="body">Blog Content</label>
          <TextArea
            placeholder="Add a Body Content"
            allowClear
            cols={30}
            rows={10}
            value={this.state.formBlogpost.body}
            onChange={this.handleFormChange}
            name="body"
            id="body"
          />
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        {this.state.post.map((post) => {
          return (
            <PostComp
              key={post.id}
              data={post}
              remove={this.handleRemove}
              update={this.handleUpdate}
              goDetail={this.handleDetail}
            />
          );
        })}
      </div>
    );
  }
}
