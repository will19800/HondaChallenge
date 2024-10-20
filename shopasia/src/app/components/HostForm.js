'use client';

import { useState } from "react";

export default function Page() {
  const [formVisible, setFormVisible] = useState(false);

  // Toggle form visibility when button is clicked
  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <div className="p-8">
      {/* Button to trigger form */}
      <button
        onClick={toggleForm}
        className="bg-[#94829d] text-white px-4 py-2 rounded hover:bg-[#67407a] transition duration-200"
      >
        Host a Group Order
      </button>

      {/* Conditionally render the form below the button */}
      {formVisible && <HostForm setFormVisible={setFormVisible} />}
    </div>
  );
}

function HostForm({ setFormVisible }) {
  const [formData, setFormData] = useState({
    groupName: "",
    numberOfParticipants: "",
    shippingAddress: "",
  });

  // Handle input changes to update formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission and hide form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the form data to your API or process it as needed
    console.log(formData);

    // Hide the form after submit
    setFormVisible(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-4">
      <h2 className="text-[#67407a] text-2xl font-bold mb-4">Host a Group Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="groupName" className="block text-[#67407a] mb-2">Group Name</label>
          <input
            id="groupName"
            name="groupName"
            type="text"
            value={formData.groupName}
            onChange={handleChange}
            className="border border-[#67407a] text-[#67407a] w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#67407a]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="numberOfParticipants" className="block text-[#67407a] mb-2">Number of Participants</label>
          <input
            id="numberOfParticipants"
            name="numberOfParticipants"
            type="number"
            value={formData.numberOfParticipants}
            onChange={handleChange}
            className="border border-[#67407a] w-full text-[#67407a] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#67407a]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shippingAddress" className="block text-[#67407a] mb-2">Shipping Address</label>
          <input
            id="shippingAddress"
            name="shippingAddress"
            type="text"
            value={formData.shippingAddress}
            onChange={handleChange}
            className="border border-[#67407a] text-[#67407a] w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#67407a]"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-[#94829d] text-white px-4 py-2 rounded hover:bg-[#67407a] focus:outline-none focus:ring-2 focus:ring-[#94829d] transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
