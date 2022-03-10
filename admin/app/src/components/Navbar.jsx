import React from "react";
import styled from "styled-components";
import { mobileDevice } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SettingsIcon from "@material-ui/icons/Settings";
import { logoutFunc } from "../redux/user";

const Container = styled.div`
  height: 60px;
  background-color: #f9f9f9;
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
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>Shop</Logo>
          </Link>
        </Left>

        <Right>
          <Link to={`/user/${currentUser._id}`} style={{ textDecoration: "none", color: "black"}}>
            <MenuItem>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  marginRight: "20px",
                }}
              >
                {currentUser.username}
              </p>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
