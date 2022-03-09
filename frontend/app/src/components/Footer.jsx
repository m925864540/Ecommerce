import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import {
  ContactPhone,
  EmailOutlined,
  LinkedIn,
  Room,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import { mobileDevice } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 300px;
  background-color: black;
  ${mobileDevice({ height: "auto", flexDirection: "column" })};
`;

const Left = styled.div`
  padding: 10px;
  display: flex;
  flex: 1;
  ${mobileDevice({ display: "none" })};
`;
const ResourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const ResourceTitle = styled.h3`
  display: flex;
  width: 61%;
  margin: 20px 0px;
  color: rgba(255, 255, 255, 0.8);
`;

const ResourceList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ResourceItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Center = styled.div`
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  display: flex;
  color: rgba(255, 255, 255, 0.8);
  font-size: ${(props) => props.fontSize}px;
  justify-content: center;
  ${mobileDevice({ paddingTop: "15px" })};
`;
const Description = styled.p`
  color: rgba(255, 255, 255, 0.6);
  height: 40%;
  display: flex;
  margin-top: 10px;
  ${mobileDevice({ textAlign: "center" })};
`;
const SocialMediaIcon = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.div`
  display: flex;
  background-color: #${(props) => props.color};
  border-radius: 50%;
  margin: 0px 15px;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Right = styled.div`
  padding: 10px;
  flex: 1;
`;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const Contact = styled.div`
  display: flex;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 10px;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <ResourceContainer>
          <ResourceTitle>Useful Links</ResourceTitle>
          <ResourceList>
            <ResourceItem><Link to={"/products/man"} style={{ textDecoration: "none", color: "rgba(255, 255, 255, 0.6)" }}>Man</Link></ResourceItem>
            <ResourceItem><Link to={"/"} style={{ textDecoration: "none", color: "rgba(255, 255, 255, 0.6)" }} >Home</Link></ResourceItem>
            <ResourceItem><Link to={"/products/women"} style={{ textDecoration: "none", color: "rgba(255, 255, 255, 0.6)"}} >Women</Link></ResourceItem>
            <ResourceItem><Link to={"/cart"} style={{ textDecoration: "none", color: "rgba(255, 255, 255, 0.6)"}} >Cart</Link></ResourceItem>
            <ResourceItem><Link to={"/products/products"} style={{ textDecoration: "none", color: "rgba(255, 255, 255, 0.6)" }} >Collection</Link></ResourceItem>
            <ResourceItem>Account</ResourceItem>
            <ResourceItem>Media</ResourceItem>
            <ResourceItem>Terms</ResourceItem>
          </ResourceList>
        </ResourceContainer>
      </Left>
      <Center>
        <Title fontSize="40">Store</Title>
        <Description>
          In the constantly changing world of fashion and clothing, it's easy to
          get confused. We've got you covered. Here you'll find a list of
          must-read articles and blog posts on everything from high-end designer
          fashion to cheap and cheerful online shopping.
        </Description>
        <Title fontSize="20">Connect With Us</Title>
        <SocialMediaIcon>
          <Icon color="3B5999">
            <FacebookIcon />
          </Icon>
          <Icon color="55ACEE">
            <Twitter />
          </Icon>
          <Icon color="006192">
            <LinkedIn />
          </Icon>
          <Icon color="FF0000">
            <YouTube />
          </Icon>
        </SocialMediaIcon>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactContainer>
          <Contact>
            <Room style={{ marginRight: "10px" }} /> 123 Street,
            State, USA 12345
          </Contact>
          <Contact>
            <ContactPhone style={{ marginRight: "10px" }} /> (123) 456-7890
          </Contact>
          <Contact>
            <EmailOutlined style={{ marginRight: "10px" }} /> Minghaolin11@Gmail.com
          </Contact>
        </ContactContainer>
      </Right>
    </Container>
  );
};

export default Footer;
