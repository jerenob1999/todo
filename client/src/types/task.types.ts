export interface Task {
  id: string;
  is_completed: boolean;
  title: string;
  description?: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
