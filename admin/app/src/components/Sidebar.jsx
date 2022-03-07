import React from "react";
import styled from "styled-components";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import LabelIcon from "@material-ui/icons/Label";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutFunc } from "../redux/user";

const Container = styled.div`
  display: flex;
`;
const Side = styled.div`
  background-color: #F3F3F3;
  width: 13vw;
  ${'' /* width: 200px; */}
  height: 100vh;
`;
const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
`;
const MenuText = styled.h1`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #6c6c6c;
`;
const MenuList = styled.ul`
  margin-left: 10px;
  padding: 0;
  list-style: none;
`;
const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #3e3e3e;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #d2d2d2;
    border-radius: 3px;
  }
`;
const Hr = styled.hr`
  background-color: #575757;
  border: none;
  height: 1px;
  margin: 0px 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const Sidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = (e)=>{
    e.preventDefault();
    logoutFunc(dispatch, navigate);
  }
  return (
    <Container>
      <Side>
        <SideWrapper>
          <MenuText>Main Menu</MenuText>
          <MenuList>
            <Link to={"/home"} style={{ textDecoration: "none" }}>
              <MenuItem>
                <DashboardIcon
                  style={{ marginRight: "10px", fontSize: "18px" }}
                />
                Dashboard
              </MenuItem>
            </Link>
            
            <Link to={"/user"} style={{ textDecoration: "none" }}>
              <MenuItem path>
                <PersonIcon style={{ marginRight: "10px", fontSize: "18px" }} />
                Users
              </MenuItem>
            </Link>
            <Link to={"/products"} style={{ textDecoration: "none" }}>
              <MenuItem>
                <LabelIcon style={{ marginRight: "10px", fontSize: "18px" }} />
                Products
              </MenuItem>
            </Link>
    
            <Link to={"/transaction"} style={{ textDecoration: "none" }}>
              <MenuItem>
                <AccountBalanceIcon
                  style={{ marginRight: "10px", fontSize: "18px" }}
                />
                Transaction
              </MenuItem>
            </Link>

            <Link to={"/sales"} style={{ textDecoration: "none" }}>
              <MenuItem>
                <AccountBalanceIcon
                  style={{ marginRight: "10px", fontSize: "18px" }}
                />
                Sales
              </MenuItem>
            </Link>
          </MenuList>
          <Hr />

           <MenuText>Logout</MenuText>
          <MenuList>
            <MenuItem onClick={logout}>
              <LogoutIcon
                style={{ marginRight: "10px", fontSize: "18px" }}
              />{" "}
              Logout
            </MenuItem>
          </MenuList>
            {/* <MenuItem>
              <ShowChartIcon
                style={{ marginRight: "10px", fontSize: "18px" }}
              />{" "}
              Feedback
            </MenuItem>
            <MenuItem>
              <PersonIcon style={{ marginRight: "10px", fontSize: "18px" }} />{" "}
              Messages
            </MenuItem>
          </MenuList>
          <Hr />

          <MenuText>Staff</MenuText>
          <MenuList>
            <MenuItem>
              <DashboardIcon
                style={{ marginRight: "10px", fontSize: "18px" }}
              />{" "}
              Manage
            </MenuItem>
            <MenuItem>
              <ShowChartIcon
                style={{ marginRight: "10px", fontSize: "18px" }}
              />{" "}
              Report
            </MenuItem>
          </MenuList>
          <Hr /> */}
        </SideWrapper>
      </Side>

      {/* <Main>
        <Mainbar></Mainbar>
      </Main> */}
    </Container>
  );
};

export default Sidebar;
