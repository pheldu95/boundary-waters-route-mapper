import { Container, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Container sx={{ mt: 3 }}>
        <Typography variant="h3">
            Welcome to the Boundary Waters Route Mapper
        </Typography>
        <Typography variant="body1">
            This application allows you to explore and map routes in the Boundary Waters Canoe Area Wilderness. Use the navigation menu to access different features and start planning your adventure!
        </Typography>
    </Container>
  )
}