import { getSession } from "@auth0/nextjs-auth0";
import { Container, Grid, Typography, Box } from "@mui/material";

export default async function Home() {
  const session = await getSession();
  const user = session?.user;

  console.log(user);
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              Organización Simplificada
            </Typography>
            <Typography variant="body1">
              Crea tareas, agrúpalas por categorías y mantén todo en orden.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              Sincronización en la Nube
            </Typography>
            <Typography variant="body1">
              Accede a tus tareas desde cualquier dispositivo.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              Colabora con tu Equipo
            </Typography>
            <Typography variant="body1">
              Comparte listas con tus colegas y trabaja juntos.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
