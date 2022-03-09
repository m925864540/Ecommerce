import { React, useState } from "react";
import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import { registerFunc } from "./../redux/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

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
  height: 380px;
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
  margin-top: 5px;
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
const Errors = styled.span`
  color: red;
  padding-top: 5px;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fail = useSelector((state)=>state.user.fail);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    registerFunc(dispatch, navigate, { username, email, password });
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
        <Title>Create An Account</Title>
        <Form>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          ></Input>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          ></Input>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          ></Input>
          <Button onClick={handleRegister}>Register</Button>
        </Form>
        {fail && <Errors>Something went wrong.</Errors>}
        <Link
          to={"/login"}
          style={{
            marginTop: "5px",
            marginBottom: "5px",
            marginRight: "250px",
            display: "flex",
          }}
        >
          <ArrowBackIcon />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Register;
