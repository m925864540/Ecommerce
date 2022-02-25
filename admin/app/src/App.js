import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home';
import User from "./pages/User";
import SingleUser from "./pages/SingleUser";
import NewUser from "./pages/NewUser";
import Products from "./pages/Products";
import Analyst from "./pages/Analyst";
import SingleProduct from "./pages/SingleProduct";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<SingleUser />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/analyst" element={<Analyst />} />
      </Routes>
    </Router>
    // <div>
    //   <div><Navbar /></div>
    // </div>
  );
}

export default App;
