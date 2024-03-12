import express from "express";
import {deleteUser, getUsersAll, insertUser, updateUser} from "./controllers/users.controller.js"
export const user_router = express.Router();

user_router.get('/users',getUsersAll);
user_router.post('/users/create',insertUser);
user_router.put('/users/update/:id',updateUser);
user_router.delete('/users/delete/:id',deleteUser)