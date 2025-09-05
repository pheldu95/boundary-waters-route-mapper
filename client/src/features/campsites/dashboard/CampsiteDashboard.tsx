import { Grid2 } from "@mui/material";
import CampsiteList from "./CampsiteList";
import CampsiteDetail from "../details/CampsiteDetail";
import CampsiteForm from "../form/CampsiteForm";

type Props = {
    campsites: Campsite[]
    selectCampsite: (id: string) => void;
    cancelSelectCampsite: () => void;
    selectedCampsite?: Campsite;
    openForm: (id: string) => void;
    closeForm: () => void;
    editMode: boolean;
    submitForm: (campsite: Campsite) => void;
}

export default function CampsiteDashboard({
    campsites,
    cancelSelectCampsite,
    selectCampsite,
    selectedCampsite,
    openForm,
    closeForm,
    editMode,
    submitForm
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
                {selectedCampsite && !editMode && //if we have a selected campsite and we are not in edit mode
                    <CampsiteDetail
                        campsite={selectedCampsite}
                        cancelSelectCampsite={cancelSelectCampsite}
                        openForm={openForm}
                    />
                }
                {editMode &&
                    <CampsiteForm
                        closeForm={closeForm} 
                        campsite={selectedCampsite}
                        submitForm={submitForm}
                    />
                }
            </Grid2>
        </Grid2>
    )
}