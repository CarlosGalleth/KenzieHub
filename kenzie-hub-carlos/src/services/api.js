import axios from "axios";

export const api = axios.create({
  baseURL: "http://kenziehub.herokuapp.com/",
  timeout: 5000,
});
