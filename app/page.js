import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
    return (
        <main className="flex flex-col items-center pt-32 bg-cyan-200">
            {/* Hero */}
            <Hero />
            <div className="h-[800px] bg-cyan-200 w-full">Section</div>
            <div className="h-[800px] bg-cyan-200 w-full">Section</div>
            <div className="h-[800px] bg-cyan-200 w-full">Section</div>
        </main>
    );
}