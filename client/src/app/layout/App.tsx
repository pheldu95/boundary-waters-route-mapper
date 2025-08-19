import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import CampsiteDashboard from "../../features/campsites/dashboard/CampsiteDashboard";

function App() {
  const [campsites, setCampsites] = useState<Campsite[]>([]);

  useEffect(() => {
    axios.get<Campsite[]>('https://localhost:5001/api/campsites')
      .then(response => setCampsites(response.data));

    return () => { } //can optionally return a cleanup function here
  }, [])

  return (
    <Box sx={{bgcolor: "#eeeeee"}}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth='xl' sx={{mt: 3}}>
        <CampsiteDashboard campsites={campsites} />
      </Container>
    </Box>
  )
}

export default App
