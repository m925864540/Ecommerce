import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PersonIcon from "@material-ui/icons/Person";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerFunc } from "../redux/customer";

const Container = styled.div``;
const SideBySide = styled.div`
  display: flex;
`;

const UserContainer = styled.div`
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
const CreateButton = styled.button`
  display: flex;
  height: 32px;
  width: 70px;
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
  height: 550px;
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
const DashBoardTitle = styled.div`
  /* Created with https://www.css-gradient.com */
  background: #ffffff;
  background: -webkit-radial-gradient(center, #ffffff, #d8d8d8);
  background: -moz-radial-gradient(center, #ffffff, #d8d8d8);
  background: radial-gradient(ellipse at center, #ffffff, #d8d8d8);
  width: inherit;
  padding: 10px 0px 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SingleUser = () => {
  const locationThis = useLocation();
  const customerID = locationThis.pathname.split("/")[2];
  //Retrieve customer with the ID.
  const customer = useSelector((state) =>
    state.customer.customers.find((item) => item._id === customerID)
  );

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [location, setLocation] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Updating a user info.
  const handleUpdate = () =>{
    updateCustomerFunc(dispatch, navigate, customerID, firstName, lastName, email, contact, location);
  }
  return (
    <Container>
      <Navbar />
      <SideBySide>
        <Sidebar />

        <UserContainer>
          <DashBoardTitle>
            <Link
              to={"/user"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Title>
                <ArrowBackIcon />
              </Title>
            </Link>
            <Title>User</Title>
            <Link to="/newUser" style={{ textDecoration: "none" }}>
              <CreateButton>Create User</CreateButton>
            </Link>
          </DashBoardTitle>
          <UserBottomContainer>
            <LeftContainer>
              <InfoContainer>
                <Info>
                  <Username>{`${customer.firstName} ${customer.lastName}`}</Username>
                  <IconAndText>
                    <PersonIcon style={{ fontSize: "18px" }} />
                    <UserInfo>{customer.username}</UserInfo>
                  </IconAndText>
                  <IconAndText>
                    <DateRangeIcon style={{ fontSize: "18px" }} />
                    <UserInfo><label>Admin Status: </label>{customer.isAdmin ? "true" : "false"}</UserInfo>
                  </IconAndText>
                  <Hr />
                  <IconAndText>
                    <EmailIcon style={{ fontSize: "18px" }} />
                    <UserInfo>{customer.email}</UserInfo>
                  </IconAndText>
                  {customer.contact? <div><IconAndText>
                    <ContactPhoneIcon style={{ fontSize: "18px" }} />
                    <UserInfo>{customer.contact}</UserInfo>
                  </IconAndText></div> : null}
                  {customer.location? <div><IconAndText>
                    <LocationOnIcon style={{ fontSize: "18px" }} />
                    <UserInfo>{customer.location}</UserInfo>
                  </IconAndText></div> : null}
                </Info>
              </InfoContainer>
            </LeftContainer>

            <RightContainer>
              <EditContainer>
                <Info>
                  <EditTitle>Edit</EditTitle>
                  <UserInfo>First Name</UserInfo>
                  <Input onChange={e=> setFirstName(e.target.value)} placeholder={customer.firstName ? customer.firstName : "First Name..."} />
                  <UserInfo>Last Name</UserInfo>
                  <Input onChange={e=> setLastName(e.target.value)} placeholder={customer.lastName ? customer.lastName : "Last Name..."} />
                  <UserInfo>Email</UserInfo>
                  <Input onChange={e=> setEmail(e.target.value)} placeholder={customer.email} />
                  <UserInfo>Contact</UserInfo>
                  <Input onChange={e=> setContact(e.target.value)} placeholder={customer.contact ? customer.contact : "123 456 7890"} />
                  <UserInfo>Location</UserInfo>
                  <Input onChange={e=> setLocation(e.target.value)} placeholder={customer.location ? customer.location : "State, USA"} />
                </Info>
                <UpdateButton onClick={handleUpdate}>Update</UpdateButton>
              </EditContainer>
            </RightContainer>
          </UserBottomContainer>
        </UserContainer>
      </SideBySide>
    </Container>
  );
};

export default SingleUser;
