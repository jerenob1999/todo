"use client";
import React from "react";
import {
  IconButton,
  Grid,
  Box,
  Typography,
  Collapse,
  Card,
  CardContent,
} from "@mui/material";
import { Task } from "@/types/task.types";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Checkbox from "@mui/material/Checkbox";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function TaskGrid(task: Task) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12}>
      <Card sx={{ m: 1 }}>
        <CardContent
          sx={{
            p: 2,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox checked={task.is_completed} color="primary" />
              <Typography
                variant="subtitle1"
                sx={{
                  textDecoration: task.is_completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton color="default">
                <ModeEditOutlineIcon />
              </IconButton>
              <IconButton onClick={handleExpandClick} color="error">
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
              <IconButton sx={{ ml: 2 }} color="primary">
                <DeleteOutlineIcon />
              </IconButton>
            </Box>
          </Box>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {task.description && (
              <Typography variant="body2" gutterBottom>
                <strong>Descripción:</strong> {task.description}
              </Typography>
            )}
            {task.createdAt && (
              <Typography variant="body2" gutterBottom>
                <strong>Creado el:</strong>{" "}
                {new Date(task.createdAt).toLocaleDateString()}
              </Typography>
            )}
            {task.updatedAt && (
              <Typography variant="body2">
                <strong>Última actualización:</strong>{" "}
                {new Date(task.updatedAt).toLocaleDateString()}
              </Typography>
            )}
          </Collapse>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default TaskGrid;
