import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Tech apzr. laikmatis app</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Irangos sarasas
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Pridet iranga
        </NavLink>
      </div>
    </header>
  );
};

export default Header;