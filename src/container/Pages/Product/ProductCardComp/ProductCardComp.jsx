import React, { Component } from "react";
import DesignR32 from "../../../../assets/img/img.jpg";
import "../../Product/Product.css";
// import "../../Product.css";

export default class ProductCardComp extends Component {
  state = {
    order: 0,
  };

  handleMin = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };
  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src={DesignR32} alt="r32" />
        </div>

        <p className="product-title">Desgin Vector R32 SKYLINE</p>
        <p className="product-price">RP 500000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMin}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}
