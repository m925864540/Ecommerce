import React from "react";
import Mainbar from "../components/Mainbar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Mainbar />
      </div>
    </div>
  );
};

export default Home;
