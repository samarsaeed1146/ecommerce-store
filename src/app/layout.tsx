import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "E-commerce",
  description: "We Offer Best Clothing Outfits",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[95%] mx-auto bg-myWhite">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
