"use server";

import { TaskContainer } from "@/components/task-container";
import { Box } from "@mui/material";

export default async function GetMyProducts() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <TaskContainer />
    </Box>
  );
}
