import React from "react";
import styled from "styled-components";
import { mobileDevice } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SettingsIcon from "@material-ui/icons/Settings";

const Container = styled.div`
  height: 60px;
  background-color: #e3e3e7;
  position: sticky;
  top: 0;
  ${mobileDevice({ height: "50px" })}
  z-index: 10;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobileDevice({ padding: "10px 0px" })};
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobileDevice({ fontSize: "20px" })};
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
  display: flex;
  align-items: center;
  ${mobileDevice({ marginLeft: "none", paddingRight: "1px" })};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Logo</Logo>
        </Left>

        <Right>
          <MenuItem>
            <NotificationsActiveIcon />
          </MenuItem>
          <MenuItem>
            <SettingsIcon />
          </MenuItem>
          <MenuItem>
            <p> User</p>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
