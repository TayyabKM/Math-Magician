import React from 'react';

function Buttons() {
  return (
    <div className="grid-container">
      <div className="container-row">
        <button type="button" className="button-grey">AC</button>
        <button type="button" className="button-grey">+/-</button>
        <button type="button" className="button-grey">%</button>
        <button type="button" className="button-orange">÷</button>
      </div>

      <div className="container-row">
        <button type="button" className="button-grey">7</button>
        <button type="button" className="button-grey">8</button>
        <button type="button" className="button-grey">9</button>
        <button type="button" className="button-orange">x</button>
      </div>

      <div className="container-row">
        <button type="button" className="button-grey">4</button>
        <button type="button" className="button-grey">5</button>
        <button type="button" className="button-grey">6</button>
        <button type="button" className="button-orange">-</button>
      </div>

      <div className="container-row">
        <button type="button" className="button-grey">1</button>
        <button type="button" className="button-grey">2</button>
        <button type="button" className="button-grey">3</button>
        <button type="button" className="button-orange">+</button>
      </div>

      <div className="third-row-bottom">
        <button type="button" className="button-grey">0</button>
        <button type="button" className="button-grey">.</button>
        <button type="button" className="button-orange">=</button>
      </div>
    </div>

  );
}

export default Buttons;
