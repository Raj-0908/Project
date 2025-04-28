import { useState, useEffect } from "react";
import { getPosts, deletePost } from "../services/postService";
import CreatePost from "./CreatePost";

function AdminDashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await deletePost(id);
        setPosts(posts.filter((post) => post._id !== id));
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Admin Dashboard</h1>
      
      {/* Create Post Section */}
      <CreatePost refreshPosts={() => window.location.reload()} />

      {/* Blog Posts List */}
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div className="post-card" key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>Author: {post.authorName || "Anonymous"}</small>
            <div className="admin-buttons">
              {/* Delete Button */}
              <button className="btn btn-secondary" onClick={() => handleDelete(post._id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminDashboard;
