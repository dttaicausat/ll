import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      ms: "",
    };
    this.ChangePw = this.ChangePw.bind(this);
    this.ChangeUn = this.ChangeUn.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  ChangeUn(event) {
    this.setState({ username: event.target.value });
  }
  ChangePw(event) {
    this.setState({ password: event.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/", {
        username: this.state.username,
      })
      .then((res) =>
        this.setState({
          ms:
            res.data[0].password === this.state.password
              ? "login  success"
              : "login failure",
          password: "",
          username: "",
        })
      )
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <div className="login">
        <form onSubmit={this.onSubmit} className="login-form">
          {" "}
          <p> LOGIN</p>
          <div className="login-username">
            <label for="username">Username</label>
            <input
              id="username"
              value={this.state.username}
              placeholder="Username"
              onChange={this.ChangeUn}
            />
          </div>
          <div class="login-password">
            <label for="password">Password</label>
            <input
              id="password"
              value={this.state.password}
              onChange={this.ChangePw}
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <br></br>
          <div className="login-checkbox">
            <input
              type="checkbox"
              id="checkbox"
              name="remember"
              value="yes"
            ></input>
            <label for="checkbox">remember me ?</label>{" "}
          </div>
          <br></br>
          <button type="submit" className="login-button">
            Login
          </button>
          <p>or </p>
          <div className="login-social">
            <div className="fb">
              <BsFacebook />
            </div>
            <div className="gg">
              <AiFillGoogleCircle />
            </div>
            <div className="lk">
              <AiFillLinkedin />
            </div>
          </div>
          <div className="link-signup">
            need an account? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    );
  }
}
