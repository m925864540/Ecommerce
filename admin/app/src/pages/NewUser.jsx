import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useDispatch } from "react-redux";
import { createCustomerFunc } from "../redux/customer";

const Container = styled.div``;
const SideBySide = styled.div`
  display: flex;
`;
const NewUserContainer = styled.div`
  display: flex;
  width: 86vw;
  flex-direction: column;
`;
const Title = styled.h1`
  display: flex;
  margin-right: 30px;
  color: #252525;
  font-weight: 500;
  font-size: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 50vw;
  flex-direction: column;
  margin-top: 30px;
`;
const InputTitle = styled.span`
  margin: 15px 0px 5px px;
  margin-left: 100px;
  font-weight: 400;
  color: #888888;
`;
const Input = styled.input`
  margin: 5px 0px 15px 0px;
  margin-left: 100px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #aeaeae;
`;
const CreateButton = styled.button`
  display: flex;
  height: 32px;
  width: 80px;
  color: black;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  background-color: #6d6d6d;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 350px;
  margin-top: 20px;
  transition: all 0.5s ease;
  &:hover {
    ${"" /* transform: scale(1.05); */}
    font-weight: 700;
    color: black;
    font-size: 14px;
  }
`;
const DashBoardTitle = styled.div`
  /* Created with https://www.css-gradient.com */
  background: #ffffff;
  background: -webkit-radial-gradient(center, #ffffff, #d8d8d8);
  background: -moz-radial-gradient(center, #ffffff, #d8d8d8);
  background: radial-gradient(ellipse at center, #ffffff, #d8d8d8);
  width: inherit;
  padding: 10px 0px 10px 20px;
  display: flex;
  align-items: center;
`;
const NewUser = () => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreate = (e) =>{
    e.preventDefault();

    createCustomerFunc(dispatch, navigate, email, username, password);
  }

  return (
    <Container>
      <Navbar />
      <SideBySide>
        <Sidebar />

        <NewUserContainer>
          <DashBoardTitle>
            {/* <NavContainer> */}
              <Link
                to={"/user"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Title>
                  <ArrowBackIcon />
                </Title>
              </Link>
              <Title>Create User</Title>
            {/* </NavContainer> */}
          </DashBoardTitle>
          <Wrapper>
            <InputTitle>Email</InputTitle>
            <Input type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email..."/>
            <InputTitle>Username</InputTitle>
            <Input type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username..."/>
            <InputTitle>Password</InputTitle>
            <Input type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password..."/>
            <CreateButton onClick={handleCreate}>Create</CreateButton>
          </Wrapper>
        </NewUserContainer>
      </SideBySide>
    </Container>
  );
};

export default NewUser;
