import axios from "axios";

const API_URL = "http://localhost:5000";

export async function login(email, password) {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem("token", res.data.token);
}

export async function signup(name, email, password) {
  await axios.post(`${API_URL}/signup`, { name, email, password });
}

export function logout() {
  localStorage.removeItem("token");
}
