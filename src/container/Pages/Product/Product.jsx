import React, { Component } from "react";
import { Fragment } from "react";
import { BsCart } from "react-icons/bs";
import "./Product.css";
import ProductCardComp from "./ProductCardComp/ProductCardComp";

export default class Product extends Component {
  state = {
    order: 0,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <p>Halaman Product</p>
        <hr />
        <div className="header">
          <div className="logo">
            <p>Dwika</p>
          </div>
          <div className="troley">
            <BsCart className="cart" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <ProductCardComp
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}
