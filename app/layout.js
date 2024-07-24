import { Kalnia } from "next/font/google";
import "./globals.css";
import Header from "./components/navbar/Header";

const kalnia = Kalnia({ subsets: ["latin"] });

export const metadata = {
  title: "Andrea Natale",
  description: "Creative developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kalnia.className} p-4 flex flex-col items-center mt-32`}>
          <container className="w-full max-w-[800px] border">
            <Header />
            {children}
          </container>
      </body>
    </html>
  );
}