import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobileDevice } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div``;
const TopBag = styled.div``;

const BagTitle = styled.h1`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  font-weight: 500;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`;
const ContinueShoppingButton = styled.button`
  display: flex;
  margin: 20px 20px;
  padding: 10px;
  border: 3px solid #47464e;
  cursor: pointer;
  background-color: #1a1921;
  color: white;
  ${mobileDevice({ margin: "10px"})};
`;
const MainCart = styled.div`
  display: flex;
  ${mobileDevice({ flexDirection: "column"})};
`;
const LeftCartContainer = styled.div`
  flex: 3;
`;
const ProductInfoContainer = styled.div`
  display: flex;
  ${mobileDevice({ height: "200px"})};
`;
const Image = styled.img`
  width: 200px;
  min-height: 200px;
  max-height: 200px;
  margin: 30px;
  object-fit: scale-down;
  ${mobileDevice({ maxWidth: "100px", minHeight: "150px", maxHeight: "150px"})};
`;
const ProductTexts = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;
const ProductName = styled.span`
  margin: 20px;
  font-size: 20px;
`;
const ProductId = styled.span`
  margin: 5px 20px;
`;
const ProductColor = styled.div`
  margin: 5px 20px;
`;
const ProductSize = styled.span`
  margin: 5px 20px;
`;
const ProductTexts2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProductCountContainer = styled.div`
  display: flex;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
  background-color: white;
  font-size: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
const ProductCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const ProductPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 26px;
`;
const RightCartContainer = styled.div`
  flex: 1;
  background-color: white;
  border: 2px solid #e4e4e4;
  height: 600px;
  margin-right: 10px;
  border-radius: 2%;
  ${mobileDevice({ margin: "20px"})};
`;
const OrderInfoContainer = styled.div``;
const OrderTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  font-weight: 400;
`;
const OrderSummaryContainer = styled.div``;
const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
const SummaryText = styled.span`
  font-size: ${(props) => (props.total === "total" ? 25 : 20)}px;
  font-weight: ${(props) => (props.total === "total" ? 600 : 300)};
  margin-bottom: 20px;
`;
const SummaryPrice = styled.span`
  font-size: ${(props) => (props.total === "total" ? 25 : 20)}px;
  font-weight: ${(props) => (props.total === "total" ? 600 : 300)};
`;
const CheckoutButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobileDevice({ marginBottom: "10px"})};
`;

const CheckoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 120px;
  border: 3px solid #47464e;
  background-color: #1a1921;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s ease;
  border-radius: 20px;
  &:hover {
    transform: scale(1.01);
  }
  ${mobileDevice({ padding: "10px 100px"})};
`;

const Hr = styled.hr`
  background-color: #e4e4e4;
  border: none;
  height: 1px;
  margin: 0px 10px;
