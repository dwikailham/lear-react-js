import React, { Component, Fragment } from "react";
import BlogPost from "../Pages/BlogPost/BlogPost";
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import Product from "../Pages/Product/Product";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Home.css";
import YoutubeCompPage from "../Pages/YoutubeComp/YoutubeComp";
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";

export class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="navigation">
            <Link to="/">Blog Post</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">Lifecycle</Link>
            <Link to="/youtubecomp">Youtube</Link>
          </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:id" component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycleComp} />
          <Route path="/youtubecomp" component={YoutubeCompPage} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Home;
