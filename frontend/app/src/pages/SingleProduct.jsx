import { Add, AddShoppingCart, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobileDevice } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 30px;
  ${mobileDevice({ padding: "10px", flexDirection: "column" })};
`;
const ProductImage = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: scale-down;
`;
const ProductInfo = styled.div`
  flex: 1;

`;
const Title = styled.h1`
  font-weight: 400;
`;
const Description = styled.p`
  padding-top: 20px;
`;
const Price = styled.h2`
  padding: 40px 0px;
  font-weight: 300;
`;
const ColorContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ColorText = styled.h3`
  font-weight: 300;
  margin-right: 10px;
`;
const Color = styled.div`
  height: 25px;
  width: 25px;
  background-color: #${(props) => props.color};
  margin-right: 5px;
  border-radius: 30%;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const SizeAndItemWrapper = styled.div`
  display: flex;
  height: 50px;
`;
const SizeContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const SizeText = styled.h3`
  font-weight: 300;
  margin-right: 10px;
  margin-top: 20px;
`;
const SizeSelect = styled.select`
  margin-top: 20px;
  padding: 3px;
`;
const SizeOption = styled.option``;

const ButtonContainer = styled.div`
  flex: 6;
  display: flex;
  margin-top: 20px;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  background-color: white;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
const ItemCount = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
  font-weight: 400;
  border: 1px solid black;
  height: 25px;
  width: 25px;
  border-radius: 20%;
  font-size: 20px;
`;
const AddToCartButton= styled.button`
    margin: 20px 0px 0px 0px;
    display: flex;
    padding: 5px 25px;
    background-color: #696969;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: #3B3C36;
  }
`


const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ProductImage>
          <Image src="https://jannjune.com/wp-content/uploads/2018/11/BOY-T-Shirt-white.jpeg" />
        </ProductImage>
        <ProductInfo>
          <Title>White T-shirt</Title>
          <Description>
            A true workhorse of a shirt, this is the perfect choice for the man
            who's on the go. Made from 100% cotton, this shirt is durable and
            easy to care for. The sleek, classic design is perfect for any
            occasion, and the soft, comfortable fabric will keep you feeling
            fresh all day long. Whether you're wearing it with a suit or jeans,
            this shirt will go with anything.
          </Description>
          <Price>$ 6.99</Price>
          <ColorContainer>
            <ColorText>Color:</ColorText>
            <Color color="ff0000"></Color>
            <Color color="00FF00"></Color>
            <Color color="0000ff"></Color>
          </ColorContainer>
          <SizeAndItemWrapper>
            <SizeContainer>
              <SizeText>Size:</SizeText>
              <SizeSelect>
                <SizeOption disabled selected>
                  Size
                </SizeOption>
                <SizeOption>XS</SizeOption>
                <SizeOption>S</SizeOption>
                <SizeOption>M</SizeOption>
                <SizeOption>L</SizeOption>
                <SizeOption>XL</SizeOption>
              </SizeSelect>
            </SizeContainer>
            <ButtonContainer>
              <Button>
                <Remove />
              </Button>
              <ItemCount>1</ItemCount>
              <Button>
                <Add />
              </Button>
            </ButtonContainer>
          </SizeAndItemWrapper>
          <AddToCartButton>
            <AddShoppingCart/>
          </AddToCartButton>
        </ProductInfo>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
