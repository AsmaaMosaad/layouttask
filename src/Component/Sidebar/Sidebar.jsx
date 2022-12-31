import React from 'react';
import Sideitem from '../Sideitem';
import { NavLink } from 'react-router-dom';

function Sidebar () {
  return (
    <>
      <ul>
        {
          Sideitem.map(si => {
            return (
              <li>
                <NavLink to={si.path}>
                  {si.label}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </>
  );
}

export default Sidebar;