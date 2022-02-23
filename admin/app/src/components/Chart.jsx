import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const Container = styled.div``;
const ChartConatiner = styled.div`
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  border: none;
  border-radius: 5px;
  margin: 40px;
  display: flex;
  flex-direction: column;
`;
const ChartTitle = styled.h1`
  font-size: 20px;
  margin: 20px;
`;
const Chart = ({chartData, chartTitle, dataKey}) => {
    
  return (
    <Container>
    <ChartConatiner>
      <ChartTitle>{chartTitle}</ChartTitle>
      <ResponsiveContainer width="80%" aspect={4 / 1}>
        <LineChart data={chartData}>
          <XAxis dataKey="name" />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      </ChartConatiner>
    </Container>
  );
};

export default Chart;
