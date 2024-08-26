import React, { useState } from "react";
import { toast } from "react-toastify";

const CustomerFeedbackForm = () => {
  const stars = [1, 2, 3, 4, 5];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email || !rating || !comments) {
      toast.error("All fields are required!");
      return;
    }
    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }
    toast.success("feedback submitted successfully");
    setSubmitted(true);
  };
  const handleFeedback = () => {
    setSubmitted(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        {submitted ? (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">
              Thank You for Your Feedback!
            </h2>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Rating:</strong> {rating}
            </p>
            <p>
              <strong>Comments:</strong> {comments}
            </p>
            <button
              className=" bg-red-500 py-2 px-4 rounded text-white mt-3"
              type="button"
              onClick={handleFeedback}
            >
              Edit Feedback
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="rating"
              >
                Rating (1-5)
              </label>
              <div className="flex">
                {stars.map((star) => (
                  <span
                    key={star}
                    onClick={() => setRating(star)}
                    className={`cursor-pointer text-2xl ${
                      star <= rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="comments"
              >
                Comments
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comments"
                placeholder="Your comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CustomerFeedbackForm;
