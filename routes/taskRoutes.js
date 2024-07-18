import express from "express"
import { addTask, 
  getTask,
  removeTask,
  showAllTask,
updateTask, } from "../controllers/taskController.js";
const taskRoutes = express.Router();

taskRoutes.route('/').get(showAllTask).post(addTask);
taskRoutes.route('/:id').get(getTask).patch(updateTask).delete(removeTask);

export default taskRoutes;


