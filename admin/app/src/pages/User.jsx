import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { DataGrid } from "@material-ui/data-grid";
import { rows } from "../chartData.js";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Link } from "react-router-dom";

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
const User = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Username",
      headerName: "User",
      width: 150,
    },
    {
      field: "Email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "Status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <ButtonIconContainer>
            <Link style={{ textDecoration: "none" }} to={"/user/"+params.row.id}>
              <ButtonIcon>
                <EditIcon />
              </ButtonIcon>
            </Link>
            <ButtonIcon onClick={()=>handleRemove(params.row.id)}>
              <DeleteOutlineIcon />
            </ButtonIcon>
          </ButtonIconContainer>
        );
      },
    },
  ];

  const [data, setData]= useState(rows);
  const handleRemove = (id) =>{
    setData(data.filter((item)=>(
      item.id !== id
    )))
  }

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: "85vw", margin: "5px" }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
};

export default User;
