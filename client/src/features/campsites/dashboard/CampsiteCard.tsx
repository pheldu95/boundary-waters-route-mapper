import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"
import { useCampsites } from "../../../lib/hooks/useCampsites";

type Props = {
    campsite: Campsite
    selectCampsite: (id: string) => void;
}

export default function CampsiteCard({ campsite, selectCampsite }: Props) {
    const{deleteCampsite} = useCampsites();

    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardContent>
                <Typography variant="h5">{campsite.name}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1 }}>{campsite.latitude}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1 }}>{campsite.longitude}</Typography>
                <Typography variant="body2">{campsite.description}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}>
                <Chip label={campsite.name} variant="outlined" />
                <Box display='flex' gap={3}>
                    <Button
                        onClick={() => selectCampsite(campsite.id)} size="medium" variant="contained"
                    >
                        View
                    </Button>
                    <Button
                        onClick={() => deleteCampsite.mutate(campsite.id)} 
                        disabled={deleteCampsite.isPending}
                        size="medium" 
                        variant="contained"
                        color="error"
                    >
                        Delete
                    </Button>
                </Box>
            </CardActions>
        </Card>
    )
}