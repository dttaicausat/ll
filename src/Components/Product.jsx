import React from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import Item from "./item";
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [],
      type: "",
      searchName: "",
    };
    this.changeType = this.changeType.bind(this);
    this.OnchangeSearch = this.OnchangeSearch.bind(this);
  }
  componentWillMount() {
    axios
      .get("http://localhost:5000/product")
      .then((response) => {
        this.setState({ listProduct: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  componentDidUpdate() {
    axios
      .get("http://localhost:5000/product")
      .then((response) => {
        this.setState({ listProduct: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  OnchangeSearch(event) {
    this.setState({ searchName: event.target.value });
  }
  changeType(event) {
    this.setState({
      type: event.target.value,
    });
  }
  render() {
    const filteredList =
      this.state.type !== ""
        ? this.state.listProduct.filter((item) => item.type === this.state.type)
        : this.state.listProduct;

    return (
      <div className="shop">
        <div className="shop-nav row g-2 ">
          <div className="col-md">
            {" "}
            <div className=" shop-type  form-floating ">
              <label for="type">categories</label>
              {"  "}
              <select
                className="form-select"
                id="type"
                onChange={this.changeType}
              >
                <option value="fruit">fruit</option>
                <option value="cookie">cookie</option>
                <option value="chips">chips</option>
                <option selected value="">
                  all
                </option>
              </select>{" "}
            </div>
          </div>
          <div className="col-md">
            {" "}
            <div className="shop-search form-floating">
              <label for="searchName">find your favor </label>
              <input
                className="form-control"
                id="searchName"
                type="search"
                value={this.state.searchName}
                onChange={this.OnchangeSearch}
              />
            </div>
          </div>
        </div>
        <div className="shop-main">
          {" "}
          {filteredList
            .filter((item) => {
              let name = item.name.toLowerCase();

              return name.startsWith(this.state.searchName);
            })
            .map((product) => (
              <Item item={product} key={product.id} />
            ))}
        </div>
      </div>
    );
  }
}
