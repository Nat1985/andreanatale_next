import Image from "next/image";
import Hero from "./components/Hero";
import Works from "./components/sections/works/Works";
import SayHello from "./components/sections/say-hello/SayHello";

export default function Home() {
    return (
        <main className="flex flex-col items-center pt-32 bg-cyan-200">
            {/* Hero */}
            <Hero />
            <Works />
            <SayHello />
        </main>
    );
}