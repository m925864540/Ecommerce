import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home';
import User from "./pages/User";
import SingleUser from "./pages/SingleUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<SingleUser />} />
      </Routes>
    </Router>
    // <div>
    //   <div><Navbar /></div>
    // </div>
  );
}

export default App;
