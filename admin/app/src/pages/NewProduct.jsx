import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Container = styled.div``;
const SideBySide = styled.div`
  display: flex;
`;
const NewProductContainer = styled.div`
  display: flex;
  width: 86vw;
  flex-direction: column;
`;
const Title = styled.h1`
  display: flex;
  margin-right: 30px;
  color: #252525;
  font-weight: 500;
  font-size: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 50vw;
  flex-direction: column;
  margin-top: 30px;
`;
const InputTitle = styled.span`
  margin: 15px 0px 5px px;
  margin-left: 100px;
  font-weight: 400;
  color: #888888;
`;
const Input = styled.input`
  margin: 5px 0px 15px 0px;
  margin-left: 100px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #aeaeae;
`;
const CreateButton = styled.button`
  display: flex;
  height: 32px;
  width: 80px;
  color: black;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  background-color: #6d6d6d;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 350px;
  margin-top: 20px;
  transition: all 0.5s ease;
  &:hover {
    ${"" /* transform: scale(1.05); */}
    font-weight: 700;
    color: black;
    font-size: 14px;
  }
`;
const Select = styled.select`
  margin: 5px 0px 15px 0px;
  margin-left: 100px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #aeaeae;
`;
const Option = styled.option``;
const DashBoardTitle = styled.h1`
  /* Created with https://www.css-gradient.com */
  background: #ffffff;
  background: -webkit-radial-gradient(center, #ffffff, #d8d8d8);
  background: -moz-radial-gradient(center, #ffffff, #d8d8d8);
  background: radial-gradient(ellipse at center, #ffffff, #d8d8d8);
  width: inherit;
  padding: 10px 0px 10px 20px;
  display: flex;
  align-items: center;
`;
const NewProduct = () => {
  return (
    <Container>
      <Navbar />
      <SideBySide>
        <Sidebar />
        <NewProductContainer>
          <DashBoardTitle>
            <Link to={"/products"} style={{ textDecoration: "none",color: "inherit" }}>
              <Title><ArrowBackIcon /></Title>
            </Link>
            <Title>Create Product</Title>
          </DashBoardTitle>
          <Wrapper>
            <InputTitle>Image</InputTitle>
            <input
              type={"file"}
              style={{
                margin: "15px 0px 15px 0px",
                marginLeft: "100px",
                height: "25px",
                borderRadius: "3px",
              }}
            />
            <InputTitle>Name</InputTitle>
            <Input placeholder="Name" />
            <InputTitle>Description</InputTitle>
            <Input placeholder="Description..." />
            <InputTitle>Stock</InputTitle>
            <Input placeholder="Ex 1..." />
            <InputTitle>Active</InputTitle>
            <Select name="active" id="active">
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
            <CreateButton>Create</CreateButton>
          </Wrapper>
        </NewProductContainer>
      </SideBySide>
    </Container>
  );
};

export default NewProduct;
