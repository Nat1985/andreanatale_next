import PinkSpan from "@/app/components/PinkSpan";
import Panel from "../../components/Panel";
import IndigoSpan from "@/app/components/IndigoSpan";

const Who = () => {
    return (
        <Panel>
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
                Sviluppo <b>soluzioni web creative</b> dal forte impatto stilistico e ludico, <i>piattaforme gamificate</i> e <i>videogames</i>.
            </p>

            <p className="mt-4">
                Sfrutto <b>storytelling</b> e <b>gamification</b> per aiutarti a raggiungere i tuoi obiettivi di business,
            </p>
        </Panel>
    )
}

export default Who;