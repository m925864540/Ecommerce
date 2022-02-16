import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./../components/Navbar";
import Announcement from "./../components/Announcement";
import Products from "./../components/Products";
import Newsletter from "./../components/Newsletter";
import Footer from "./../components/Footer";
import { mobileDevice } from "../responsive";
import { useLocation } from "react-router-dom";

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
  ${mobileDevice({})};
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
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2]; //Takes the category name.
  const [colorAndSizeFilter, setColorAndSizeFilter] = useState({});
  const [sortOptionFilter, setSortOptionFilter] = useState("Newest"); //default sort by newest item.

  const handleFilter = (e) => {
    const value = e.target.value;
    setColorAndSizeFilter({
      ...colorAndSizeFilter,
      [e.target.name]: value,
    });
  };
  const handleSortFilter = (e) => {
    const value = e.target.value;
    setSortOptionFilter( value);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <ProductTitle>{category}</ProductTitle>
      <FilterContainer>
        <Filter>
          <FilterType>Filter:</FilterType>
          <Select name="color" onChange={handleFilter}>
            <Option disabled >Color</Option>
            <Option>red</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>blue</Option>
            <Option>black</Option>
            <Option>pink</Option>
            <Option>white</Option>
            
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterType>Sort:</FilterType>
          <Select name="sortOption" onChange={handleSortFilter}>
            <Option disabled >Option</Option>
            <Option>Newest</Option>
            <Option>Oldest</Option>
            <Option>Highest Price</Option>
            <Option>Lowest Price</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products
        category={category}
        colorAndSizeFilter={colorAndSizeFilter}
        sortOptionFilter={sortOptionFilter}
      />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
