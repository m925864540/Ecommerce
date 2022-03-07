import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { deleteProductFunc, getProductFunc } from "../redux/product";
import { useDispatch, useSelector } from "react-redux";

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
const ImageContainer = styled.div`
  height: 50px;
  width: 50px;
`;
const Image = styled.img`
  height: 50px;
  width: 50px;
`;

const Products = () => {
  //Getting all product from redux.
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    getProductFunc(dispatch);
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "title",
      headerName: "Product",
      width: 150,
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => {
        return (
          <ImageContainer>
            <Image src={params.row.image} alt="product picture"></Image>
          </ImageContainer>
        );
      },
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
    },
    {
      field: "price",
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
              to={"/product/" + params.row._id}
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
    deleteProductFunc(dispatch, _id);
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
            rows={products}
            columns={columns}
            // rowsPerPageOptions={5}
            rowsPerPageOptions={[10]}
            getRowId={(row) => row._id}
            pageSize={10}
            checkboxSelection
            disableSelectionOnClick
          />
        </Wrapper>
      </SideBySide>
    </Container>
  );
};

export default Products;
