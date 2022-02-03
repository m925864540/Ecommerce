import React from "react";
import styled from "styled-components";
import {Search } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from "@material-ui/core";
import {mobileDevice} from '../responsive';

const Container = styled.div`
  height: 60px;
  background-color: LightGray;
  ${mobileDevice({height:"50px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobileDevice({padding:"10px 0px"})};
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const Language = styled.span`
  cursor: pointer;
  ${mobileDevice({display: "none"})};
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
  ${mobileDevice({width: "45px"})};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobileDevice({fontSize: "20px"})};
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
  ${mobileDevice({marginLeft: "none", paddingRight: "1px"})};
  
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color:"gray"}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Logo</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            {/* <Badge badgeContent={4} color="primary"> */}
              <ShoppingCartIcon />
            {/* </Badge> */}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
