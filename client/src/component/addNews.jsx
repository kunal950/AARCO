import React, { useState } from "react";
import { addNewsRoute } from "../utils/ApiRoutes";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const addNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!title) validationErrors.title = "Title is required.";
    if (!content) validationErrors.content = "Content is required.";
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Add logic to send the data to the backend
    try {
      const response = axios.post(
        addNewsRoute,
        { title, content },
        { withCredentials: true }
      );
      setTitle("");
      setContent("");
      setErrors({});
      setMessage("News added successfully");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (error) {
      console.error("Error adding news:", error);
      setErrormsg("Error adding news. Please try again later.");
      setTimeout(() => {
        setErrormsg("");
      }, 2000);
    }
  };

  return (
    <>
      <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
        {" "}
        {/* Increased max-width to 3xl */}
        <h2 className="text-2xl font-bold mb-5">Add News</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded"
              placeholder="Enter news title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 font-bold mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border rounded resize-none h-18" // Fixed height to ensure consistent size
              placeholder="Enter news content"
            ></textarea>
            {errors.content && (
              <p className="text-red-500 text-sm">{errors.content}</p>
            )}
          </div>
          {message && <p className="text-green-500 text-sm pb-2">{message}</p>}
          {errormsg && <p className="text-red-500 text-sm pb-2">{errormsg}</p>}

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default addNews;
