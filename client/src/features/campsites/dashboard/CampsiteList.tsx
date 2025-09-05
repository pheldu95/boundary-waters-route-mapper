import { Box } from "@mui/material";
import CampsiteCard from "./CampsiteCard";

type Props = {
  campsites: Campsite[]
  selectCampsite: (id: string) => void;
  deleteCampsite: (id: string) => void;
}

export default function CampsiteList({ campsites, selectCampsite, deleteCampsite }: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {campsites.map(campsite => (
        <CampsiteCard
          key={campsite.id}
          campsite={campsite}
          selectCampsite={selectCampsite}
          deleteCampsite={deleteCampsite}
        />
      ))}
    </Box>
  )
}