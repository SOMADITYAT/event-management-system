import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, CalendarIcon, UserIcon } from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-gray-800 text-white">
      <div className="p-4 text-2xl font-bold">Event Manager</div>
      <nav className="flex flex-col p-4">
        <Link
          to="/"
          className="flex items-center p-2 hover:bg-gray-700 rounded-md"
        >
          <HomeIcon className="h-6 w-6 mr-2" />
          Home
        </Link>
        <Link
          to="/events"
          className="flex items-center p-2 hover:bg-gray-700 rounded-md"
        >
          <CalendarIcon className="h-6 w-6 mr-2" />
          Events
        </Link>
        <Link
          to="/users"
          className="flex items-center p-2 hover:bg-gray-700 rounded-md"
        >
          <UserIcon className="h-6 w-6 mr-2" />
          Users
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
