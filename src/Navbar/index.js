import React from 'react';
import {Icon1, Icon2, Icon3, Icon5, Icon6} from './IconElements'
import {
  Nav,
  NavLink,
  NavMenu
} from './NavbarElements'
import logo from './icon/gr_laurel4.png'
const Navbar = () => {

  return(
    <>
      <Nav>
      <div style={{
        height: '100px',
        width: '50%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: '59px',
        marginTop: '20px',
        marginBottom: '30px',
      }}>
      <img src={logo} alt={"GR icon"} draggable="false" style={{width:'auto',height:'auto', paddingRight: '50px',}}/>
      </div>
      <hr width='77%' color='black'/>
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