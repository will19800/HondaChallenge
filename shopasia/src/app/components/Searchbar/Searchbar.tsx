"use client";
import { useRouter } from 'next/navigation'; // Import useRouter
import "./Searchbar.css";
import React, { useState } from "react";

export default function Searchbar() {
  const [url, setUrl] = useState("");
  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ url }))
    const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
    });

    const data = await response.json();

    if (response.ok) {
        console.log("made it", data)
        localStorage.setItem('productData', JSON.stringify(data));
        router.push('/productPage');
    } else {
        console.error(data.error); // Handle error
    }
  }

  return (
    <form className="flex justify-center my-2 w-full" onSubmit={handleSubmit}>
    <input
        className="search-bar bg-darkerPurple text-left rounded-full py-5 px-4 border placeholder-white"
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
