import axios from "axios";

const API_URL = "http://localhost:5000";

function getAuthHeader() {
  const token = localStorage.getItem("token");
  return { headers: { Authorization: `Bearer ${token}` } };
}

export async function getPosts() {
  const res = await axios.get(`${API_URL}/posts`);
  return res.data;
}

export async function createPost(title, content) {
  await axios.post(`${API_URL}/admin/posts`, { title, content }, getAuthHeader());
}

export async function deletePost(id) {
  await axios.delete(`${API_URL}/admin/posts/${id}`, getAuthHeader());
}
