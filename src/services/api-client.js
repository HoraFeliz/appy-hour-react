const axios = require("axios");

const http = axios.create({
  baseURL: "http://localhost:3010",
});

export const getTours = () => {
  return http.get("/tour/list").then((response) => response.data);
};

export const getPlaces = (id) => {
  return http.get(`/places/${id}`).then((response) => response.data);
};

export const getAllPlaces = (id) => {
  return http.get(`/places`).then((response) => response.data);
};

export const getTourById = (id) => {
  return http.get(`/tour/${id}`).then((response) => response.data);
};

export const createTour = (body) => {
  return http.post("/tour/new", body).then((response) => response.data);
};

export const savePlace = (body) => {
  return http.post("/place/new", body).then((response) => response.data);
};
