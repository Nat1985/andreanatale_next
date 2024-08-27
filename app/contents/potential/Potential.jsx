import Quote from "@/app/components/Quote";
import Panel from "@/app/components/Panel"
import PinkSpan from "@/app/components/PinkSpan";
import Link from "next/link";
import IndigoSpan from "@/app/components/IndigoSpan";

const Potential = () => {
    return (
        <Panel>
            <h2 className="text-slate-500">
                Il gaming B2B <b className="text-indigo-800">ha un immenso potenziale</b>
            </h2>
            <div className="mt-8">

                <b>Con un <PinkSpan>videogioco aziendale</PinkSpan> si può</b>
                <ul className="list-disc ml-4">
                    <li>Rafforzare la percezione del marchio</li>
                    <li>Fidelizzare i clienti</li>
                    <li>Attrarrne di nuovi</li>
                    <li>Lanciare un nuovo prodotto</li>
                    <li>Raccontare i propri servizi</li>
                    <li>Fare lead generation</li>
                    <li>Aumentare le conversioni</li>
                    <li>Educare, formare e sensibilizzare</li>
                    <li>Fare team building aziendale</li>
                    <li>Generare hype per un evento</li>
                    <li>Intrattenere e divertire</li>
                    <li>Fare i fighi coi competitor :)</li>
                </ul>
            </div>
        </Panel>
    )
}

export default Potential