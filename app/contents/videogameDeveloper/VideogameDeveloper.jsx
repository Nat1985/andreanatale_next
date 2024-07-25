import PinkSpan from "@/app/components/PinkSpan";
import Link from "next/link";

const { default: Panel } = require("@/app/components/Panel")

const VideogameDeveloper = () => {
    return (
        <Panel>
            <p>
                I'm in loving with <b>videogames development</b> and I share something about it on my <PinkSpan><Link href="https://www.instagram.com/natcreativedev">Instagram page</Link></PinkSpan>. You can try dome games <PinkSpan><Link href="https://linktr.ee/andreanatale_">HERE</Link></PinkSpan>.
            </p>
        </Panel>
    )
}

export default VideogameDeveloper;