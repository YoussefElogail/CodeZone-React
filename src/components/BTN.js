import React from 'react';

const BTN = (props) => {
  function done() {
    console.log("done")
  }
  const bye = () => {
    console.log("bye")
  }
  const hi = (params) => {
    console.log("hi")
  }
  return (
    <>
      <button onClick={done} onMouseLeave={bye} onMouseEnter={hi}>{props.name}</button>
    </>
  );
}

export default BTN;
