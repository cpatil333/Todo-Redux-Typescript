import { Request, Response } from "express";
import { TotoModel } from "../models/todo.model";

//Create todo
export const createTodo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { title, completed, user } = req.body;
    console.log(req.body);

    const todo = await TotoModel.create({
      title,
      completed,
      user,
    });

    if (!todo) {
      res.status(400).json({
        success: false,
        message: "Data failed",
      });
    }
    res.status(200).json({
      success: true,
      message: "Todo created successfully..!",
      todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
};

//Get All todos
export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await TotoModel.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    });
  }
};

//get single Todo
export const getTodoById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const todo = await TotoModel.findById(req.params.id);

    if (!todo) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });

      return;
    }

    res.status(200).json({
      success: true,
      todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    });
  }
};

//Update Todo
export const updateTodo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { title, completed, user } = req.body;

    const findTodo = await TotoModel.findById({_id:req.params.id});
    
    if (!findTodo) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
      return;
    }

    const todo = await TotoModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        completed,
        user,
      },
      {
        new: true,
      },
    );

    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    });
  }
};

//Delete todos
export const deleteTodo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const todo = await TotoModel.findByIdAndDelete(req.params.id, req.body);

    if (!todo) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    });
  }
};
