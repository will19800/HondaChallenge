import Link from "next/link";
import "../globals.css";

export default function Header() {
  return (
    <header className="flex bg-darkerPurple flex-row mx-auto justify-between py-4 items-center bg-bgBlack fixed w-full z-50 custom-border">
      <div className="flex flex-row items-center ml-52">
        <Link href="{'/'}" className="text-white text-xl font-bold mr-4">
          <img src="/images/smallerLogo.png" width={180} height={100} />
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
          <Link href="/LoginPage" className="text-white">
            Sign In
          </Link>
          <Link href="/LoginPage" className="bg-white text-black rounded-full p-2">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
