import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { updateProductFunc } from "./../redux/product";
import User from "./User";
import { deleteOrder, deleteOrderFunc } from "../redux/orders";

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
  flex: 2;
`;
const InfoContainer = styled.div`
  width: 400px;
  height: 450px;
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
  font-size: 24px;
  font-weight: 600;
  color: #373737;
  margin: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const ProductInfo = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #373737;
  margin-left: 10px;
  margin: 10px 5px 10px 5px;
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  fontweight: 400;
  color: #888888;
  margin-right: 20px;
`;
const Image = styled.img`
  height: 200px;
  width: 200px;
  background-color: black;
`;
const Hr = styled.hr`
  background-color: #575757;
  border: none;
  height: 1px;
  margin: 0px 10px;
  margin-bottom: 10px;
  margin-top: 20px;
`;
const RightContainer = styled.div`
  flex: 3;
`;
const EditContainer = styled.div`
  width: 800px;
  height: 700px;
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
const DashBoardTitle = styled.div`
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

const SingleTransaction = () => {
  const location = useLocation();
  const orderID = location.pathname.split("/")[2];
  //Retrieve the product with the ID.
  const order = useSelector((state) =>
    state.order.orders.find((item) => item._id === orderID)
  );
  //Retrive use who placed the order.
  const customerID = order.user_ID;
  const customer = useSelector((state) =>
    state.customer.customers.find((item) => item._id === customerID)
  );
  //   console.log(customer)
  //Retreive the order products
  const products = order.products;

  //   console.log(products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Updating a product info.
  const handleCancle = () => {
    deleteOrderFunc(dispatch, navigate, orderID);
    navigate("/transaction");
  };
//   console.log(order.user_ID);
  return (
    <Container>
      <Navbar />
      <SideBySide>
        <Sidebar />
        <ProductContainer>
          <DashBoardTitle>
            <Link
              to={"/transaction"}
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
                  <ProductName>Order Information</ProductName>
                  <ProductInfo>
                    <Span>Order ID:</Span> {order._id}
                  </ProductInfo>
                  <ProductInfo>
                    <Span>Price:</Span> {order.amount.toFixed(2)}
                  </ProductInfo>
                  <ProductInfo>
                    <Span>Creation Time:</Span> {order.createdAt}
                  </ProductInfo>
                  <Hr />
                  <ProductName>User Information</ProductName>
                  <ProductInfo>
                    <Span>User ID:</Span> {order.user_ID}
                  </ProductInfo>
                  {customer.firstName && customer.lastName ? (
                    <div>
                      <ProductInfo>
                        <Span>User Name:</Span>
                        {`${customer.firstName} ${customer.lastName}`}
                      </ProductInfo>
                    </div>
                  ) : null}
                  <ProductInfo>
                    <Span>Admin Status: </Span>{" "}
                    {customer.isAdmin ? "true" : "false"}
                  </ProductInfo>
                  <ProductInfo>
                    {customer.location ? (
                      <>
                        <Span>Location: </Span> {customer.location}
                      </>
                    ) : null}
                  </ProductInfo>
                </Info>
              </InfoContainer>
            </LeftContainer>

            <RightContainer>
              <EditContainer>
                <Info>
                  <EditTitle>Order</EditTitle>
                  {products.map((item) => (
                    <Info key={item.productID}>
                      <Span>Product ID:</Span> {item.productID}
                      <Span style={{ marginLeft: "15px" }}>Quantity:</Span>{" "}
                      {item.quantity}
                      <Span style={{ marginLeft: "15px" }}>Color:</Span>{" "}
                      {item.color}
                      <Span style={{ marginLeft: "15px" }}>Size:</Span>{" "}
                      {item.size}
                      <Hr />
                    </Info>
                  ))}
                </Info>
                <UpdateButton onClick={handleCancle}>
                  Cancle This Order
                </UpdateButton>
              </EditContainer>
            </RightContainer>
          </ProductBottomContainer>
        </ProductContainer>
      </SideBySide>
    </Container>
  );
};

export default SingleTransaction;
