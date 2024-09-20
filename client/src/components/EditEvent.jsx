import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEvent, updateEvent } from "../services/EventService";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    eventType: "",
  });

  useEffect(() => {
    const fetchEvent = async () => {
      const { data } = await getEvent(id);
      setEvent(data);
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevState) => ({ ...prevState, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await updateEvent(id, event);
  //   navigate("/events");
  // };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="border border-gray-300 p-2 w-full rounded"
            value={event.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="date"
            name="date"
            className="border border-gray-300 p-2 w-full rounded"
            value={event.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="border border-gray-300 p-2 w-full rounded"
            value={event.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="description"
            placeholder="Description"
            className="border border-gray-300 p-2 w-full rounded"
            value={event.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="eventType"
            placeholder="Event Type"
            className="border border-gray-300 p-2 w-full rounded"
            value={event.eventType}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Update Event
        </button>
      </form>
    </div>
  );
};

export default EditEvent;
