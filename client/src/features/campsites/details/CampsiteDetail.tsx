import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link, useNavigate, useParams } from "react-router";
import { useCampsites } from "../../../lib/hooks/useCampsites";

export default function CampsiteDetails() {
  const navigate = useNavigate();
  const {id} = useParams();
  const {campsite, isLoadingCampsite} = useCampsites(id);

  if(isLoadingCampsite) return <Typography>Loading...</Typography>

  if(!campsite) return <Typography>Campsite not found</Typography>

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
        <Button component={Link} to={`/manage/${campsite.id}`} color="primary">Edit</Button>
        <Button onClick={() => navigate('/campsites')} color="inherit">Cancel</Button>
      </CardActions>
    </Card>
  )
}