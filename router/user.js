import express from "express";
import {getUsers,postUser,deleteUserById,updateUserById} from "../controller/user.js";

const router = express.Router();

router.get("/",getUsers);
router.post("/",postUser);
router.delete("/:id",deleteUserById);
router.patch("/:id",updateUserById);

export default router;