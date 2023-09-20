import React from "react";
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <>
      <ul className="list-group">
        <li>
          <Link className="nav-link"  to="products">
            get all products
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="">
            get all cateogries
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SideBar;
