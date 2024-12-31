import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "./logo";

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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo />
        <Typography variant="body2">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
