import axios from "axios";

export default axios.create({
  baseURL: "https://peopl-backend.vercel.app/api",
  headers: {
    "Content-type": "application/json",
  },
});
