import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to={`/notes/`}>
      <h2>Home</h2>
    </Link>
  );
};

export default Header;
