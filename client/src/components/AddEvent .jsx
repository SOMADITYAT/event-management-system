import React, { useState } from "react";
import { createEvent } from "../services/EventService";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    eventType: "",
  });
  const [success, setSuccess] = useState(false); 
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent(event);
    setSuccess(true); 
    setEvent({
      title: "",
      date: "",
      location: "",
      description: "",
      eventType: "",
    });

    setTimeout(() => {
      navigate("/"); 
    }, 2000); 
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
      {success && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
          Event added successfully!
        </div>
      )}
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
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
