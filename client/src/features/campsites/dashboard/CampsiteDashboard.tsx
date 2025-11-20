import { Grid2 } from "@mui/material";
import CampsiteList from "./CampsiteList";

export default function CampsiteDashboard() {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <CampsiteList/>
            </Grid2>
            <Grid2 size={5}>
                Campsite filters go here
            </Grid2>
        </Grid2>
    )
}