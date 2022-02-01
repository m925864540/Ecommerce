import React from "react";
import { products } from "../data";
import Product from "./Product";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {products.map((item) =>(
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
