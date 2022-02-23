import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const Info = styled.div`
  ${'' /* left: 0;
  top: 0; */}
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* flex-direction: column; */}
  opacity: 0;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 400px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  height: 80%;
`;

const Icon = styled.div`
  width: 25px;
  height: 25px;
  padding: 10px;
  border-radius: 60%;
  background-color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

/*
* Leads to cart when clicking on cart button, leads to single product page when click on image.

*/
const Product = ({ item }) => {
  return (
    // <Link item={item} to={`/product/${item._id}`}>
    <Container>
      <Image src={item.image} />

      <Info>
        <Icon>
          <Link item={item} to={`/product/${item._id}`}>
            <SearchIcon />
          </Link>
        </Icon>

        {/* <Icon>
            <FavoriteBorderOutlinedIcon />
          </Icon> */}
      </Info>
    </Container>
    // </Link>
  );
};

export default Product;
