
import Home from "./components/Home";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Signin from "./components/Signin";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
