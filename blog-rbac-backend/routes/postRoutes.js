const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");
const { getPosts, createPost, deletePost } = require("../controllers/postController");

router.get("/posts", getPosts);
router.post("/admin/posts", protect, authorize("admin"), createPost);
router.delete("/admin/posts/:id", protect, authorize("admin"), deletePost);

module.exports = router;
