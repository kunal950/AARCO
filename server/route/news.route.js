import {
  createNews,
  updateNews,
  deleteNews,
  getNews,
} from "../controller/news.controller.js";

import { verifyAdmin } from "../utils/authMiddleware.js";

import express from "express";

const router = express.Router();

router.get("/getAllNews", getNews);
router.post("/create-news", verifyAdmin, createNews);
router.put("/update-news/:id", verifyAdmin, updateNews);
router.delete("/delete-news/:id", verifyAdmin, deleteNews);

export default router;
