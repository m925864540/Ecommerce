import React from "react";
import styled from "styled-components";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import PersonIcon from "@material-ui/icons/Person";
import LabelIcon from "@material-ui/icons/Label";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Mainbar from "./Mainbar";
import { Link } from "react-router-dom";

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
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 5px;
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
  padding-bottom: 5px;
  font-size: 14px;
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
  return (
    <Container>
      <Side>
        <SideWrapper>
          <MenuText>Main Menu</MenuText>
          <MenuList>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <MenuItem>
                <DashboardIcon
                  style={{ marginRight: "10px", fontSize: "14px" }}
                />
                Dashboard
              </MenuItem>
            </Link>
            <Link to={"/analyst"} style={{ textDecoration: "none" }}>
            <MenuItem id={1}>
              <ShowChartIcon
                style={{ marginRight: "10px", fontSize: "14px" }}
              />
              Analyst
            </MenuItem>
            </Link>
            <Link to={"/user"} style={{ textDecoration: "none" }}>
              <MenuItem path>
                <PersonIcon style={{ marginRight: "10px", fontSize: "14px" }} />
                Users
              </MenuItem>
            </Link>
            <Link to={"/products"} style={{ textDecoration: "none" }}>
              <MenuItem>
                <LabelIcon style={{ marginRight: "10px", fontSize: "14px" }} />
                Products
              </MenuItem>
            </Link>
            <Link to={"/sales"} style={{ textDecoration: "none" }}>
              <MenuItem>
                <AttachMoneyIcon
                  style={{ marginRight: "10px", fontSize: "14px" }}
                />
                Sales
              </MenuItem>
            </Link>
          </MenuList>
          <Hr />

          <MenuText>Notification</MenuText>
          <MenuList>
            <MenuItem>
              <DashboardIcon
                style={{ marginRight: "10px", fontSize: "14px" }}
              />{" "}
              Mail
            </MenuItem>
            <MenuItem>
              <ShowChartIcon
                style={{ marginRight: "10px", fontSize: "14px" }}
              />{" "}
              Feedback
            </MenuItem>
            <MenuItem>
              <PersonIcon style={{ marginRight: "10px", fontSize: "14px" }} />{" "}
              Messages
            </MenuItem>
          </MenuList>
          <Hr />

          <MenuText>Staff</MenuText>
          <MenuList>
            <MenuItem>
              <DashboardIcon
                style={{ marginRight: "10px", fontSize: "14px" }}
              />{" "}
              Manage
            </MenuItem>
            <MenuItem>
              <ShowChartIcon
                style={{ marginRight: "10px", fontSize: "14px" }}
              />{" "}
              Report
            </MenuItem>
          </MenuList>
          <Hr />
        </SideWrapper>
      </Side>

      {/* <Main>
        <Mainbar></Mainbar>
      </Main> */}
    </Container>
  );
};

export default Sidebar;
