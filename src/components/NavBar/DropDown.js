  
import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-men clicked' : 'dropdown-men'}
      >
        {MenuItems.map((item, index) => {
          return (
            <Link key={index}
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                
            <li key={index} className="typebeer">
            {item.title}
              
            </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
