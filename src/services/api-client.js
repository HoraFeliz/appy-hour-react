const axios = require("axios");


const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3010",
  withCredentials: true
  //"https://appy-hour-api.herokuapp.com",
})



const placesHttp = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/place/details/json",
});

export const getTours = () => {
  return http.get("/tour/list").then((response) => response.data);
};

export const getIsPlaceOpen = (id) => {
  return placesHttp
    .get(`?placeId=${id}&key=${process.env.REACT_APP_MAPS_API_KEY}`)
    .then((response) => {
      console.log("RES", response);
      return response.data;
    });
};

export const getRecommendedTours = () => {
  return http.get("/tour/list/recommended").then((response) => response.data);
};

export const getRegularTours = () => {
  return http.get("/tour/list/regular").then((response) => response.data);
};

export const getPlaces = (id) => {
  return http.get(`/places/${id}`).then((response) => response.data);
};

export const getPlace = (id) => {
  return http.get(`/place/${id}`).then((response) => response.data);
};

export const getAllPlaces = () => {
  return http.get(`/places`).then((response) => response.data);
};

export const getTourById = (id) => {
  return http.get(`/tour/${id}`).then((response) => response.data);
};

export const createTour = (body) => {
  return http.post("/tour/new", body).then((response) => response.data);
};

export const savePlace = (body, tourId) => {
  return http
    .post(`/place/new/${tourId}`, body)
    .then((response) => response.data);
};

export const loginGoogle = (user) => {
  return http.post(`/user/add`, user).then((response) => response.data);
};

export const loginUser = (user) => {
  return http.post(`/login`, user).then((response) => response.data);
};

export const createUser = (user) => {
  return http.post(`/user/create`, user).then((response) => response.data);
};

