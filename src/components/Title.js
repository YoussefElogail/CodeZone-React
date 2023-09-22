import React, { useContext } from 'react';
import { TileContext } from '../context/TitleContext';
import { useRecoilState } from 'recoil';
import titleState from '../atoms/Title-atom';

const Title = (props) => {
  const [value,setValue] = useRecoilState(titleState)
  // const value = useContext(TileContext)
  
  return (
    <>
      {value.map((itme) => {
        return(
          <div key={itme.id}>
      <h1>id is: {itme.id}</h1>
      <p>title is: {itme.title}</p>
    </div>
        )
      })}
    </>
  );
}

export default Title;
