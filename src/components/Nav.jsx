import React from 'react';
import { Link } from 'react-router-dom';
import {nav} from "../data/data"


const Nav = () => {
  return <nav>
    <ul className='flex gap-x-10 text-md'>
      {nav.map((item, index) => {
        const {href, name} = item;
        return (
        <Link className='hover:text-accent transition' to={href}>{name}</Link>  
        )
      })}
    </ul>
  </nav>;
};

export default Nav;
