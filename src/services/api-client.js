const axios = require("axios");

const http = axios.create({
  baseURL: "http://localhost:3010",
});

export const getTours = () => {
  return http.get("/tour/list").then((response) => response.data);
};

export const createTour = (body) => {
  return http.post("/tour/new", body).then((response) => response.data);
};
