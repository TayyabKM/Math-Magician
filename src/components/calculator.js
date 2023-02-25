import React, { useState } from 'react';
import Buttons from './buttons';
import calculate from './logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const buttonName = e.target.name;
    setState((state) => calculate(state, buttonName));
  };

  const { total, next } = state;
  let result = 0;
  if (total === null && next !== null) {
    result = next;
  } else if (total !== null && next === null) {
    result = total;
  } else {
    result = next;
  }

  return (
    <div className="buttons-cont">
      <div className="calc-section">{result}</div>
      <Buttons clicked={handleClick} />
    </div>
  );
}
