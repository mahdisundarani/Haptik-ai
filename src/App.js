
import Home from "./components/Home/Home";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Signin from "./components/Signin";
import Contakt from "./components/Contakt/Contakt";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/login"
            element={<Login />}
          />
          <Route
            exact
            path="/signin"
            element={<Signin />}
          />
          <Route
            exact
            path="/contakt"
            element={<Contakt />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
