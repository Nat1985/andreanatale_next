import PinkSpan from "@/app/components/PinkSpan";
import Link from "next/link";

const { default: Panel } = require("@/app/components/Panel")

const VideogameDeveloper = () => {
    return (
        <Panel>
            <p>
                <b>Sviluppare videogames</b> è un'attività che riempie le mie giornate. Spesso mostro qualcosa di ciò che faccio anche sulla mia pagina <PinkSpan><Link href="https://www.instagram.com/natcreativedev">Instagram</Link></PinkSpan>. Puoi anche provare qualche gioco <PinkSpan><Link href="https://linktr.ee/andreanatale_">QUI</Link></PinkSpan>.
            </p>
        </Panel>
    )
}

export default VideogameDeveloper;