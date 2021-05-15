import express from "express";
import {getUsers,postUser,deleteById,updateUserById} from "../controller/user.js";

const router = express.Router();

router.get("/",getUsers);
router.post("/",postUser);
router.delete("/:id",deleteById);
router.patch("/:id",updateUserById);

export default router;