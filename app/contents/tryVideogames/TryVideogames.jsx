import PinkSpan from "@/app/components/PinkSpan";
import Link from "next/link";
import Image from "next/image";

const { default: Panel } = require("@/app/components/Panel")

const TryVideogames = () => {
    return (
        <Panel>
            <div className="flex flex-col items-center gap-2 my-4">
                <Image src="/icons/joypad.png" width={48} height={48} />
                <Link href="https://linktr.ee/andreanatale_"><button className="bg-pink-500 text-white rounded py-2 px-3 w-full md:w-fit">Prova qualche gioco qui</button></Link>
            </div>

        </Panel>
    )
}

export default TryVideogames;