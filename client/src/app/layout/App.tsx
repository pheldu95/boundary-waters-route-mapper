import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";
import CampsiteDashboard from "../../features/campsites/dashboard/CampsiteDashboard";
import { useCampsites } from "../../lib/hooks/useCampsites";

function App() {
  const [selectedCampsite, setSelectedCampsite] = useState<Campsite | undefined>(undefined)
  const [editMode, setEditMode] = useState(false);
  const {campsites, isPending} = useCampsites();

  const handleSelectCampsite = (id: string) => {
    setSelectedCampsite(campsites!.find(x => x.id === id));
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
    // if (campsite.id) {
    //   setCampsites(campsites.map(x => x.id === campsite.id ? campsite : x))
    // } else {
    //   const newCampsite = {...campsite, id: campsite.latitude.toString()}
    //   setSelectedCampsite(newCampsite);
    //   setCampsites([...campsites, newCampsite]);
    // }
    console.log(campsite);

    setEditMode(false);
  }

  const handleDelete = (id: string) => {
    console.log(id);
  }

  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: "100vh" }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        {!campsites || isPending ? (
          <Typography>Loading...</Typography>
        ) : (
          <CampsiteDashboard
            campsites={campsites}
            selectCampsite={handleSelectCampsite}
            cancelSelectCampsite={handleCancelSelectCampsite}
            selectedCampsite={selectedCampsite}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleFormClose}
            submitForm={handleSubmitForm}
            deleteCampsite={handleDelete}
          />
        )}
      </Container>
    </Box>
  )
}

export default App
