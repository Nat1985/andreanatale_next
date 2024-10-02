import { Ubuntu, Kalnia } from "next/font/google";
import "./globals.css";
import Header from "./components/navbar/Header";

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
});
const kalnia = Kalnia({
  subsets: ['latin']
})

export const metadata = {
  title: "Andrea Natale",
  description: "Creative developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} p-4 md:p-0 flex flex-col items-center lg:text-xl`}>
        <div className="w-full">
          <Header />
            {children}
          <footer className="text-white min-h-24 flex justify-center items-center p-2">
            www.andreanatale.com ®
          </footer>
        </div>
      </body>
    </html>
  );
}