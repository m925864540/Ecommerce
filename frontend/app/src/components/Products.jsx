import React, { useEffect, useState } from "react";
//import { products } from "../data";
import Product from "./Product";
import styled from "styled-components";
import axios from "axios";
//import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Products = ({ category, colorAndSizeFilter, sortOptionFilter }) => {
  // console.log(category, colorAndSizeFilter, sortOptionFilter);
  const [allProducts, setAllProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(

          (category && (category != "products"))
            ? `http://localhost:8080/api/product?category=${category}`  //Get products based on category.
            : "http://localhost:8080/api/product"                       //Get all products.
        );
        setAllProducts(res.data);
      } catch {
        console.log("There is an error");
      }
    };
    getAllProducts();
  }, [category]); //run when category changes


  // Filter out each item in allProducts to see if the item contains the specific category.
  useEffect(() => {
    if (category) {
      setFilterProducts(
        allProducts.filter((item) =>
          Object.entries(colorAndSizeFilter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    }
  }, [allProducts, category, colorAndSizeFilter]);

  useEffect(()=>{

    if(sortOptionFilter==="Newest"){
      setFilterProducts(item =>
        [...item].sort((a,b)=> a.createdAt - b.createdAt) 
      )
    }else if(sortOptionFilter==="Oldest"){
      setFilterProducts(item =>
        [...item].sort((a,b)=> b.createdAt - a.createdAt) 
      )
    }else if(sortOptionFilter==="Highest Price"){
      setFilterProducts(item =>
        [...item].sort((a,b)=> b.price - a.price) 
      )
    }else {
      setFilterProducts(item =>
        [...item].sort((a,b)=> a.price - b.price) 
      )
    }
  },[sortOptionFilter])

  return (
    <Container>
      {category? filterProducts.map((item) => ( //Category is choosed.
        <Product item={item} key={item._id} />
      )) : allProducts.map((item) => (          // On home page display under category.
        <Product item={item} key={item._id} />
      ))}
    </Container>
    
  );
};

export default Products;
