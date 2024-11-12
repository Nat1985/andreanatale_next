import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/Footer";

const outfit = Outfit({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
});

export const metadata = {
  title: "Andrea Natale",
  description: "Web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}