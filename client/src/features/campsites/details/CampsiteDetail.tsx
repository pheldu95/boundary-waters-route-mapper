import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
  campsite: Campsite
}

export default function CampsiteDetails({ campsite }: Props) {
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
        <Button color="primary">Edit</Button>
        <Button color="inherit">Cancel</Button>
      </CardActions>
    </Card>
  )
}