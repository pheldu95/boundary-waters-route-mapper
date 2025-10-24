import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";
import { useCampsites } from "../../../lib/hooks/useCampsites";

type Props ={
  campsite?: Campsite;
  closeForm: () => void;
}

export default function CampsiteForm({campsite, closeForm}: Props) {
  const {updateCampsite} = useCampsites();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //prevents browser reload on submit
    
    const formData =  new FormData(event.currentTarget);

    //the name of each key come from the "name" property on each textfield
    const data: {[key: string]: FormDataEntryValue} = {}
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (campsite) {
      data.id = campsite.id;
      await updateCampsite.mutateAsync(data as unknown as Campsite);
      closeForm();
    }
  }
  
  return (
    <Paper sx={{borderRadius: 3, padding: 3}}>
        <Typography variant="h5" gutterBottom color="primary">
            Add Campsite
        </Typography>
        <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3}>
            <TextField name='name' label='Name' defaultValue={campsite?.name}/>
            <TextField name='latitude' label='Latitude' defaultValue={campsite?.latitude}/>
            <TextField name='longitude' label='Longitude' defaultValue={campsite?.longitude}/>
            <TextField name='description' label='Description' defaultValue={campsite?.description} multiline rows={3}/>
            <TextField name='url' label='Url' defaultValue={campsite?.url}/>
            <Box display='flex' justifyContent='end' gap={3}>
                <Button onClick={closeForm} color='inherit'>Cancel</Button>
                <Button 
                  type="submit" 
                  color='success' 
                  variant="contained"
                  disabled={updateCampsite.isPending} //disable after clicking submit
                >Submit</Button>
            </Box>
        </Box>
    </Paper>
  )
}