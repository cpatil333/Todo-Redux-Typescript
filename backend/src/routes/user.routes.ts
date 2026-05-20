import { Router } from "express";
import {
  createUser,
  udpateUserById,
  deleteUserById,
  getAllUsers,
  getUserById,
} from "../controllers/user.controller";

const router = Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/:id", udpateUserById);
router.delete("/:id", deleteUserById);

export default router;
