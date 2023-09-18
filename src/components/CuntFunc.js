import {useState,useEffect} from 'react';

const CuntFunc = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const plus = () => {
    setCount(count + 1)
  }

  const plus2 = () => {
    setCount2(count2 + 1)
  }

  useEffect(() => {
    console.log("hi")
    return () => {
      console.log("unMunteng")
    }
  },[count])



  return (
    <>
      <h1>the count is: {count}</h1>
      <h1>the count2 is: {count2}</h1>
      <button onClick={plus}>+</button>
      <button onClick={plus2}>+</button>
    </>
  );
}

export default CuntFunc;
