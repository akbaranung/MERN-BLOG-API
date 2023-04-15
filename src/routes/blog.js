const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const blogController = require("../controllers/blog");

// [POST] : /v1/blog/post
router.post(
  "/post",
  [
    body("title").isLength({ min: 5 }).withMessage("Title min 5 karakter"),
    body("body").isLength({ min: 5 }).withMessage("Body min 5 karakter"),
  ],
  blogController.createBlogPost
);

// Get All Blog Post
router.get("/posts", blogController.getAllBlogPosts);
// Get Blog Post by Id
router.get("/post/:postId", blogController.getBlogPostById);
// Update Blog Post
router.put(
  "/post/:postId",
  [
    body("title").isLength({ min: 5 }).withMessage("Title min 5 karakter"),
    body("body").isLength({ min: 5 }).withMessage("Body min 5 Karakter"),
  ],
  blogController.updateBlogPost
);
// Delete Blog Post
router.delete("/post/:postId", blogController.deleteBlogPost);

module.exports = router;
