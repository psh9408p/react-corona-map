import React from "react";
import styled, { css } from "styled-components";

const NavBarUI = styled.div`
  width: 100%;
  height: 50px;
  background-color: #262626;
  color: white;
  font-weight: bolder;
  font-size: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavBar = () => {
  return <NavBarUI>React-Map</NavBarUI>;
};

export default NavBar;
