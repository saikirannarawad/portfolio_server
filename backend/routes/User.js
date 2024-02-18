import express from "express";
import {
  login,
  logout,
  getUser,
  myProfile,
  contact,
  updateUser,
  addTimeline,
  addProject,
  deleteTimeline,
  deleteProject,
} from "../controller/User.js";
import { isAuthenticated } from "../middlewares/auth.js";



export const userRouter = express.Router();

userRouter.route("/login").post(login);

userRouter.route("/logout").get(logout);

userRouter.route("/user").get(getUser);

userRouter.route("/me").get(isAuthenticated, myProfile);

userRouter.route("/admin/update").put(updateUser);

userRouter.route("/admin/timeline/add").post(addTimeline);
userRouter.route("/admin/project/add").post(addProject);

userRouter.route("/admin/timeline/:id").delete(deleteTimeline);
userRouter.route("/admin/project/:id").delete(deleteProject);

userRouter.route("/contact").post(contact);
