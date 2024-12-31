import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        mt: "auto",
        py: 3,
        width: "100%",
        textAlign: "center",
        bgcolor: "primary.dark",
        color: "white",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} To-Do List App. Todos los derechos
        reservados.
      </Typography>
    </Box>
  );
}

export default Footer;
