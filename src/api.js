import axios from "axios";

export const API = axios.create({
  baseUrl: "http://localhost:8000/api",
});

// request -> enviar informacion
// response -> recibir informacion
API.inrercectors.request.use((config) => {
  const jwt = localStorage.getItem("auth") ?? "";
  config.headers["Autorization"] = jwt;
  return config;
});
