import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";

import LoginP from "./pages/Login";

import "antd/dist/reset.css";
import HomeP from "./pages/HomeP";
import CustomLayout from "./components/CustomLayout";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const App: React.FC = () => {
  const { isAuthenticated}=useSelector((state:RootState)=>state.auth)
  return (
    <BrowserRouter>

    <Routes>
     <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LoginP />} />
     <Route path="/home" element={isAuthenticated ? <CustomLayout /> : <Navigate to="/" />}>
       <Route path="/home" element={<HomeP />} />
     </Route>
   </Routes>


   </BrowserRouter>
  );
};

export default App;
