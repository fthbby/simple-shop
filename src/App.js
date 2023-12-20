import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Navbar from "./components/Navbar";
import { Button, Box, Grid } from "@mui/material";

function App() {
  return (
    <Box backgroundColor="#FFFEF9">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
