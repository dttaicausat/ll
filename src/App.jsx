import React from 'react';

import Nav from './Components/Nav';
import "./App.scss"; 
import Footer from './Components/footer';
import {Outlet} from "react-router-dom";
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      authorized:"false"
    }
  }
  render() {
    return (
      <div >
      <Nav />
       <Outlet />
     <Footer />
      </div>

    )
  };

}