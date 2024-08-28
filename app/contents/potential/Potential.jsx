import Quote from "@/app/components/Quote";
import Panel from "@/app/components/Panel"
import PinkSpan from "@/app/components/PinkSpan";
import Link from "next/link";
import IndigoSpan from "@/app/components/IndigoSpan";

const Potential = () => {
    return (
        <Panel>
            <h2 className="text-slate-500">
                Il gaming B2B <b className="text-indigo-800">ha un potenziale immenso</b>
            </h2>
            <div className="mt-8 flex flex-col gap-4">
                <p>Con <b>videogiochi</b> e <b>piattaforme aziendali gamificate</b> si può:</p>
                <ul className="text-xl flex gap-2 flex-wrap leading-none">
                    <li className="p-1 bg-pink-500 rounded text-white">Rafforzare la percezione del marchio</li>
                    <li className="p-1 bg-indigo-800 rounded text-white">Fidelizzare i clienti</li>
                    <li className="p-1 bg-slate-500 rounded text-white">Attrarne di nuovi</li>
                    <li className="p-1 bg-indigo-800 rounded text-white">Lanciare un nuovo prodotto</li>
                    <li className="p-1 bg-pink-500 rounded text-white">Raccontare i propri servizi</li>
                    <li className="p-1 bg-indigo-800 rounded text-white">Fare lead generation</li>
                    <li className="p-1 bg-slate-500 rounded text-white">Aumentare le conversioni</li>
                    <li className="p-1 bg-indigo-800 rounded text-white">Educare, formare e sensibilizzare</li>
                    <li className="p-1 bg-pink-500 rounded text-white">Fare team building aziendale</li>
                    <li className="p-1 bg-indigo-800 rounded text-white">Generare hype per un evento</li>
                    <li className="p-1 bg-slate-500 rounded text-white">Intrattenere e divertire</li>
                    <li className="p-1 bg-pink-500 rounded text-white">Fare i fighi coi competitor :)</li>
                </ul>
            </div>
        </Panel>
    )
}

export default Potential