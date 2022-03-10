import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobileDevice } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router";
import { userRequest } from "../redux/requestMethod";
import { decreaseProductInCart, finalize, increaseProductInCart } from "../redux/shoppingCart";
import { Link } from "react-router-dom";

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
  ${mobileDevice({ margin: "10px" })};
`;
const MainCart = styled.div`
  display: flex;
  ${mobileDevice({ flexDirection: "column" })};
`;
const LeftCartContainer = styled.div`
  flex: 3;
`;
const ProductInfoContainer = styled.div`
  display: flex;
  ${mobileDevice({ height: "200px" })};
`;
const Image = styled.img`
  width: 200px;
  min-height: 200px;
  max-height: 200px;
  margin: 30px;
  object-fit: scale-down;
  ${mobileDevice({
    maxWidth: "100px",
    minHeight: "150px",
    maxHeight: "150px",
  })};
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
const ColorContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductColor = styled.div`
  margin: 5px 5px 5px 20px;
`;

const Color = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.color};
  margin-right: 5px;
  border-radius: 30%;
`;
const ProductSpecs = styled.span`
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
  ${mobileDevice({ margin: "20px" })};
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
  ${mobileDevice({ marginBottom: "10px" })};
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
  ${mobileDevice({ padding: "10px 100px" })};
`;

const Hr = styled.hr`
  background-color: #e4e4e4;
  border: none;
  height: 1px;
  margin: 0px 10px;
`;
const ShoppingCart = () => {
  //All prduct user added to cart.
  const product = useSelector((state) => state.cart);
  const tax = (product.totalPrice * 0.07).toFixed(2);

  //Get the total with tax added, and finalize it.
  const dispatch = useDispatch();
  dispatch(finalize());
  
  const stripePKey = "pk_test_51KN5XjHDd678D5d9D9WEMMjx8PrN2YIctWlRImYQ4leSyoqf7y8xweQeVrxM3siXa251CUDic6Cp1ndwdZQoyxmh00nbYLmyYb";

  const [stripeToken, setStipeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStipeToken(token);
  };

  //Call to payment route when the payment is made by client.
  useEffect(() => {
    const makeRequest = async () => {
      try {
        //Send to server, and the stripe.charges at server will return us with stripeRes.
        //res therefore equals stripeRes in server.
        //res will contain all the info we need, such as id, address.
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: product.finalPrice * 100,
        });
        // console.log("res.data is:",res.data);

        navigate("/payment/success", {
          state: { stripeData: res.data, allProducts: product }, //All user added product send.
        });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate, product]);

  //Handle decreasing/removing product in shopping cart
  const handleRemove = (id) => {
    dispatch(decreaseProductInCart(id));
  };
  //Handle increasing product unit in shopping cart
  const handleAdd = (id) => {
    dispatch(increaseProductInCart(id))
  };

  // console.log(product);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <TopBag>
          <BagTitle>YOUR BAG</BagTitle>
        </TopBag>

        <ButtonContainer>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <ContinueShoppingButton>CONTINUE SHOPPING</ContinueShoppingButton>
          </Link>
        </ButtonContainer>
        <MainCart>
          <LeftCartContainer>
            <Hr />
            {product.products.map((item) => (
              <ProductInfoContainer key={item._id}>
                <Link to={`/product/${item._id}`}>
                  <Image src={item.image} />
                </Link>
                <ProductTexts>
                  <ProductName>
                    <b>{item.title}</b>
                  </ProductName>
                  <ProductId>ID: {item._id}</ProductId>
                  <ColorContainer>
                    <ProductColor>Color:</ProductColor>
                    <Color color={item.color} />
                  </ColorContainer>
                  <ProductSpecs>Size: {item.size}</ProductSpecs>
                  <ProductSpecs>Unit Price: ${item.price}</ProductSpecs>
                </ProductTexts>
                <ProductTexts2>
                  <ProductCountContainer>
                    <Button onClick={() => handleRemove(item._id)}>
                      <Remove />
                    </Button>
                    <ProductCount>{item.itemCount}</ProductCount>
                    <Button onClick={() => handleAdd(item._id)}>
                      <Add />
                    </Button>
                  </ProductCountContainer>
                  <ProductPrice>$ {(item.price * item.itemCount).toFixed(2)}</ProductPrice>
                </ProductTexts2>
              </ProductInfoContainer>
            ))}
            ;
            <Hr />
          </LeftCartContainer>

          <RightCartContainer>
            <OrderInfoContainer>
              <OrderTitle>Order Summary</OrderTitle>
              <OrderSummaryContainer>
                <Summary>
                  <SummaryText>Subtotal:</SummaryText>
                  <SummaryPrice>$ {product.totalPrice.toFixed(2)}</SummaryPrice>
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
                  <SummaryPrice> $ {tax}</SummaryPrice>
                </Summary>
                <Summary>
                  <SummaryText total="total">Total</SummaryText>
                  <SummaryPrice total="total">
                    {" "}
                    $ {product.finalPrice}
                  </SummaryPrice>
                </Summary>
              </OrderSummaryContainer>
              <CheckoutButtonContainer>
                <StripeCheckout
                  name="store"
                  description="Test checkout"
                  billingAddress
                  shippingAddress
                  amount={product.finalPrice * 100}
                  token={onToken}
                  stripeKey={stripePKey}
                >
                  <CheckoutButton>CHECKOUT</CheckoutButton>
                </StripeCheckout>
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
