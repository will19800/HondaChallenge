'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Slider from "../components/Slider/Slider";
import Searchbar from "../components/Searchbar/Searchbar";
import HostForm from "../components/HostForm"; // Import the form

export default function Home() {

  // Function to handle showing the form
  const [isformVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible((prev) => !prev);
  };

  // Function to handle closing the form
  const handleCloseForm = () => {
    setFormVisible(false);
  };
  const [sectionVisible, setSectionVisible] = useState(false);

  // Toggle the visibility of the section when the image is clicked
  const handleImageClick = () => {
    setSectionVisible((prev) => !prev);
  };
  return (
    <main>
      <Header />
      <section
        className="flex flex-col w-full pt-24"
        style={{
          backgroundImage: 'url("/images/BackgroundArtworkBetter.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "800px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <div className="flex-col flex">
          <h1 className="text-8xl mt-10 text-white text-center font-bold">
            Group Orders
          </h1>
          <p className="text-white my-8 text-center text-lg">
            Win Fansigns with less hassle and for cheaper or buy albums for cheap!
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <Link
            href={"/tryGoCaly"}
            className="mb-4 rounded-full text-center text-sm bg-btyellow text-white shadow-lg py-2 w-60"
          >
            Try ShopAsia for Free
          </Link>
        </div>
        <div className="mt-4"></div>
      </section>
      <section>
        <div className="mt-10">
          <div className="text-center text-4xl font-bold">OPTIONS</div>
          <div className="flex gap-16 justify-center m-10">
          <img
            src="/images/hostButton.png" // Path to your image
            width={350}
            height={500}
            className="cursor-pointer" // Styling to show it's clickable
            onClick={toggleForm} // This triggers the form to show
          />{/* Image that triggers the section */}
          <img
            src="images/AlbumButton.png"  // Replace with your actual image path
            width={350} height={500}
            alt="Group Orders"
            className="cursor-pointer hover:opacity-80 transition duration-200"
            onClick={handleImageClick}
          />
            <Link href="https://www.ktown4u.com/event">
              <Image
                src="/images/FansignButton.png"
                width={350}
                height={500}
                alt="To fansign info page"
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </section>
      {/* Conditionally render the section with the square */}
      {sectionVisible && (
            <div className="mt-8 p-8 bg-gray-200 w-96 h-64 flex justify-center items-center border border-[#67407a] rounded-3xl shadow-lg mx-auto">
            <p className="text-[#67407a] font-bold text-lg">No Group Orders Open</p>
          </div>
          )}
      {/* Conditionally render the form under the button */}
      {isformVisible && <HostForm onClose={handleCloseForm} />}
      {/* Other sections remain unchanged */}
      <section>
        <div className="flex ml-20">
          <img src="/images/SecondBanner.png" width={400} height={556} />
          <div>
            <div className="flex flex-col justify-center mt-12">
              <div className="text-white bg-darkerPurple rounded-2xl mr-4 p-8 mb-2">
                <h1 className="text-4xl mb-2">Hassle Free Distribution</h1>
                <p className="font-light text-2xl text-white">
                  We handle group orders so you don't have to receive all the albums and re-ship them out!
                </p>
              </div>
              <div className="text-white p-8 bg-darkerPurple rounded-2xl mr-4 mb-2">
                <h1 className="text-4xl mb-2">Win Fansign Raffles for Cheaper</h1>
                <p className="font-light text-xl text-white">
                  By covering a portion of the album costs for those joining your group order, get fansign entries for as little as $2 each.
                </p>
              </div>
              <div className="text-white p-8 bg-darkerPurple rounded-2xl mr-4 mb-2">
                <h1 className="text-4xl mb-2">Cheaper Albums</h1>
                <p className="font-light text-xl text-white">
                  Just want the albums? Join a group order to get albums for below retail price!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer and other sections */}
      <section className="bg-darkerPurple flex justify-center">
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
          <p className="my-6">Receipt Information</p>
        </div>
        <div className="p-10">
          <h1 className="font-bold text-lg">After Sales Service</h1>
          <p className="my-6">Help Center</p>
          <p className="my-6">Storage</p>
          <p className="my-6">Inspection Information</p>
          <p className="my-6">Contact Us</p>
        </div>
      </section>

      <section className="bg-darkerPurple">
        <div className="flex flex-col mb-20 ml-20 p-10">
          <p className="text-white font-bold mb-2">
            VISA | Mastercard | Discover | Applepay | Googlepay | Alipay | Paypal
          </p>
          <p className="mb-10">
            We support several kinds of credit and debit cards for top up. Know more
          </p>
          <p className="mb-2">Terms of Service | Privacy Policy | Help Center</p>
          <p>Copyright©ShopAsia.com All Rights Reserved</p>
        </div>
      </section>
    </main>
  );
}
