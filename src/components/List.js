import React from "react";
import ListArr from "./ListArr";

const List = () => {
  const listArr = <ListArr />
  return (
    <div>
      <ul>
        {listArr}
      </ul>
    </div>
  );
};

export default List;
