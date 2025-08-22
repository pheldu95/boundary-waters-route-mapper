import { Box, Button, Paper, TextField, Typography } from "@mui/material";

type Props ={
  campsite?: Campsite
  closeForm: () => void
}

export default function CampsiteForm({campsite, closeForm}: Props) {
  return (
    <Paper sx={{borderRadius: 3, padding: 3}}>
        <Typography variant="h5" gutterBottom color="primary">
            Add Campsite
        </Typography>
        <Box component='form' display='flex' flexDirection='column' gap={3}>
            <TextField label='Name' value={campsite?.name}/>
            <TextField label='Latitude'/>
            <TextField label='Longitude'/>
            <TextField label='Description' multiline rows={3}/>
            <TextField label='Url'/>
            <Box display='flex' justifyContent='end' gap={3}>
                <Button onClick={closeForm} color='inherit'>Cancel</Button>
                <Button color='success' variant="contained">Submit</Button>
            </Box>
        </Box>
    </Paper>
  )
}