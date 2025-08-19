import { Grid2, List, ListItem, ListItemText } from "@mui/material";

type Props = {
    campsites: Campsite[]
}

export default function CampsiteDashboard({campsites}: Props) {
    return (
        <Grid2 container>
            <Grid2 size={9}>
                <List>
                    {campsites.map((campsite) => (
                        <ListItem key={campsite.id}>
                            <ListItemText>{campsite.description}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Grid2>
        </Grid2>
    )
}