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
import Success from './pages/Success'
import { useSelector } from "react-redux";

function App() {
  const {currentUser} = useSelector((state)=>state.user);
  console.log("Inside [Frontend] App: ", currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<Productlist />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/payment/success" element={<Success />}/>
        <Route path="/login" element= {currentUser ? <Navigate to="/" /> :<Login />}/>
        <Route path="/register" element= {currentUser ? <Navigate to="/" /> :<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
