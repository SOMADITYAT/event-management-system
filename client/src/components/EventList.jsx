import React, { useEffect, useState } from "react";
import { getEvents, deleteEvent } from "../services/EventService";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const EventList = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await getEvents();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    await deleteEvent(id);
    setEvents(events.filter((event) => event._id !== id)); // Update the state
  };

  const handleEdit = (id) => {
    navigate(`/edit-event/${id}`); // Navigate to edit page
  };

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-bold">Event List</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 border-b">Title</th>
            <th className="py-2 border-b">Date</th>
            <th className="py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id} className="hover:bg-gray-100">
              <td className="py-2 border-b">{event.title}</td>
              <td className="py-2 border-b">
                {new Date(event.date).toLocaleString()}
              </td>
              <td className="py-2 border-b">
                <button
                  className="text-blue-600"
                  onClick={() => handleEdit(event._id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-600 ml-2"
                  onClick={() => handleDelete(event._id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
