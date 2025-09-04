import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";

type Props ={
  campsite?: Campsite
  closeForm: () => void
}

export default function CampsiteForm({campsite, closeForm}: Props) {
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //prevents browser reload on submit
    
    const formData =  new FormData(event.currentTarget);

    //the name of each key come from the "name" property on each textfield
    const data: {[key: string]: FormDataEntryValue} = {}
    formData.forEach((value, key) => {
      data[key] = value;
    })

    console.log(data);
  }
  
  return (
    <Paper sx={{borderRadius: 3, padding: 3}}>
        <Typography variant="h5" gutterBottom color="primary">
            Add Campsite
        </Typography>
        <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3}>
            <TextField name='name' label='Name' value={campsite?.name}/>
            <TextField name='latitude' label='Latitude' value={campsite?.latitude}/>
            <TextField name='longitude' label='Longitude' value={campsite?.longitude}/>
            <TextField name='description' label='Description' value={campsite?.description} multiline rows={3}/>
            <TextField name='url' label='Url' value={campsite?.url}/>
            <Box display='flex' justifyContent='end' gap={3}>
                <Button onClick={closeForm} color='inherit'>Cancel</Button>
                <Button type="submit" color='success' variant="contained">Submit</Button>
            </Box>
        </Box>
    </Paper>
  )
}