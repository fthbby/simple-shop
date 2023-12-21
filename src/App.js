import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Navbar from "./components/Navbar";
import { Button, Box, Grid } from "@mui/material";
import Subscriptions from "./pages/Subscriptions/index";
import React, { useState, useEffect } from "react";

function App() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Box backgroundColor="#FFFEF9" paddingY={"5%"} paddingX={3}>
      <BrowserRouter>
        <Navbar fadeIn={fadeIn} />
        <Routes>
          <Route path="/" element={<Home  fadeIn={fadeIn}/>} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
