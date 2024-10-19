import Link from "next/link";
import "../globals.css";

export default function Header() {
  return (
    <header className="flex bg-darkerPurple flex-row mx-auto justify-between py-4 items-center bg-bgBlack fixed w-full z-50 custom-border">
      <div className="flex flex-row items-center gap-4 ml-52">
        <img
          src="/images/TopBanner.jpg"
          width={50}
          height={50}
          className="mr-1"
        ></img>
        <Link href="{'/'}" className="text-white text-xl font-bold">
          ShopAsia
        </Link>
        <nav className="flex gap-4">
          <Link href="{/features}" className="text-white">
            Product
          </Link>
          <Link href="{/about}" className="text-white">
            Docs
          </Link>
          <Link href="{/pricing}" className="text-white">
            Customers
          </Link>
          <Link href="{/features}" className="text-white">
            Resources
          </Link>
          <Link href="{/about}" className="text-white">
            Partners
          </Link>
          <Link href="{/pricing}" className="text-white">
            Pricing
          </Link>
        </nav>
      </div>
      <div>
        <nav className="flex gap-4 items-center mr-52">
          <Link href="{/signin}" className="text-white">
            Sign In
          </Link>
          <Link href="{/signin}" className="bg-white text-black rounded-xl p-2">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
