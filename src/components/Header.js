// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './Layout';

const HeaderWrapper = styled.header`
  background-color: white;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
   
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.active ? 'black' : 'gray'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo to="/">Andrew Weddell</Logo>
        <Nav>
          <NavLink to="/" active>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/Gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
