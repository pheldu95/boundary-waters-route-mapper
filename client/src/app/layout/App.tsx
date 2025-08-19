import { Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import CampsiteDashboard from "../../features/campsites/CampsiteDashboard";

function App() {
  const [campsites, setCampsites] = useState<Campsite[]>([]);

  useEffect(() => {
    axios.get<Campsite[]>('https://localhost:5001/api/campsites')
      .then(response => setCampsites(response.data));

    return () => { } //can optionally return a cleanup function here
  }, [])

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container maxWidth='xl' sx={{mt: 3}}>
        <CampsiteDashboard campsites={campsites} />
      </Container>
    </>
  )
}

export default App
