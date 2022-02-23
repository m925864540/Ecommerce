import React from 'react';
import { useLocation } from 'react-router';

const Success = () => {

  const location = useLocation(); // /payment/success

  //Receive stripe data and user selected product to make an order.
  const stripeData = location.state.stripeData;
  const allProducts = location.state.allProducts;
  console.log(stripeData)
  return (
    <p>Success</p>
    )
};

export default Success;
