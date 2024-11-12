import Image from "next/image";
import Hero from "./components/Hero";
import Works from "./components/sections/works/Works";

export default function Home() {
    return (
        <main className="flex flex-col items-center pt-32 bg-cyan-200">
            {/* Hero */}
            <Hero />
            <Works />
            <div className="h-[800px] bg-cyan-200 w-full">Section</div>
            <div className="h-[800px] bg-cyan-200 w-full">Section</div>
        </main>
    );
}