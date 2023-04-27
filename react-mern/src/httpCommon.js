import axios from "axios";

export default axios.create({
  baseURL: "http://host.docker.internal:6061/api",
  headers: {
    "Content-type": "application/json",
  },
});
