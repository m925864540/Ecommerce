import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { slideItems } from "../data";
import { mobileDevice } from "../responsive";

//100vh- full screen slider.
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobileDevice({display: "none"})};
`;
const Arrow = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index:2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.index * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 30px;
  font-weight: 500;
`;
// const Button = styled.button`
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
// `;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ChevronLeft />
      </Arrow>
      <Wrapper index={slideIndex}>
        {slideItems.map((item, idx) => (
          <Slide bg={item.bg} key={idx}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ChevronRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
