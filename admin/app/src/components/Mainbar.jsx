import React from "react";
import styled from "styled-components";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import PersonIcon from "@material-ui/icons/Person";
import LabelIcon from "@material-ui/icons/Label";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Chart from "./Chart";
import {data} from '../chartData.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  width: 85vw;
  justify-content: space-evenly;
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
  return (
    <Container>
      <Main>
        <InfoWrapper>
          <InfoContainer>
            <Info>
              <Title>Products</Title>
              <IconAndText>
                <LabelIcon />
                <Text>160</Text>
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
                <Text>5</Text>
              </IconAndText>
            </Info>
          </InfoContainer>
        </InfoWrapper>
      </Main>

      <Chart chartData={data} chartTitle="User Statistics" dataKey="Users" />
    </Container>
  );
};

export default Mainbar;
