import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginFunc } from "../redux/user";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  justify-content: center;
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
  margin-top: 30px;
  cursor: pointer;
  background-color: #a88a1e;
  outline: none;
  border: none;
  padding: 10px;
  transition: all 0.5s ease;
  border-radius: 20px;

  &:hover {
    background-color: #9d811c;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
// const Link = styled.a`
//     padding: 0 40px;
//     text-decoration: underline;
//     cursor: pointer;
// `;
const Errors = styled.span`
  color: red;
  padding-top: 5px;
`;
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fail = useSelector((state) => state.user.fail);

  //Call to user redux to login an user.
  const handleLogin = (e) => {
    e.preventDefault();
    loginFunc(dispatch, navigate, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Link
          to={"/"}
          style={{
            textDecoration: "underline",
            color: "black",
            marginBottom: "5px",
            marginRight: "250px",
            
          }}
        >
          Store
        </Link>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Button onClick={handleLogin}>Sign In</Button>
        </Form>
        {fail && <Errors>Something went wrong.</Errors>}
        <LinkContainer>
          {/* <Link to={"/login"} style={{padding: "0 40px", textDecoration: "underline", cursor: "pointer", color: "black"}}>Forgot Password?</Link> */}
          <Link
            to={"/register"}
            style={{
              padding: "0 40px",
              textDecoration: "underline",
              cursor: "pointer",
              color: "black",
            }}
          >
            Sign Up
          </Link>
        </LinkContainer>
      </Wrapper>
    </Container>
  );
};
