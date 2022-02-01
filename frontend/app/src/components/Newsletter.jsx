import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

const Container = styled.div`
  background-color: beige;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  display: flex;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 400;
`;
const InputContainer = styled.div`
    width: 30%;
    height:40px;
    margin-top: 10px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;

const EmailInput = styled.input`
  border: none;
  display: flex;
  flex: 8;
  padding-left: 10px;
`;
const Button = styled.button`
    flex: 1;
    cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get update from your favorite product</Description>
      <InputContainer>
        <EmailInput placeholder="Email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
