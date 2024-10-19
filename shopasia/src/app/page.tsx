import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar"

export default function Home() {
  return (
    <main className="">
      <Header />
      <section className="flex flex-col w-full pt-24 bg-bgBlack">
        <div className=" flex-col flex">
          <h1 className="text-7xl mt-16 text-white text-center ">
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
            className="mb-4 rounded-full text-center text-sm bg-btyellow text-black shadow-lg py-2 w-60"
          >
            Try GoCaly for Free
          </Link>
        </div>
        <Searchbar />
        <div className="mb-20">
          <div className="flex flex-row justify-center">
            <div className="text-white w-3/12 p-8">
              <h1 className="text-xl mb-2">Cost-Effective Shipping</h1>
              <p className="font-light text-gray-400">
                By grouping multiple orders together, we reduce shipping costs
                and pass the savings directly to you.
              </p>
            </div>
            <div className="text-white w-3/12 p-8">
              <h1 className="text-xl mb-2">Secure Warehousing</h1>
              <p className="font-light text-gray-400">
                Your packages are stored safely in our strategically located
                warehouses, ready to be consolidated for cheaper international
                shipping.
              </p>
            </div>
            <div className="text-white w-3/12 p-8">
              <h1 className="text-xl mb-2">Streamlined Logistics</h1>
              <p className="font-light text-gray-400">
                We handle the complexities of international logistics, ensuring
                your orders are delivered efficiently and on time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
