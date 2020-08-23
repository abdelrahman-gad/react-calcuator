import React from "react";

class Calulator extends React.Component {
  render() {
    return (
      <section className="calculator">
        <div id="display"></div>
        <button id="clear">AC</button>
        <button id="divide">/</button>
        <button id="multiply">x</button>

        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
        <button id="subtract">-</button>
        <button id="four">4</button>

        <button id="five">5</button>
        <button id="six">6</button>
        <button id="add">+</button>
        <button id="three">3</button>
        <button id="two">2</button>
        <button id="one">1</button>

        <button id="zero">0</button>
        <button id="decimal">.</button>
        <button id="equels">=</button>
      </section>
    );
  }
}

export default Calulator;