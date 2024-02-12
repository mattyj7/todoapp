import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="app-header">
      <Link to={`/notes/`}>
        <h1>Note App</h1>
      </Link>
    </div>
  );
};

export default Header;
