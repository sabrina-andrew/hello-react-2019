import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Counter from "./Counter";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Counter />
        <Footer copyrightYear={2019} copyrightHolder="Kyle McKee" />
      </div>
    );
  }
}

export default App;
