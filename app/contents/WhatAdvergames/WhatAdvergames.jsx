import Panel from "@/app/components/Panel";
import PinkSpan from "@/app/components/PinkSpan";
import Link from "next/link";

const WhatAdvergames = () => {
    return (
        <Panel>
            <h3>VUOI CAPIRE MEGLIO COSA SONO GLI ADVERGAMES?</h3>
            <Link href="https://medium.com/@andreanatale85/dopo-il-balzo-verso-linfinito-fatto-proprio-in-questa-torrida-estate-con-la-nostra-nuova-startup-3a55305a4031" target="_blank"><h3 className="mt-4 get-leading"><PinkSpan><u>Ci ho scritto un articolo</u></PinkSpan></h3></Link>
        </Panel>
    )
}

export default WhatAdvergames;