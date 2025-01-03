import React from "react";
import { Grid, Card } from "@mui/material";
import TaskGrid from "./task-grid";

export const tasks: Task[] = [
  {
    id: "1",
    is_completed: false,
    title: "Completar reporte mensual",
    description: "Generar y enviar el reporte del mes a la gerencia",
    userId: "user_123",
    createdAt: new Date("2025-01-01T10:00:00Z"),
    updatedAt: new Date("2025-01-01T12:00:00Z"),
  },
  {
    id: "2",
    is_completed: true,
    title: "Revisar tareas pendientes",
    userId: "user_123",
    createdAt: new Date("2024-12-31T09:00:00Z"),
  },
  {
    id: "3",
    is_completed: false,
    title: "Preparar presentación",
    description: "Diseñar la presentación para la reunión del viernes",
    userId: "user_456",
    createdAt: new Date("2025-01-02T08:30:00Z"),
    updatedAt: new Date("2025-01-02T09:15:00Z"),
  },
  {
    id: "4",
    is_completed: true,
    title: "Actualizar documentación",
    description: "Revisar y actualizar los manuales de usuario",
    userId: "user_789",
    createdAt: new Date("2024-12-28T15:00:00Z"),
    updatedAt: new Date("2024-12-29T18:00:00Z"),
  },
  {
    id: "5",
    is_completed: false,
    title: "Planificar sprint",
    userId: "user_123",
    createdAt: new Date("2025-01-01T11:00:00Z"),
  },
];

export function TaskContainer() {
  return (
    <Card sx={{ maxWidth: 800, margin: "auto", padding: 2 }}>
      <Grid container>
        {tasks.map((task) => (
          <TaskGrid key={task.id} {...task} />
        ))}
      </Grid>
    </Card>
  );
}
