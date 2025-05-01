const Post = require("../models/Post");

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "name");
  res.json(posts);
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({ title, content, author: req.user._id });
  await post.save();
  res.status(201).json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  await post.remove();
  res.json({ message: "Post deleted" });
};
