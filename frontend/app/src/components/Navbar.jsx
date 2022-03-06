import React from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
//import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from "@material-ui/core";
import { mobileDevice } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutFunc } from "../redux/user";
import { useNavigate } from "react-router";

const Container = styled.div`
  height: 60px;
  background-color: LightGray;
  ${mobileDevice({ height: "50px" })}
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
const Language = styled.span`
  cursor: pointer;
  ${mobileDevice({ display: "none" })};
`;
const SearchContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 2px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background-color: LightGray;
  ${mobileDevice({ width: "45px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
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
  //On navbar, only shows quantity on cart.
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);
  // console.log("Inside Navbar: ", currentUser);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    logoutFunc(dispatch, navigate);
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language> */}
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link key="toHome" style={{ textDecoration: "none", color: "black"}} to={"/"}>
            <Logo>Logo</Logo>
          </Link>
        </Center>
        <Right>
          {currentUser ? (
            <>
              <MenuItem>{currentUser.username}</MenuItem>
              <MenuItem>
                {" "}
                <p style={{ marginLeft: "10px"}} onClick={logout}>
                  Logout
                </p>
              </MenuItem>
            </>
          ) : (
            <Right>
              <Link key="toRegister" to={"/register"} style={{ textDecoration: "none", fontSize: "20px" }}>
                <MenuItem>Register</MenuItem>
              </Link>
              <Link key="toLogin" to={"/login"} style={{ textDecoration: "none", fontSize: "20px" }}>
                <MenuItem>Sign In</MenuItem>
              </Link>
            </Right>
          )}
          <Link key="toCart" to={"/cart"}>
            <MenuItem>
              <Badge badgeContent={cartQuantity} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
