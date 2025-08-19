import { Container, CssBaseline, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

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
        <List>
          {campsites.map((campsite) => (
            <ListItem key={campsite.id}>
              <ListItemText>{campsite.description}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  )
}

export default App
