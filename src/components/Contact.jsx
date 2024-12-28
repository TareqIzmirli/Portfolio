import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    fromName: "",
    fromEmail: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      from_name: formData.fromName,
      from_email: formData.fromEmail,
      to_name: "Recipient Name",
      message: formData.message,
    };

    emailjs
      .send(
        "service_m3vysnd", // Replace with your service ID
        "template_muftx1r", // Replace with your template ID
        data,
        "BL9Nq2QfEYQF16Joa" // Replace with your user ID
      )
      .then(
        () => {
          setStatusMessage({
            text: "Message sent successfully!",
            type: "success",
          });
          setFormData({ fromName: "", fromEmail: "", message: "" });
        },
        () => {
          setStatusMessage({
            text: "Failed to send message. Please try again.",
            type: "error",
          });
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 text-white p-10 rounded-2xl shadow-lg w-full max-w-lg transition-all hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="fromName" className="block text-lg font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="fromName"
              id="fromName"
              value={formData.fromName}
              onChange={handleChange}
              className="w-full mt-2 p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="fromEmail" className="block text-lg font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="fromEmail"
              id="fromEmail"
              value={formData.fromEmail}
              onChange={handleChange}
              className="w-full mt-2 p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Write your message"
              rows="5"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <p
            className={`mt-6 text-center font-medium ${
              statusMessage.type === "success"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {statusMessage.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
