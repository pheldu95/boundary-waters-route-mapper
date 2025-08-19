import { Button, Card, CardActions, CardContent, Chip, Link, Typography } from "@mui/material"

type Props = {
    campsite: Campsite
}

export default function CampsiteCard({ campsite }: Props) {
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardContent>
                <Typography variant="h5">{campsite.name}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1 }}>{campsite.latitude}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1 }}>{campsite.longitude}</Typography>
                <Typography variant="body2">{campsite.description}</Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'space-between', pb: 2}}>
                <Chip label={campsite.name} variant="outlined" />
                <Button size="medium" variant="contained">View</Button>
            </CardActions>
        </Card>
    )
}