import { Grid2 } from "@mui/material";
import CampsiteList from "./CampsiteList";

type Props = {
    campsites: Campsite[]
}

export default function CampsiteDashboard({campsites}: Props) {
    return (
        <Grid2 container>
            <Grid2 size={9}>
                <CampsiteList campsites={campsites}/>
            </Grid2>
        </Grid2>
    )
}