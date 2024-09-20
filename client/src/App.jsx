import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import AddEvent from "./components/AddEvent ";
import EventList from "./components/EventList";
import Home from "./pages/Home";
// import EditEvent from "./components/EditEvent";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/add-event" element={<AddEvent />} />
          {/* <Route path="/edit-event/:id" element={<EditEvent />} /> */}
        </Routes>
      </div>
    </Router>
  );
};
export default App;
