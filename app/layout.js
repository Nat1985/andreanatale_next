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
      <body className={`${ubuntu.className} p-4 flex flex-col items-center`}>
        <div className="w-full">
          <Header />
            {children}
        </div>
      </body>
    </html>
  );
}