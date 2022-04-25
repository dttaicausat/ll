import React, { Component } from "react";
import { connect } from "react-redux";
import ItemInCart from "./itemInCart";
import { add } from "../redux/Action";
import EmptyCart from "./EmptyCart";
import TableHead from "./TableHead";
import Purchase from "./purchase";
class CartPresent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div className="cart">
        <div className="cart-container">
          {" "}
          {this.props.inCartList.length === 0 && <EmptyCart />}
          {this.props.inCartList.length !== 0 && <TableHead />}{" "}
          <div className="cart-content">
            {" "}
            {this.props.inCartList.map((item) => (
              <ItemInCart item={item} key={item.id} />
            ))}
          </div>
        </div>

        {this.props.inCartList.length !== 0 && <Purchase />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { inCartList: state.itemReducer.OnProcessing };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddToCart: (message) => {
      dispatch(add(message));
    },
  };
};

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartPresent);
export default Cart;
