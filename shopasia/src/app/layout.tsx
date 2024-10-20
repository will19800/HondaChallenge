import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";

const varela_round = Varela_Round({
  weight: ['400',], // Specify font weights you want to include
  subsets: ['latin'], // Include character subsets you need (e.g., 'latin')
});

export const metadata: Metadata = {
  title: "ShopAsia",
  description: "Ship overseas efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/images/TopBanner.jpg" />
      </head>
      <body className={varela_round.className}>{children}</body>
    </html>
  );
}
