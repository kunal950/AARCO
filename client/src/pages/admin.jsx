import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import AddNews from "../component/addNews";
import AddMembers from "../component/addMembers";
import AddRetirment from "../component/addRetirment";
const admin = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Back Button */}
      <div
        className="bg-blue-900 inline-flex items-center p-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft className="text-white text-2xl" />
        <span className="ml-2 text-white text-lg hover:underline">Back</span>
      </div>
      <div className="pt-6">
        <AddNews />
      </div>
      <div className="pt-6">
        <AddMembers />
      </div>
      <div className="pt-6">
        <AddRetirment />
      </div>
    </div>
  );
};

export default admin;