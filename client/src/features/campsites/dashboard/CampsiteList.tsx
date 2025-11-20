import { Box, Typography } from "@mui/material";
import CampsiteCard from "./CampsiteCard";
import { useCampsites } from "../../../lib/hooks/useCampsites";

export default function CampsiteList() {
  const {campsites, isPending} = useCampsites();
    
  if(!campsites || isPending) return <Typography>Loading...</Typography>
    
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {campsites.map(campsite => (
        <CampsiteCard
          key={campsite.id}
          campsite={campsite}
        />
      ))}
    </Box>
  )
}