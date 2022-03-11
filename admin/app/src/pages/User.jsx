import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { DataGrid } from "@material-ui/data-grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import customer, {
  deleteCustomerFunc,
  getCustomerFunc,
} from "../redux/customer";

const ButtonIconContainer = styled.div`
  display: flex;
`;
const ButtonIcon = styled.div`
  cursor: pointer;
  margin: 5px;
  &:hover {
    transform: scale(1.1);
  }
  display: flex;
  justify-content: center;
  align-item: center;
`;
const Title = styled.h1`
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
const DashBoardTitle = styled.div`
  /* Created with https://www.css-gradient.com */
  background: #ffffff;
  background: -webkit-radial-gradient(center, #ffffff, #d8d8d8);
  background: -moz-radial-gradient(center, #ffffff, #d8d8d8);
  background: radial-gradient(ellipse at center, #ffffff, #d8d8d8);
  width: inherit;
  padding: 10px 0px 10px 20px;
  font-size: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const User = () => {
  //Getting all customers from redux.
  const customers = useSelector((state) => state.customer.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    getCustomerFunc(dispatch);
  }, []);

  console.log("Customers: ", customers);

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "username",
      headerName: "User",
      width: 150,
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "isAdmin",
      headerName: "Is Admin",
      width: 150,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <ButtonIconContainer>
            <Link
              style={{ textDecoration: "none" }}
              to={"/user/" + params.row._id}
            >
              <ButtonIcon>
                <EditIcon />
              </ButtonIcon>
            </Link>
            <ButtonIcon onClick={() => handleRemove(params.row._id)}>
              <DeleteOutlineIcon />
            </ButtonIcon>
          </ButtonIconContainer>
        );
      },
    },
  ];

  const handleRemove = (_id) => {
    customers.isAdmin === true
      ? deleteCustomerFunc(dispatch, _id)
      : alert("Admin Delete Fail.");
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: "85vw" }}>
          <DashBoardTitle>
            <Title>User List</Title>
            <Link to="/newUser" style={{ textDecoration: "none" }}>
              <CreateButton>Create User</CreateButton>
            </Link>
          </DashBoardTitle>
          <DataGrid
            rows={customers}
            columns={columns}
            getRowId={(row) => row._id}
            rowsPerPageOptions={[10]}
            pageSize={10}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
};

export default User;
