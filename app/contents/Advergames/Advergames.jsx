import PinkSpan from "@/app/components/PinkSpan";
import IndigoSpan from "@/app/components/IndigoSpan";
import Link from "next/link";

import Panel from "@/app/components/Panel";

const Advergames = () => {
    return (
        <Panel>
            <h3>Sviluppo <span className="text-pink-500">ADVERGAMES</span></h3>
            <div className="mt-2">
                Fra i videogiochi B2B più in voga ci sono gli <b>advergames</b> <i>(advertising/videogame)</i>, videogiochi a scopo di marketing: un metodo potente e innovativo per catturare l&apos;<span className="text-pink-500"><i>attenzione</i></span> degli utenti e guidarli alla scoperta del tuo <span className="text-pink-500"><i>brand</i></span>.
            </div>
            <div className="mt-8">
                <Link href="https://www.makinarioadvergamestudio.com"><IndigoSpan>Makinario Studio</IndigoSpan></Link> è il luogo in cui do vita a questo mondo. Credo molto in questa mia piccola startup.
            </div>
            <Link href="https://www.makinarioadvergamestudio.com"><button className="mt-4 bg-indigo-800 text-white rounded py-2 px-3 w-full md:w-fit">Vai al sito di Makinario</button></Link>
        </Panel>
    )
}

export default Advergames;