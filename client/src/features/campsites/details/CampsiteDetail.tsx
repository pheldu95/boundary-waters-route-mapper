import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useCampsites } from "../../../lib/hooks/useCampsites"

type Props = {
  selectedCampsite: Campsite
  cancelSelectCampsite: () => void
  openForm: (id: string) => void
}

export default function CampsiteDetails({ selectedCampsite, cancelSelectCampsite, openForm }: Props) {
  const {campsites} = useCampsites(); //temporary fix for selected campsite not updating after you edit it
  const campsite = campsites?.find(x => x.id === selectedCampsite.id);

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
        <Button onClick={() => openForm(campsite.id)}color="primary">Edit</Button>
        <Button onClick={cancelSelectCampsite} color="inherit">Cancel</Button>
      </CardActions>
    </Card>
  )
}