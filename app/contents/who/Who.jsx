import PinkSpan from "@/app/components/PinkSpan";
import Panel from "../../components/Panel";
import IndigoSpan from "@/app/components/IndigoSpan";

const Who = ({isBlack}) => {
    return (
        <Panel isBlack>
            <h5 className="text-pink-500">
                Ciao, mi chiamo
            </h5>
            <h1 className="text-indigo-800">
                Andrea.
            </h1>
            <h5>
                Sono un <PinkSpan>Creative Developer</PinkSpan>
            </h5>


            <p className="mt-4">
                Sviluppo <b>applicativi web</b> moderni e sartoriali: <i>siti web dinamici</i>, <i>gestionali aziendali</i>, <i>piattaforme gamificate</i> e <i>videogames B2B</i>.
            </p>

        </Panel>
    )
}

export default Who;