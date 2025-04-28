import { useState } from "react";
import { createPost } from "../services/postService";

function CreatePost({ refreshPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(title, content);
      setTitle("");
      setContent("");
      refreshPosts();
    } catch (err) {
      alert("Failed to create post");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Post</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePost;
