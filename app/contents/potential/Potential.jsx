import Panel from "@/app/components/Panel"
import PinkSpan from "@/app/components/PinkSpan";

const Potential = () => {
    return (
        <Panel>
            <h2 className="text-slate-500">
                Il gaming B2B <b className="text-indigo-800">ha un immenso potenziale</b>
            </h2>
            <div className="mt-2">
                <b>Ecco cosa si può fare con un <PinkSpan>videogioco</PinkSpan>:</b>
                <ul>
                    <li>Aumentare il coinvolgimento</li>
                    <li>Rafforzare la percezione del marchio</li>
                    <li>Fidelizzare la clientela</li>
                    <li>Attrarre nuovi clienti</li>
                    <li>Promuovere un nuovo prodotto</li>
                    <li>Raccontare i propri servizi</li>
                    <li>Fare lead generation</li>
                    <li>Aumentare le conversioni</li>
                    <li>Educare e formare</li>
                    <li>Sensibilizzare le persone</li>
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