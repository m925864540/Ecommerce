import React from 'react';
import styled from 'styled-components';

const Container= styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
    font-weight: bold;
`
const Announcement = () => {
  return (
    <Container>
        Free Shipping!
    </Container>
  )
};

export default Announcement;
