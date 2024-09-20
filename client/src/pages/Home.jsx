import React, { useEffect, useState } from "react";
import { getEvents } from "../services/EventService"; // Adjust the import path as necessary

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event._id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-700">
                Date: {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700">
                Time:{" "}
                {new Date(event.date).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p className="text-gray-700">Location: {event.location}</p>
              <p className="text-gray-700">Type: {event.eventType}</p>
            </div>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
