import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Container = styled.div``;
const SideBySide = styled.div`
  display: flex;
`;
const Analyst = () => {
  return (
    <Container>
      <Navbar />
      <SideBySide>
        <Sidebar />
      </SideBySide>
    </Container>
  );
};

export default Analyst;
