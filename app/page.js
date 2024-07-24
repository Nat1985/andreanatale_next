import Image from "next/image";
import Panel from "./components/Panel";

export default function Home() {
    return (
        <main className="mt-4 flex flex-col gap-4">
            <Panel index={0} />
            <Panel index={1} />
            <Panel index={2} />
        </main>
    );
}