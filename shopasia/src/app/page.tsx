import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar/Searchbar";

export default function Home() {
  return (
    <main>
      <Header />
      <section
        className="flex flex-col w-full pt-24"
        style={{
          backgroundImage: 'url("/images/BackgroundArtworkBetter.png")', // Path to your image
          backgroundSize: "cover", // Cover the entire div
          backgroundPosition: "center", // Center the image
          height: "800px", // Set a specific height
          width: "100%", // Full width
          display: "flex", // Optional: to center content
          justifyContent: "center", // Optional: center content horizontally
          alignItems: "center", // Optional: center content vertically
          color: "white", // Text color (optional)
        }}
      >
        <div className=" flex-col flex">
          <h1 className="text-8xl mt-10 text-white text-center font-bold">
            Streamlined Shipping
          </h1>
          <p className="text-white my-8 text-center text-lg">
            Join the millions of users who get their overseas packages delivered
            efficiently and affordably
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
        <Searchbar />
        
      </section>
      <section>
        <div className="mt-10 mb-10">
          <div className="flex flex-row justify-center">
            <div className="text-white w-3/12 p-8">
              <h1 className="text-xl mb-2">Cost-Effective Shipping</h1>
              <p className="font-light text-white">
                By grouping multiple orders together, we reduce shipping costs
                and pass the savings directly to you.
              </p>
            </div>
            <div className="text-white w-3/12 p-8">
              <h1 className="text-xl mb-2">Secure Warehousing</h1>
              <p className="font-light text-white">
                Your packages are stored safely in our strategically located
                warehouses, ready to be consolidated for cheaper international
                shipping.
              </p>
            </div>
            <div className="text-white w-3/12 p-8">
              <h1 className="text-xl mb-2">Streamlined Logistics</h1>
              <p className="font-light text-white">
                We handle the complexities of international logistics, ensuring
                your orders are delivered efficiently and on time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="text-center text-4xl font-bold">HOW TO BUY</div>
          <div className="flex ">
            <img src="images/TopBanner.jpg" />
            <img src="images/TopBanner.jpg" />
            <img src="images/TopBanner.jpg" />
          </div>
        </div>
      </section>
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
