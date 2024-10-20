'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

interface ProductData {
  product_name: string;
}

export default function Home() {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [cart, setCart] = useState([]);

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

  const product = {
    id: 1,
    name: "Awesome Product",
    price: 25.99,
    imageUrl: "/images/product-photo.jpg", // Replace with your actual image URL
  };

  const addToCart = () => {
    //setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <main>
      <Header />

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
<<<<<<< HEAD
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md p-8">
        {/* Product Image */}
        <img
          src={productData.product_image || "N/A"}
          alt={product.name}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />

        {/* Product Details */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{productData.product_name || "N/A"}</h1>
          <p className="text-xl text-gray-600 mb-4">{productData.product_price || "N/A"}</p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={addToCart}
          className="bg-[#94829d] text-white px-6 py-2 rounded-full w-full hover:bg-[#67407a] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#94829d]"
        >
          Add to Cart
        </button>
      </div>
=======
  <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl p-8 flex flex-col lg:flex-row">
    
    {/* Product Image - Left Box */}
    <div className="flex-shrink-0 w-full lg:w-1/2 bg-gray-200 rounded-lg overflow-hidden mb-6 lg:mb-0">
      <img
        src={productData.product_image || "N/A"}
        alt={productData.product_name || "N/A"}
        className="w-full h-full object-cover"
      />
>>>>>>> refs/remotes/origin/master
    </div>

    {/* Product Details - Right Box */}
    <div className="flex flex-col justify-center w-full lg:w-1/2 px-4 lg:px-8 bg-white rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{productData.product_name || "N/A"}</h1>
      <p className="text-xl text-gray-600 mb-6">${productData.price.toFixed(2)}</p>

      {/* Add to Cart Button */}
      <button
        onClick={addToCart}
        className="bg-[#94829d] text-white px-6 py-2 rounded-full w-full hover:bg-[#67407a] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#94829d]"
      >
        Add to Cart
      </button>
    </div>
  </div>
</div>



      <section>
        <div className="bg-darkerPurple flex justify-center">
          <div className="p-10">
            <h1 className="font-bold text-lg">Customer Service</h1>
            <p className="my-6">Help Center</p>
            <p className="my-6">Contact Us</p>
          </div>
          <div className="p-10">
            <h1 className="font-bold text-lg">Shopping Agent Guidance</h1>
            <p className="my-6">Tutorial</p>
            <p className="my-6">Service & Fees</p>
            <p className="my-6">Return and Refunds</p>
            <p className="my-6">Order Status</p>
          </div>
          <div className="p-10">
            <h1 className="font-bold text-lg">Payment</h1>
            <p className="my-6">Top Up</p>
            <p className="my-6">Paypal</p>
            <p className="my-6">International Credit Card</p>
            <p className="my-6">Telegraphic Transfer</p>
          </div>
          <div className="p-10">
            <h1 className="font-bold text-lg">Delivery</h1>
            <p className="my-6">Charges</p>
            <p className="my-6">Mail Restrictions</p>
            <p className="my-6">Customs and Taxation</p>
            <p className="my-6">Recipt Information</p>
          </div>
          <div className="p-10">
            <h1 className="font-bold text-lg">After Sales Service</h1>
            <p className="my-6">Help Center</p>
            <p className="my-6">Storage</p>
            <p className="my-6">Inspection Information</p>
            <p className="my-6">Contact Us</p>
          </div>
        </div>
      </section>
      <section className="bg-darkerPurple">
        <div className="flex flex-col mb-20 ml-20 p-10">
          <p className="text-white font-bold mb-2">
            VISA | Mastercard | Discover | Applepay | Googlepay | Alipay |
            Paypal
          </p>
          <p className="mb-10">
            We support several kinds of credit and debit cards for top up. Know
            more
          </p>
          <p className="mb-2">
            Terms of Service | Privacy Policy | Help Center
          </p>
          <p>Copyright©ShopAsia.com All Rights Reserved</p>
        </div>
      </section>
      
    </main>
  );
}
