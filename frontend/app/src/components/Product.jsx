import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const Info = styled.div`
    left:0;
    top:0;
    position: absolute;
    width: 100%;
    height:100%;
    z-index: 3;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    opacity:0;
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

  &:hover ${Info}{
    opacity:1;
  }
`;
const Circle = styled.div``;
const Image = styled.img`
  height: 80%;

`;

const Icon = styled.div`
    width:25px;
    height:25px;
    padding: 10px;
    margin-top: 10px;
    margin-left: 5px;
    border-radius: 60%;
    background-color: white;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
