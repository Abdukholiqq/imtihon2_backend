import { Router } from "express";

import login from "../controller/login.js";
import validate from "../middlewares/validate.js";
import post from "../controller/post.js";
import admin from "../controller/admin.js";

import chackToken from "../middlewares/chackToken.js";
const router = Router();
router.post("/login", login.Login);

router.post("/posts", validate, post.POST);
router.get("/posts", post.GetPost);
router.get("/posts/:post_id", post.Single);
router.put("/admin/posts/:post_id", chackToken, admin.PutPost);

export default router;
