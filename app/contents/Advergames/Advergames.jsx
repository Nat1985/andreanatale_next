import PinkSpan from "@/app/components/PinkSpan";
import IndigoSpan from "@/app/components/IndigoSpan";
import Link from "next/link";

import Panel from "@/app/components/Panel";

const Advergames = () => {
    return (
        <Panel>
            <h3>I make <span className="text-pink-500">ADVERGAMES</span></h3> Videogames for marketing purposes: they are innovative ways to capture users' <span className="text-pink-500"><i>attention</i></span> and bring them to discorver your <span className="text-pink-500"><i>brand</i></span>.
            <Link href="https://www.makinarioadvergamestudio.com"><IndigoSpan><u>Makinario Studio</u></IndigoSpan></Link> is the place when I give life to this world. I really believe in this startup.
        </Panel>
    )
}

export default Advergames;