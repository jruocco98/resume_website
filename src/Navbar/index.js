import React from 'react';
import {Icon1, Icon2, Icon3, Icon4, Icon5, Icon6} from './IconElements'
import {
  Nav,
  NavLink,
  NavMenu
} from './NavbarElements'

const Navbar = () => {
  return(
    <>
      <Nav>
        <NavMenu>
          
          <NavLink to='/' activestyle>
            <Icon2/>About Me
          </NavLink>
          <NavLink to='/experience' activestyle>
            <Icon1/>Experience
          </NavLink>
          <NavLink to='/projects' activestyle>
            <Icon3/>Projects
          </NavLink>
          <NavLink Style='line-height: 28px' to='/education' activestyle>
            <Icon5/>Education +<br/>Skills
          </NavLink>
          <NavLink to='/playme' activestyle>
            <Icon6/>Play Me!
          </NavLink>
          
        </NavMenu>
      </Nav>
    </>
  );
}



export default Navbar