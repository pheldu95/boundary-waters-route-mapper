import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import CampsiteDashboard from "../../features/campsites/dashboard/CampsiteDashboard";

function App() {
  const [campsites, setCampsites] = useState<Campsite[]>([]);
  const [selectedCampsite, setSelectedCampsite] = useState<Campsite | undefined>(undefined)
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Campsite[]>('https://localhost:5001/api/campsites')
      .then(response => setCampsites(response.data));

    return () => { } //can optionally return a cleanup function here
  }, [])

  const handleSelectCampsite = (id: string) => {
    setSelectedCampsite(campsites.find(x => x.id === id));
  }

  const handleCancelSelectCampsite = () => {
    setSelectedCampsite(undefined);
  }

  //optional id since this form is for editing or creating a campsite
  const handleOpenForm = (id?: string) => {
    if (id) handleSelectCampsite(id);
    else handleCancelSelectCampsite();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleSubmitForm = (campsite: Campsite) => {
    if (campsite.id) {
      setCampsites(campsites.map(x => x.id === campsite.id ? campsite : x))
    } else {
      const newCampsite = {...campsite, id: campsite.latitude.toString()}
      setSelectedCampsite(newCampsite);
      setCampsites([...campsites, newCampsite]);
    }
    setEditMode(false);
  }

  return (
    <Box sx={{bgcolor: "#eeeeee"}}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{mt: 3}}>
        <CampsiteDashboard 
          campsites={campsites} 
          selectCampsite={handleSelectCampsite}
          cancelSelectCampsite={handleCancelSelectCampsite}
          selectedCampsite={selectedCampsite}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleFormClose}
          submitForm={handleSubmitForm}
        />
      </Container>
    </Box>
  )
}

export default App
