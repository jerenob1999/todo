import React from "react";
import { Box, Typography, Button } from "@mui/material";

function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        color: "white",
        py: 4,
        textAlign: "center",
      }}
    >
      <Typography variant="h2" gutterBottom>
        To-Do List App
      </Typography>
      <Typography variant="h6">
        Organiza tu día, aumenta tu productividad.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 3, px: 4, fontSize: "1.2rem" }}
      >
        ¡Empieza Ahora!
      </Button>
    </Box>
  );
}

export default Header;
