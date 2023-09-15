import React from 'react';

const ListArr = () => {
  // const list = ["html", "css", "js", "react"];
  const list = [{id:1,name:"html",num:1},{id:2,name:"css",num:2}]
  // const li = list.map((el) => {
  //   return <li>{el}</li>
  //   })
  // console.log(li)
  return (
    <>
      {list.map((itme)=> <li key={itme.id}><h1>{itme.name}</h1><p>{itme.num}</p></li>)}
    </>
  );
}

export default ListArr;
