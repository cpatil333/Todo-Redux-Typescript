import { Request, Response } from "express";
import UserModel from "../models/user.model";
import bcrypt from "bcryptjs";

export const getAllUsers = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const users = await UserModel.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const createUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { username, password, email } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      username,
      password: hashPassword,
      email,
    });

    res.status(200).json({
      success: true,
      message: "User data added successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const user = await UserModel.findById({ _id: req.params.id });

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const deleteUserById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const user = await UserModel.findByIdAndDelete({ _id: req.params.id });

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const udpateUserById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { username, password, email } = req.body;

    const user = await UserModel.findById({ _id: req.params.id });
    console.log(user);

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });

      return;
    }
    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    const updateUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        username,
        password: hashedPassword,
        email,
      },
      {
        new: true,
      },
    );

    res.status(200).json({
      success: true,
      message: "User udpated successfully",
      updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
