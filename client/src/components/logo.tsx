import React from "react";
import { Box, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

function Logo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AssignmentIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Taskify
      </Typography>
    </Box>
  );
}

export default Logo;
