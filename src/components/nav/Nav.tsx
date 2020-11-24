import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.styles.scss';

const Nav = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-items'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/counter'>
          <li>Counter</li>
        </Link>
        <Link to='/todos'>
          <li>Todos</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
