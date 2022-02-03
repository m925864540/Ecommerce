import React from 'react';
import {category} from "../data"
import styled from 'styled-components';
import CategoryItem from './CategoryItem'
import { mobileDevice } from './../responsive';


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobileDevice({flexDirection: "Column"})};
`;
const Categories = () => {
  return (
      <Container>
        {category.map((item)=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
      </Container>
  )
};

export default Categories;
