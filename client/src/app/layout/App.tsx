import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

function App() {

  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        {/* Outlet is where our components that we are routing to load
          From react-router. Similary to body blocks in Twig
        */}
        <Outlet /> 
      </Container>
    </Box>
  )
}

export default App
