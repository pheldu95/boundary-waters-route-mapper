import { CssBaseline, List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

function App() {
  const [campsites, setCampsites] = useState<Campsite[]>([]);

  useEffect(() => {
    axios.get<Campsite[]>('https://localhost:5001/api/campsites')
    .then(response => setCampsites(response.data));
  }, [])

  return (
    <>
      <CssBaseline />
      <NavBar />
      <List>
        {campsites.map((campsite) => (
          <ListItem key={campsite.id}>
            <ListItemText>{campsite.description}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
