import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { productRows } from "../chartData.js";

const Container = styled.div``;
const SideBySide = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  width: 85vw;
`;
const UserTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
const DashBoardTitle = styled.h1`
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

const Products = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Product",
      headerName: "Product",
      width: 150,
    },
    {
      field: "Stock",
      headerName: "Email",
      width: 150,
    },
    {
      field: "Status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "Price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <ButtonIconContainer>
            <Link
              style={{ textDecoration: "none" }}
              to={"/product/" + params.row.id}
            >
              <ButtonIcon>
                <EditIcon />
              </ButtonIcon>
            </Link>
            <ButtonIcon onClick={() => handleRemove(params.row.id)}>
              <DeleteOutlineIcon />
            </ButtonIcon>
          </ButtonIconContainer>
        );
      },
    },
  ];

  const [data, setData] = useState(productRows);
  const handleRemove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <Navbar />
      <SideBySide>
        <Sidebar />
        <Wrapper>
          <DashBoardTitle>
            <Title>Product List</Title>
            <Link to="/newProduct" style={{ textDecoration: "none" }}>
              <CreateButton>Create Product</CreateButton>
            </Link>
          </DashBoardTitle>
          <DataGrid
            rows={data}
            columns={columns}
            // rowsPerPageOptions={5}
            pageSize={8}
            checkboxSelection
            disableSelectionOnClick
          />
        </Wrapper>
      </SideBySide>
    </Container>
  );
};

export default Products;
