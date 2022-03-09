// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Productlist from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";
import { Login } from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  // console.log("Inside [Frontend] App: ", currentUser);


  //Prevent page rendering from bottom to top.
  const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return children || null;
  };
  
  return (
    
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={<Productlist />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/payment/success" element={<Success />} />
          <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={currentUser ? <Navigate to="/" /> : <Register />} />
        </Routes>
      </ScrollToTop>
    </Router>

  );
}

export default App;
