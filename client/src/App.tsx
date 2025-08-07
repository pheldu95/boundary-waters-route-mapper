import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [campsites, setCampsites] = useState<Campsite[]>([]);

  useEffect(() => {
    axios.get<Campsite[]>('https://localhost:5001/api/campsites')
    .then(response => setCampsites(response.data));
  }, [])

  return (
    <>
      <Typography variant='h3'>Route Mapper</Typography>
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
