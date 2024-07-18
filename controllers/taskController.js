import { Task } from "../models/taskModel.js";
//import { StatusCodes } from "http-status-codes";
import asyncWrapper from "../middleware/asyncWrapper.js";

export const getTask = async (req, res) => {
  const tasks = await Task.find();
  res.status(StatusCodes.OK).json(tasks);
};

export const addTask = asyncWrapper(async (req, res) => {
     await Task.create(req.body);
  res.status(200).json({ msg: "task is added" });
});

export const showAllTask = async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);
  res.status(200).json(task);
};

export const updateTask = async (req, res) => {
  const id = req.params.id;
  const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(task);
};

export const removeTask = async (req, res) => {
  const id = req.params.id;
  await Task.findByIdAndDelete(id);
  res.status(StatusCodes.OK).json({ msg: "task is deleted" });
};


// export const addTask= (req,res)=>{
//   try {
//     await Task.create(req.body);
//   } catch (error) {
    
//   }
//   res.send("add task");
// };

// export const getTask= (req,res)=>{
//   res.send("get a task");
// };

// export const updateTask= (req,res)=>{
//   res.send("update task");
// };

// export const removeTask= (req,res)=>{
//   res.send("remove task");
// };

// export const showAllTask= (req,res)=>{
//   res.send("show all task");
// };