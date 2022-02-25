import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Container = styled.div``;
const SideBySide = styled.div`
  display: flex;
`;
const ProductContainer = styled.div`
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
const CreateButton = styled.button`
  display: flex;
  height: 32px;
  width: 70px;
  color: white;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-color: #6d6d6d;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const ProductBottomContainer = styled.div`
  display: flex;
  height: 90%;
`;
const LeftContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  width: 300px;
  height: 250px;
  ${"" /* background-color: black; */}
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  border: none;
  border-radius: 5px;
  margin: 20px 40px 40px 40px;
  display: flex;
  flex-direction: column;
`;
const Info = styled.div`
  padding: 20px;
`;

const ProductName = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #373737;
  margin: 10px;
  margin-left: 20px;
`;
const ProductInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #373737;
  margin-left: 10px;
  margin: 5px;
`;
const Span = styled.span`
  fontweight: 400;
  color: #888888;
  margin-right: 20px;
`;
const Hr = styled.hr`
  background-color: #575757;
  border: none;
  height: 1px;
  margin: 0px 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const RightContainer = styled.div`
  flex: 2;
`;
const EditContainer = styled.div`
  width: 600px;
  height: 500px;
  ${"" /* background-color: black; */}
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  border: none;
  border-radius: 5px;
  margin: 20px 40px 40px 40px;
  display: flex;
  flex-direction: column;
`;
const EditTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #373737;
  margin: 10px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
  margin: 20px 10px 20px 10px;
`;
const UpdateButton = styled.button`
  display: flex;
  height: 40px;
  width: 80px;
  color: white;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  background-color: #373737;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Select = styled.select`
  margin-left: 10px;
  margin: 5px;
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
  justify-content: space-between;
  align-items: center;
`;
const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <SideBySide>
        <Sidebar />
        <ProductContainer>
          <DashBoardTitle>
            <Link
              to={"/products"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Title>
                <ArrowBackIcon />
              </Title>
            </Link>
            <Title>Product</Title>
            <Link to="/newProduct" style={{ textDecoration: "none" }}>
              <CreateButton>Create Product</CreateButton>
            </Link>
          </DashBoardTitle>

          <ProductBottomContainer>
            <LeftContainer>
              <InfoContainer>
                <Info>
                  <ProductName>Shirt</ProductName>
                  <ProductInfo>
                    <Span>ID:</Span> 123
                  </ProductInfo>
                  <ProductInfo>
                    <Span>In Stock:</Span> Yes
                  </ProductInfo>
                  <ProductInfo>
                    <Span>Active:</Span> Yes
                  </ProductInfo>
                  <ProductInfo>
                    <Span>Sales:</Span> 6
                  </ProductInfo>
                </Info>
              </InfoContainer>
            </LeftContainer>

            <RightContainer>
              <EditContainer>
                <Info>
                  <EditTitle>Edit</EditTitle>
                  <ProductInfo>Product Name</ProductInfo>
                  <Input placeholder="Shirt" />
                  <ProductInfo>Description</ProductInfo>
                  <Input placeholder="Description..." />
                  <ProductInfo>In Stoack</ProductInfo>
                  <Select name="inStock" id="inStock">
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                  <ProductInfo>Active</ProductInfo>
                  <Select name="active" id="active">
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Info>
                <UpdateButton>Update</UpdateButton>
              </EditContainer>
            </RightContainer>
          </ProductBottomContainer>
        </ProductContainer>
      </SideBySide>
    </Container>
  );
};

export default SingleProduct;
