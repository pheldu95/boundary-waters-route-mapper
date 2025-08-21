import { Grid2 } from "@mui/material";
import CampsiteList from "./CampsiteList";
import CampsiteDetails from "../details/CampsiteDetail";
import CampsiteForm from "../form/CampsiteForm";

type Props = {
    campsites: Campsite[]
    selectCampsite: (id: string) => void;
    cancelSelectCampsite: () => void;
    selectedCampsite: Campsite | undefined
}

export default function CampsiteDashboard({
    campsites,
    cancelSelectCampsite,
    selectCampsite,
    selectedCampsite
}: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <CampsiteList
                    campsites={campsites}
                    selectCampsite={selectCampsite}
                />
            </Grid2>
            <Grid2 size={5}>
                {selectedCampsite &&
                    <CampsiteDetails
                        campsite={selectedCampsite}
                        cancelSelectCampsite={cancelSelectCampsite}
                    />
                }
                <CampsiteForm />
            </Grid2>
        </Grid2>
    )
}