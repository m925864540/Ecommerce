import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import PersonIcon from "@material-ui/icons/Person";
import LabelIcon from "@material-ui/icons/Label";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Chart from "./Chart";
import { data } from "../chartData.js";
import { adminRequest } from "../redux/requestMethod";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  width: 86vw;
  justify-content: space-evenly;
`;
const DashBoardTitle = styled.h1`
  /* Created with https://www.css-gradient.com */
  background: #ffffff;
  background: -webkit-radial-gradient(center, #ffffff, #d8d8d8);
  background: -moz-radial-gradient(center, #ffffff, #d8d8d8);
  background: radial-gradient(ellipse at center, #ffffff, #d8d8d8);
  width: inherit;
  padding: 14px 0px 14px 20px;
  font-size: 20px;
  color: #252525;
  font-weight: 500;
`;
const InfoWrapper = styled.div`
  display: flex;
`;
const InfoContainer = styled.div`
  width: 300px;
  height: 150px;
  ${"" /* background-color: black; */}
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  border: none;
  border-radius: 5px;
  margin: 40px;
  display: flex;
  flex-direction: column;
`;
const Info = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: #373737;
  margin: 10px;
`;
const IconAndText = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;
const Text = styled.p`
  ${"" /* margin: 10px 0px 10px 30px; */}
  font-size: 18px;
  font-weight: 600;
  color: #373737;
  margin-left: 10px;
`;
// const ChartConatiner = styled.div`
//   -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
//   -moz-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
//   border: none;
//   border-radius: 5px;
//   margin: 40px;
//   display: flex;
//   flex-direction: column;
// `;

const Mainbar = () => {
  
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  //Get user montly stats
  const [userStat, setUserStat] = useState([]);
  useEffect(() => {
    const getUserStat = async () => {
      try {
        const res = await adminRequest.get("/users/stats");
        // console.log("res is: ", res.data);
        res.data.map((item) => {
          setUserStat((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "user": item.total },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getUserStat();
  }, [MONTHS]);
  // console.log(userStat)

  //Get total users
  const [totalUser, setTotalUser] = useState("");
  useEffect(() => {
    const getTotalUser = async () => {
      try {
        const res = await adminRequest.get("/users/find");
        setTotalUser(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };
    getTotalUser();
  });

  //Get total products
  const [totalProduct, setTotalProduct] = useState("");
  useEffect(() => {
    const getTotalProduct = async () => {
      try {
        const res = await adminRequest.get("/product");
        setTotalProduct(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };
    getTotalProduct();
  });

  return (
    <Container>
      <DashBoardTitle>Admin Dashboard</DashBoardTitle>
      <Main>
        <InfoWrapper>
          <InfoContainer>
            <Info>
              <Title>Products</Title>
              <IconAndText>
                <LabelIcon />
                <Text>{totalProduct}</Text>
              </IconAndText>
            </Info>
          </InfoContainer>
          <InfoContainer>
            <Info>
              <Title>Sales</Title>
              <IconAndText>
                <AttachMoneyIcon />
                <Text>$4,231.99</Text>
              </IconAndText>
            </Info>
          </InfoContainer>
          <InfoContainer>
            <Info>
              <Title>Users</Title>
              <IconAndText>
                <PersonIcon />
                <Text>{totalUser}</Text>
              </IconAndText>
            </Info>
          </InfoContainer>
        </InfoWrapper>
      </Main>

      <Chart chartData={userStat} chartTitle="User Statistics" dataKey="user" />
    </Container>
  );
};

export default Mainbar;
