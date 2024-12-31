import { Box } from "@mui/material";
import LoginCard from "@/components/login-card";

export default async function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <LoginCard />
    </Box>
  );
}
