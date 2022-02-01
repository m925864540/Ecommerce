import React from "react";
import styled from "styled-components";

//background: url("https://cdn.hipwallpaper.com/i/71/44/sLrHqS.jpg");
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://cdn.hipwallpaper.com/i/71/44/sLrHqS.jpg");
`;
const Wrapper = styled.div`
  display: flex;
  width: 350px;
  height: 350px;
  background-color: #fbfcf8;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  border-radius: 10%;
`;
const Title = styled.h1`
  font-weight: 500;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  align-items: center;
`;
const Input = styled.input`
  padding: 8px;
  margin: 5px 0;
`;
const Button = styled.button`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  cursor:pointer;
  background-color:#A88A1E;
  outline: none;
  border: none;
  padding: 10px;
  transition: all 0.5s ease;
  border-radius: 20px;

  &:hover {
    background-color: #9D811C;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="First Name"></Input>
          <Input placeholder="Last Name"></Input>
          <Input placeholder="Email"></Input>
          <Input placeholder="Password"></Input>
          <Input placeholder="Confirmed Password"></Input>
          <Button>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
