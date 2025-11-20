import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link, useNavigate } from "react-router";

export default function CampsiteDetails() {
  const navigate = useNavigate();
  const campsite = {} as Campsite;

  if(!campsite) return <Typography>Loading...</Typography>

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component='img'
        src={`/images/random_lake.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{campsite.name}</Typography>
        <Typography variant="subtitle1">{campsite.latitude}, {campsite.longitude}</Typography>
        <Typography variant="body1">{campsite.description}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/campsites/${campsite.id}`} onClick={() => openForm(campsite.id)}color="primary">Edit</Button>
        <Button onClick={() => navigate('/campsites')} color="inherit">Cancel</Button>
      </CardActions>
    </Card>
  )
}