`;
const ShoppingCart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <TopBag>
          <BagTitle>YOUR BAG</BagTitle>
        </TopBag>

        <ButtonContainer>
          <ContinueShoppingButton>CONTINUE SHOPPING</ContinueShoppingButton>
        </ButtonContainer>
        <MainCart>
          <LeftCartContainer>
            <Hr />
            <ProductInfoContainer>
              <Image src="https://dresscodeimages.blob.core.windows.net/originals/605125.jpg" />
              <ProductTexts>
                <ProductName>
                  <b>Vans Shoe</b>
                </ProductName>
                <ProductId>
                  <b>ID: </b>123456
                </ProductId>
                <ProductColor>
                  <b>Color: </b>Black
                </ProductColor>
                <ProductSize>
                  <b>Size: </b>M
                </ProductSize>
              </ProductTexts>
              <ProductTexts2>
                <ProductCountContainer>
                  <Button>
                    <Add />
                  </Button>
                  <ProductCount>1</ProductCount>
                  <Button>
                    <Remove />
                  </Button>
                </ProductCountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </ProductTexts2>
            </ProductInfoContainer>
            <Hr />
            <ProductInfoContainer>
              <Image src="https://www.bhphotovideo.com/images/images2500x2500/samsonite_89576_5794_modern_utility_mini_backpack_1426828.jpg" />
              <ProductTexts>
                <ProductName>
                  <b>Backpack</b>
                </ProductName>
                <ProductId>
                  <b>ID: </b>112233
                </ProductId>
                <ProductColor>
                  <b>Color: </b>Black
                </ProductColor>
                <ProductSize>
                  <b>Size: </b>L
                </ProductSize>
              </ProductTexts>
              <ProductTexts2>
                <ProductCountContainer>
                  <Button>
                    <Add />
                  </Button>
                  <ProductCount>2</ProductCount>
                  <Button>
                    <Remove />
                  </Button>
                </ProductCountContainer>
                <ProductPrice>$ 84.99</ProductPrice>
              </ProductTexts2>
            </ProductInfoContainer>
            <Hr />
            <ProductInfoContainer>
              <Image src="https://www.80scasualclassics.co.uk/images/lacoste-t-shirt-vivid-blue-p15158-87952_image.jpg" />
              <ProductTexts>
                <ProductName>
                  <b>White T-shirt</b>
                </ProductName>
                <ProductId>
                  <b>ID: </b>011333
                </ProductId>
                <ProductColor>
                  <b>Color: </b>Blue
                </ProductColor>
                <ProductSize>
                  <b>Size: </b>S
                </ProductSize>
              </ProductTexts>
              <ProductTexts2>
                <ProductCountContainer>
                  <Button>
                    <Add />
                  </Button>
                  <ProductCount>1</ProductCount>
                  <Button>
                    <Remove />
                  </Button>
                </ProductCountContainer>
                <ProductPrice>$ 6.99</ProductPrice>
              </ProductTexts2>
            </ProductInfoContainer>
            <Hr />
            <ProductInfoContainer>
              <Image src="https://media.aws.alkosto.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/9/193905408696-1.jpg" />
              <ProductTexts>
                <ProductName>
                  <b>HP Mouse</b>
                </ProductName>
                <ProductId>
                  <b>ID: </b>338990
                </ProductId>
                <ProductColor>
                  <b>Color: </b>Black
                </ProductColor>
                <ProductSize>
                  <b>Size: </b>M
                </ProductSize>
              </ProductTexts>
              <ProductTexts2>
                <ProductCountContainer>
                  <Button>
                    <Add />
                  </Button>
                  <ProductCount>1</ProductCount>
                  <Button>
                    <Remove />
                  </Button>
                </ProductCountContainer>
                <ProductPrice>$ 37.49</ProductPrice>
              </ProductTexts2>
            </ProductInfoContainer>
          </LeftCartContainer>
          <RightCartContainer>
            <OrderInfoContainer>
              <OrderTitle>Order Summary</OrderTitle>
              <OrderSummaryContainer>
                <Summary>
                  <SummaryText>Subtotal:</SummaryText>
                  <SummaryPrice>$ 50</SummaryPrice>
                </Summary>
                <Summary>
                  <SummaryText>Estimated Shipping:</SummaryText>
                  <SummaryPrice> $ 5.99</SummaryPrice>
                </Summary>
                <Summary>
                  <SummaryText>Discount:</SummaryText>
                  <SummaryPrice> $ -5.99</SummaryPrice>
                </Summary>
                <Summary>
                  <SummaryText>Tax:</SummaryText>
                  <SummaryPrice> $ 3.27</SummaryPrice>
                </Summary>
                <Summary>
                  <SummaryText total="total">Total</SummaryText>
                  <SummaryPrice total="total"> $ 53.27</SummaryPrice>
                </Summary>
                
              </OrderSummaryContainer>
              <CheckoutButtonContainer>
              <CheckoutButton>CHECKOUT</CheckoutButton>
              </CheckoutButtonContainer>
            </OrderInfoContainer>
          </RightCartContainer>
        </MainCart>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ShoppingCart;
