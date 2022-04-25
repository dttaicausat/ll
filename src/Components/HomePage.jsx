import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import SignIn from "./Signin";
import $ from "jquery";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorized: "false",
    };
  }

  render() {
    return (
      <div className="home">
        <div className="home-intro">
          <p className="home-intro-text">
            Delwyn Shop specializes in weekly meal plans for a healthy
            lifestyle. Proud to be the largest meal plan provider in Saigon, we
            focus on serving a balanced diet specifically designed to help you
            maintain your weight.
          </p>
          <Link  to="/product">
            Let eat some
            <IoFastFoodOutline />
          </Link>
        </div>
        <div className="home-image"></div>
      </div>
    );
  }
}
