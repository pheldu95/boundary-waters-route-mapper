import { Grid2 } from "@mui/material";
import CampsiteList from "./CampsiteList";
import CampsiteDetails from "../details/CampsiteDetails";

type Props = {
    campsites: Campsite[]
}

export default function CampsiteDashboard({campsites}: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <CampsiteList campsites={campsites}/>
            </Grid2>
            <Grid2 size={5}>
                {campsites[0] && <CampsiteDetails campsite={campsites[0]} />}
            </Grid2>
        </Grid2>
    )
}