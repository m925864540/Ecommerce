// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Productlist from "./pages/ProductList";
import SingleProduct from './pages/SingleProduct';
import Register from './pages/Register';
import { Login } from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from "./payment/Checkout";
import Success from "./payment/Success";

function App() {
  return (
    <div>
     <Checkout />
    </div>
  );
}

export default App;
