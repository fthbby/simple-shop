import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/index";
import Navbar from "./components/Navbar";
import { Button, Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Cart from "./pages/Cart/index";
import Work from "./pages/Work/index";
import Store from "./pages/Store/index";
import ProductDetails from "./pages/Store/ProductDetails";
import CreateProduct from "./pages/Product/CreateProduct";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <Box backgroundColor="#FFFEF9" paddingY={"5%"} paddingX={"5%"}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/work" element={<Work />} />
          <Route path="/store" element={<Store />} />

          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/register" element={<Register />} />


          <Route path="/create" element={<CreateProduct />} />

        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
