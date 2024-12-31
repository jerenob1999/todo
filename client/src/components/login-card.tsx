import React from "react";
import { Card, Typography, Button, Grid } from "@mui/material";
import Logo from "./logo";
import Image from "next/image";
import login from "../../public/login.jpg";
import { Href } from "@/types/links.types";

const LoginCard = () => {
  return (
    <Card
      sx={{
        height: 400,
        width: 900,
        maxWidth: 900,
        minWidth: 900,
        p: 1,
        m: 4,
      }}
    >
      <Grid container height={"100%"}>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <Image
            src={login}
            alt="productivity"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid container item xs={6}>
          <Grid alignSelf={"center"}>
            <Logo />
          </Grid>
          <Grid>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Organiza tu vida con facilidad. Gestiona tus tareas, colabora con
              tu equipo y mantente productivo, todo en un solo lugar.
            </Typography>
          </Grid>
          <Grid alignContent={"center"}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ textTransform: "none", fontSize: "1rem" }}
              href={Href.LOGIN}
            >
              Iniciar Sesión
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default LoginCard;
