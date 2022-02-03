import React from "react";
import styled from "styled-components";
import Navbar from "./../components/Navbar";
import Announcement from "./../components/Announcement";
import Products from "./../components/Products";
import Newsletter from "./../components/Newsletter";
import Footer from "./../components/Footer";
import { mobileDevice } from "../responsive";

const Container = styled.div``;
const ProductTitle = styled.h1`
  margin-top: 10px;
  margin-left: 20px;
`;
const FilterContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px;
  ${mobileDevice({ margin: "0px 5px" })};
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobileDevice({ })};
  
`;
const FilterType = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
`;
const Select = styled.select`
  padding: 5px;
  margin-right: 5px;
`;
const Option = styled.option`
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <ProductTitle>Shirts</ProductTitle>
      <FilterContainer>
        <Filter>
          <FilterType>Filter:</FilterType>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterType>Sort:</FilterType>
          <Select>
            <Option disabled selected>
              Option
            </Option>
            <Option>Newest</Option>
            <Option>Oldest</Option>
            <Option>Highest Price</Option>
            <Option>Lowest Price</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
