import React, { Component } from "react";
import Incrementer from "./Incrementer";
import Decrementer from "./Decrementer";
import ValueDisplayer from "./ValueDisplayer";

class Counter extends Component {
  render() {
    return (
      <main>
        <button>--</button> {/*Decrementer*/}
        <span>0</span> {/*ValueDisplayer*/}
        <button>++</button> {/*Incrementer*/}
      </main>
    );
  }
}
export default Counter;
