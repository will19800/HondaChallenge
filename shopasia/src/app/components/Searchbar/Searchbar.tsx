"use client";

import "./Searchbar.css";
import React, { useState } from "react";

export default function Searchbar() {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
    });

    const data = await response.json();
    if (response.ok) {
        // Successfully received data
        // Here you can redirect or update the state to display the product information
    } else {
        console.error(data.error); // Handle error
    }
  }
  console.log(url)

  return (
    <form className="flex justify-center my-2 w-full">
    <input
        className="search-bar bg-darkerPurple text-left rounded-full w-5/12 py-5 px-4 border placeholder-white"
        type="text"
        placeholder="Enter product name / link"
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        required
      />
      <button type="submit">
      <img
        className="ml-2"
        src="/images/CircleSearch.png"
        width={60}
        height={30}
      />
      </button>
    </form>
  );
  }
