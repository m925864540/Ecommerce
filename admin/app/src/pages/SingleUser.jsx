import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PersonIcon from "@material-ui/icons/Person";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Container = styled.div``;
const SideBySide = styled.div`
  display: flex;
`;

const UserContainer = styled.div`
  display: flex;
  width: 86vw;
  flex-direction: column;
`;
const UserTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  margin: 15px;
  margin-left: 40px;
`;
const CreateButton = styled.button`
  display: flex;
  height: 25px;
  width: 60px;
  color: white;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-color: #6d6d6d;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const UserBottomContainer = styled.div`
  display: flex;
  height: 90%;
`;
const LeftContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  width: 300px;
  height: 500px;
  ${"" /* background-color: black; */}
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  border: none;
  border-radius: 5px;
  margin: 20px 40px 40px 40px;
  display: flex;
  flex-direction: column;
`;
const Info = styled.div`
  padding: 20px;
`;

const Username = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #373737;
  margin: 10px;
`;
const IconAndText = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  align-items: center;
`;
const UserInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #373737;
  margin-left: 10px;
`;
const Hr = styled.hr`
  background-color: #575757;
  border: none;
  height: 1px;
  margin: 0px 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const RightContainer = styled.div`
  flex: 2;
`;
const EditContainer = styled.div`
  width: 600px;
  height: 500px;
  ${"" /* background-color: black; */}
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  border: none;
  border-radius: 5px;
  margin: 20px 40px 40px 40px;
  display: flex;
  flex-direction: column;
`;
const EditTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #373737;
  margin: 10px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
  margin: 20px 10px 20px 10px;
`;
const UpdateButton = styled.button`
  display: flex;
  height: 40px;
  width: 80px;
  color: white;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  background-color: #373737;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const SingleUser = () => {
  return (
    <Container>
      <Navbar />
      <SideBySide>
        <Sidebar />

        <UserContainer>
          <UserTopContainer>
            <Title>User</Title>
            <CreateButton>Create</CreateButton>
          </UserTopContainer>
          <UserBottomContainer>
            <LeftContainer>
              <InfoContainer>
                <Info>
                  <Username>Mike Lin</Username>
                  <IconAndText>
                    <PersonIcon style={{ fontSize: "18px" }} />
                    <UserInfo>m925864540</UserInfo>
                  </IconAndText>
                  <IconAndText>
                    <DateRangeIcon style={{ fontSize: "18px" }} />
                    <UserInfo>06/08/1999</UserInfo>
                  </IconAndText>
                  <Hr />
                  <IconAndText>
                    <ContactPhoneIcon style={{ fontSize: "18px" }} />
                    <UserInfo>123 456 7890</UserInfo>
                  </IconAndText>
                  <IconAndText>
                    <EmailIcon style={{ fontSize: "18px" }} />
                    <UserInfo>Mikelin@Gmail.com</UserInfo>
                  </IconAndText>
                  <IconAndText>
                    <LocationOnIcon style={{ fontSize: "18px" }} />
                    <UserInfo>Georgia, USA</UserInfo>
                  </IconAndText>
                </Info>
              </InfoContainer>
            </LeftContainer>

            <RightContainer>
              <EditContainer>
                <Info>
                  <EditTitle>Edit</EditTitle>
                  <UserInfo>Full Name</UserInfo>
                  <Input placeholder="Mike Lin" />
                  <UserInfo>Email</UserInfo>
                  <Input placeholder="Mikelin@Gmail.com" />
                  <UserInfo>Contact</UserInfo>
                  <Input placeholder="123 456 7890" />
                  <UserInfo>Address</UserInfo>
                  <Input placeholder="Georgia, USA" />
                </Info>
                <UpdateButton>Update</UpdateButton>
              </EditContainer>
            </RightContainer>
          </UserBottomContainer>
        </UserContainer>
      </SideBySide>
    </Container>
  );
};

export default SingleUser;
