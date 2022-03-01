import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { userRequest } from './../redux/requestMethod';
// const env=require("dotenv").config()

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 150px;
  height: 150px;
  background-color: #83834f;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  display: flex;
  padding: 10px;
  border-radius: 10px;
  background-color: #fbfcf8;
  cursor: pointer;
`;
const Checkout = () => {

  const onToken = (token) => {
    // console.log(token);
    setStripeToken(token);
  };

  //Contains info need to send to server.
  const [stripeToken, setStripeToken] = useState(null);

  useEffect(() => {

    const makeRequest = async () => {
      try {
          //Send to server, and the stripe.charges at server will return us with stripeRes.
          //res therefore equals stripeRes in server.
          //res will contain all the info we need, such as id, address.
        const res = await userRequest.post(
          "/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 1999,   //fake amount;
          }
        );
        console.log("res.data is:",res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  const STRIPE_P_KEY =
    "pk_test_51KN5XjHDd678D5d9D9WEMMjx8PrN2YIctWlRImYQ4leSyoqf7y8xweQeVrxM3siXa251CUDic6Cp1ndwdZQoyxmh00nbYLmyYb";

  return (
    <Container>
      <Wrapper>
        <StripeCheckout
          name="store"
          description="Test checkout"
          billingAddress
          shippingAddress
          amount={1999}
          token={onToken} 
          stripeKey={STRIPE_P_KEY}
        >
          <Button>Checkout Now</Button>
        </StripeCheckout>
      </Wrapper>
    </Container>
  );
};

export default Checkout;
