import React, { useState } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userRequest } from "../redux/requestMethod";
import styled from "styled-components";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/shoppingCart";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfcf8;
`;
const Wrapper = styled.div`
  display: flex;
  width: 350px;
  height: 250px;
  border: 1px solid black;
  ${"" /* justify-content: center; */}
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10%;
  padding: 10px;
`;
const Message = styled.h1``;
const OrderInfo = styled.p`
  margin-top: 40px;
`;
const Button = styled.button`
  display: flex;
  height: 50%;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  cursor: pointer;
  background-color: #a88a1e;
  outline: none;
  border: none;
  padding: 10px;
  border-radius: 20px;
  font-size: 20px;
`;

const Success = () => {
  const location = useLocation(); // /payment/success
  // console.log("Location is success: ", location);

  //Receive stripe data and user selected product to make an order.
  const stripeData = location.state.stripeData;
  const allProducts = location.state.allProducts;
  // console.log("allProducts: ", allProducts);
  // console.log("StripeData: ", stripeData);

  const currentUser = useSelector((state) => state.user.currentUser);
  // console.log("CurrentUser: ", currentUser);

  const [orderID, setOrderID] = useState("");

  const dispatch = useDispatch();
  //Post an order
  useEffect(() => {


    const makeOrder = async () => {
      try {
        const res = await userRequest.post("/order", {
          user_ID: currentUser._id,
          products: allProducts.products.map((item) => ({
            productID: item._id,
            quantity: item.size,
            color: item.color,
            quantity: item.itemCount,
          })),
          amount: allProducts.totalPrice,
          address: stripeData.billing_details.address,
        });
        setOrderID(res.data._id);
        
        //Order is made, clear the user cart
        dispatch(clearCart());
      } catch (err) {
        console.log("Error in makeOrder: ", err);
      }
    };
    stripeData && makeOrder();

  }, [stripeData, currentUser, allProducts.products, allProducts.totalPrice, dispatch]);

  return (
    <Container>
      <Wrapper>
        <CheckCircleOutlineIcon
          style={{ fontSize: "50px", color: "green", marginBottom: "10px" }}
        />
        <Message>Order Placed!</Message>
        <OrderInfo>Order ID: {orderID}</OrderInfo>

        <Button>
          <Link to="/" style={{ textDecoration: "none" }}>Home Page</Link>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Success;
