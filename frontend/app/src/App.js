// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Productlist from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";
import { Login } from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";
//import Checkout from "./payment/Checkout";
//import Success from "./payment/Success";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<Productlist />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/login" element= {user ? <Navigate to="/" /> :<Login />}/>
        <Route path="/register" element= {user ? <Navigate to="/" /> :<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
