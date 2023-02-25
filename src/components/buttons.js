/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function Buttons(props) {
  return (
    <div className="grid-container">
      <div className="container-row">
        <button name="AC" type="button" onClick={props.clicked} className="button-grey">AC</button>
        <button name="+/-" type="button" onClick={props.clicked} className="button-grey">+/-</button>
        <button name="%" type="button" onClick={props.clicked} className="button-grey">%</button>
        <button name="÷" type="button" onClick={props.clicked} className="button-orange">÷</button>
      </div>

      <div className="container-row">
        <button name="7" type="button" onClick={props.clicked} className="button-grey">7</button>
        <button name="8" type="button" onClick={props.clicked} className="button-grey">8</button>
        <button name="9" type="button" onClick={props.clicked} className="button-grey">9</button>
        <button name="x" type="button" onClick={props.clicked} className="button-orange">x</button>
      </div>

      <div className="container-row">
        <button name="4" type="button" onClick={props.clicked} className="button-grey">4</button>
        <button name="5" type="button" onClick={props.clicked} className="button-grey">5</button>
        <button name="6" type="button" onClick={props.clicked} className="button-grey">6</button>
        <button name="-" type="button" onClick={props.clicked} className="button-orange">-</button>
      </div>

      <div className="container-row">
        <button name="1" type="button" onClick={props.clicked} className="button-grey">1</button>
        <button name="2" type="button" onClick={props.clicked} className="button-grey">2</button>
        <button name="3" type="button" onClick={props.clicked} className="button-grey">3</button>
        <button name="+" type="button" onClick={props.clicked} className="button-orange">+</button>
      </div>

      <div className="third-row-bottom">
        <button name="0" type="button" onClick={props.clicked} className="button-grey">0</button>
        <button name="." type="button" onClick={props.clicked} className="button-grey">.</button>
        <button name="=" type="button" onClick={props.clicked} className="button-orange">=</button>
      </div>
    </div>
  );
}

export default Buttons;
