"use client";
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

interface ProductData {
    product_name: string;
  }

export default function Product() {
    const [productData, setProductData] = useState<ProductData | null>(null);

    useEffect(() => {
        // Retrieve the JSON data from localStorage
        const data = localStorage.getItem('productData');
        if (data) {
          setProductData(JSON.parse(data)); // Parse the JSON string back into an object
        }
      }, []);
      
    if (!productData) {
        return <Header />
    }

    return (
        <main>
            <Header />
            <div>Product name : {productData.product_name || "N/A"}</div>
        </main>
    )
}