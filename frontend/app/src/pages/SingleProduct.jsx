import { Add, AddShoppingCart, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobileDevice } from "../responsive";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { addProduct } from "../redux/shoppingCart";
import { useDispatch } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Container = styled.div``;
const BackButton = styled.div`
  width: 40px;
  height: 30px;
  margin: 10px;
  border: none;
  background-color: white;
  cursor: pointer;
`;
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
  height: 500px;
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
  background-color: ${(props) => props.color};
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
  margin-left: 5px;
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
const AddToCartButton = styled.button`
  margin: 20px 0px 0px 0px;
  display: flex;
  padding: 5px 25px;
  background-color: #696969;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #3b3c36;
  }
`;

const SingleProduct = () => {
  const location = useLocation();
  const productID = location.pathname.split("/")[2]; //Takes the product ID.

  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [itemCount, setItemCount] = useState(1);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/product/${productID}`
        );
        setProduct(res.data);
      } catch (e) {
        console.log("Single Product Error: ", e);
      }
    };
    getProduct();
  }, [productID]);

  const handleItemCount = (e) => {
    if (e === "remove") {
      if (itemCount === 1) {
        return;
        // setItemCount(0);
      } else {
        setItemCount(itemCount - 1);
      }
    } else {
      setItemCount(itemCount + 1);
    }
  };

  const hanldeAddToCart = () => {
    dispatch(addProduct({ ...product, itemCount, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <BackButton>
          <ArrowBackIcon onClick={() => navigate(-1)} />
      </BackButton>
      <Wrapper>
        <ProductImage>
          <Image src={product.image} />
        </ProductImage>
        <ProductInfo>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>$ {product.price}</Price>
          <ColorContainer name="color">
            <ColorText>Color:</ColorText>
            {product.color?.map((color) => (
              <Color
                color={color}
                key={color}
                onClick={() => setColor(color)}
              />
            ))}
          </ColorContainer>

          <SizeAndItemWrapper>
            <SizeContainer>
              <SizeText>Size:</SizeText>
              <SizeSelect
                name="size"
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              >
                <SizeOption disabled defaultValue={null}>
                  Size
                </SizeOption>
                {product.size?.map((size) => (
                  <SizeOption value={size} key={size}>
                    {" "}
                    {size}
                  </SizeOption>
                ))}
              </SizeSelect>
            </SizeContainer>

            <ButtonContainer>
              <Button>
                <Remove onClick={() => handleItemCount("remove")} />
              </Button>
              <ItemCount>{itemCount}</ItemCount>
              <Button>
                <Add onClick={() => handleItemCount("add")} />
              </Button>
            </ButtonContainer>
          </SizeAndItemWrapper>

          <AddToCartButton onClick={hanldeAddToCart}>
            <AddShoppingCart />
          </AddToCartButton>
        </ProductInfo>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
