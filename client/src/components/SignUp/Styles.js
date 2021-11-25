import styled from "styled-components";
import Logo from "../Logo/index.js";
//import theme from "/theme/Index"

export const SidebarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 31px;
  padding-left: 30px;
  padding-top: 20px;
  max-width: 100%;
  position: fixed;
  width: 230px;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0px;
  border-right: 2px solid #f6e5e5;
`;

export const StyledLi = styled.a``;

export const Icon = styled.i`
  margin-left: 25px;
  font-size: 1.5em;
  font-weight: 0;
  font-size: 20px;
  color: grey;
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  margin-top: auto;
  margin-bottom: 50px;
`;
