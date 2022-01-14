import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import ImgF from "./Pages/ImgF";
import ImgL from "./Pages/ImgL";
import ImgR from "./Pages/ImgR";
import Regform from "./Pages/Regform";

const Routess = () => {
  const { userDetails } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={userDetails.email ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" exact element={<Login />} />
        {/* <Route path="/registerr" exact element={<Register />} /> */}
        <Route path="/register">
          <Route path="imgF" element={<ImgF />} />
          <Route path="imgL" element={<ImgL />} />
          <Route path="imgR" element={<ImgR />} />
          <Route path="regForm" element={<Regform />} />
        </Route>
        <Route
          path="/profile"
          exact
          element={userDetails.email ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routess;
