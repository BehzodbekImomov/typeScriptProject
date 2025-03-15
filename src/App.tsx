import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import LoginP from "./pages/Login";

import "antd/dist/reset.css";
import HomeP from "./pages/HomeP";
import CustomLayout from "./components/CustomLayout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginP />} />
        <Route path="/home" element={<CustomLayout />}>
          <Route path="/home" element={<HomeP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
