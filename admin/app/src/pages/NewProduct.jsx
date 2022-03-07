import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useDispatch } from "react-redux";
import { createProductFunc } from "../redux/product";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";

const Container = styled.div``;
const SideBySide = styled.div`
  display: flex;
`;
const NewProductContainer = styled.div`
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
const Select = styled.select`
  margin: 5px 0px 15px 0px;
  margin-left: 100px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #aeaeae;
`;
const Option = styled.option``;
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

const NewProduct = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState("true");
  const [size, setSize] = useState([]);
  const [category, setCategory] = useState([]);
  const [color, setColor] = useState([]);

  //Seperate input size by comma.
  const handleSize = (e) => {
    setSize(e.split(","));
  };
  //Seperate input category by comma.
  const handleCategory = (e) => {
    setCategory(e.split(","));
  };
  //Seperate input color by comma.
  const handleColor = (e) => {
    setColor(e.split(","));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Upload image file to firebase, and called to redux to create a new product.
  const handleCreate = (e) => {
    e.preventDefault();

    //Add date infront of image name to make it unique.
    const imageName = new Date().getTime() + image.name;

    /**
     * Firebase setup: Monitor Upload Progress
     */
    const storage = getStorage(app);
    const storageRef = ref(storage, imageName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //Call to redux.
          createProductFunc(dispatch, navigate, name, description, downloadURL, category, size, color, price, inStock);
        });
      }
    );
    // createProductFunc(dispatch, navigate, name, description, price, inStock, image);
  };
  return (
    <Container>
      <Navbar />
      <SideBySide>
        <Sidebar />
        <NewProductContainer>
          <DashBoardTitle>
            <Link
              to={"/products"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Title>
                <ArrowBackIcon />
              </Title>
            </Link>
            <Title>Create Product</Title>
          </DashBoardTitle>
          <Wrapper>
            <InputTitle>Image</InputTitle>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type={"file"}
              style={{
                margin: "15px 0px 15px 0px",
                marginLeft: "100px",
                height: "25px",
                borderRadius: "3px",
              }}
            />
            <InputTitle>Name</InputTitle>
            <Input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name..."
            />
            <InputTitle>Description</InputTitle>
            <Input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description..."
            />
            <InputTitle>Size (Seperate by comma)</InputTitle>
            <Input
              type="text"
              onChange={(e) => handleSize(e.target.value)}
              placeholder="Ex: XS,S,M,L,XL"
            />
            <InputTitle>Category (Seperate by comma)</InputTitle>
            <Input
              type="text"
              onChange={(e) => handleCategory(e.target.value)}
              placeholder="Ex: man,woman"
            />
            <InputTitle>Color (Seperate by comma)</InputTitle>
            <Input
              type="text"
              onChange={(e) => handleColor(e.target.value)}
              placeholder="Ex: black,yellow"
            />
            <InputTitle>Price</InputTitle>
            <Input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price..."
            />
            <InputTitle>In Stock</InputTitle>
            <Select
              name="inStock"
              id="inStock"
              onChange={(e) => setInStock(e.target.value)}
            >
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
            </Select>
            <CreateButton onClick={handleCreate}>Create</CreateButton>
          </Wrapper>
        </NewProductContainer>
      </SideBySide>
    </Container>
  );
};

export default NewProduct;
