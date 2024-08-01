import PinkSpan from "@/app/components/PinkSpan";
import IndigoSpan from "@/app/components/IndigoSpan";
import Link from "next/link";

import Panel from "@/app/components/Panel";

const Advergames = () => {
    return (
        <Panel>
            <h3>Sviluppo <span className="text-pink-500">ADVERGAMES</span></h3>
            <div className="mt-2">
                Gli advergame <i>(advertising/videogame)</i> sono videogiochi a scopo di marketing: un metodo potente e innovativo per catturare l'<span className="text-pink-500"><i>attenzione</i></span> degli utenti e guidarli alla scoperta del tuo <span className="text-pink-500"><i>brand</i></span>.
            </div>
            <div>
                <Link href="https://www.makinarioadvergamestudio.com"><IndigoSpan><u>Makinario Studio</u></IndigoSpan></Link> è il luogo in cui do vita a questo mondo. Credo molto in questa mia piccola startup.
            </div>
        </Panel>
    )
}

export default Advergames;