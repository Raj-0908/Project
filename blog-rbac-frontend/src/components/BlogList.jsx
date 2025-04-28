import { useEffect, useState } from "react";
import { getPosts } from "../services/postService";

function BlogList() {
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

  return (
    <div className="container">
      <h1 className="text-center">Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available yet.</p>
      ) : (
        posts.map((post) => (
          <div className="post-card" key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>Author: {post.authorName || "Anonymous"}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default BlogList;
