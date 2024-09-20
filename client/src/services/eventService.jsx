import axios from "axios";

const API_URL = "http://localhost:8080/api/events";

export const getEvents = () => axios.get(API_URL);
export const deleteEvent = (id) => axios.delete(`${API_URL}/${id}`);
export const createEvent = (eventData) => axios.post(API_URL, eventData);
export const updateEvent = (id, eventData) =>
  axios.put(`${API_URL}/${id}`, eventData);
