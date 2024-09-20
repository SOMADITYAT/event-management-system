import React, { useEffect, useState } from "react";
import { getEvent } from "../services/EventService";
import { useParams } from "react-router-dom";

const ViewEvent = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      const { data } = await getEvent(id);
      setEvent(data);
    };

    fetchEvent();
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
      <p>{event.eventType}</p>
    </div>
  );
};

export default ViewEvent;
