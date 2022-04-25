import React, { Component } from "react";
import {  Link } from "react-router-dom";
import { connect } from "react-redux";
import {BsSearch} from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { FcHome } from "react-icons/fc";
import {BsBellFill} from "react-icons/bs";
class NavPresent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      love: "true",
    };
  }

  render() {
    return (
      <div >
     <div className="nav-container">
        <ul className="nav">
          <li className="home-icon">
            <Link to="/home">
              <FcHome />   Delwyn shop
            </Link>
          </li>
          <li>
          <input type="search"></input>
          <button> Search</button>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link
              className={
                "nav-link  text-" +
                (this.props.isChange ? "warning" : "dark")
              }
              to="/cart"
            >
              <TiShoppingCart /> Your Cart {" "}
              {this.props.OnCart.reduce(function (sum, item) {
                return sum + item.quantity;
              }, 0)}
            </Link>
          </li>

          <li>
            <Link to="/infomation"><BsBellFill /></Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
        </div>
   
   
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isChange: state.itemReducer.AddProduct,
    OnCart: state.itemReducer.OnProcessing,
  };
};
const Nav = connect(mapStateToProps)(NavPresent);
export default Nav;
