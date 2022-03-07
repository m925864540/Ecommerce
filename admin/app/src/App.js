import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import SingleUser from "./pages/SingleUser";
import NewUser from "./pages/NewUser";
import Products from "./pages/Products";
import Analyst from "./pages/Analyst";
import SingleProduct from "./pages/SingleProduct";
import NewProduct from "./pages/NewProduct";
import { Login } from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  // console.log("Inside [Admin] App: ", currentUser);
  const isAdmin = currentUser ? currentUser.isAdmin : "";
  // console.log("isAdmin: ", isAdmin);

  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={currentUser?<Home /> :<Navigate to="/login" />} />
         */}
        <Route exact path="/" element={<Login />} />
        {isAdmin && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/:id" element={<SingleUser />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/newProduct" element={<NewProduct />} />
            <Route path="/sales" element={<Analyst />} />
            <Route path="/transaction" element={<Analyst />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
