import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Navbar from "./components/Navbar";
import { Button, Box, Grid } from "@mui/material";
import Subscriptions from "./pages/Subscriptions/index";


function App() {
  return (
    <Box backgroundColor="#FFFEF9" paddingY={5} paddingX={5}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
