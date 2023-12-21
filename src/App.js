import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Navbar from "./components/Navbar";
import { Button, Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Cart from "./pages/Cart/index";
import Work from "./pages/Work/index";
import Store from "./pages/Store/index";
import ProductDetails from "./pages/Store/ProductDetails";

function App() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);



  return (
    <Box backgroundColor="#FFFEF9" paddingY={"5%"} paddingX={"5%"}>
      <BrowserRouter>
        <Navbar fadeIn={fadeIn} />
        <Routes>
          <Route path="/" element={<Home fadeIn={fadeIn} />} />
          <Route path="/cart" element={<Cart fadeIn={fadeIn} />} />
          <Route path="/work" element={<Work fadeIn={fadeIn}/>} />
          <Route path="/store" element={<Store fadeIn={fadeIn} />} />
          <Route
            path="/product/:id"
            element={<ProductDetails fadeIn={fadeIn} />}
          />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
