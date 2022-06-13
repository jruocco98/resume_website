import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
export const Nav = styled.nav`
  background: rgba(24, 23, 24, 0.85);
  height: 100vh;
  width: 205px;
  justify-content: space-between; 
  margin-left: -2px;
  margin-top: -47px;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 8px 6px;
  position: fixed;
  border-right: solid 3px;
  z-index: 1;
`;
export const NavLink = styled(Link)`
  color: #c2c2c2;
  background: rgba(24, 23, 24, 0.0);  
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1px 1rem;
  height: 58px;
  cursor: pointer;
  font-size: 20px;
  font-family: "Helvetica";
  &:hover {
    color: #FBB8B9;
    font-size: 22px;  
  }

  &.active {
    color: #000000;
    font-size: 22px;
  }

`;
//#ff6a67
export const NavMenu = styled.div`

  
  margin-top: 20px;

`;

