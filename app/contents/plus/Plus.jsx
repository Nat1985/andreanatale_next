import Quote from "@/app/components/Quote";
import Panel from "@/app/components/Panel"
import PinkSpan from "@/app/components/PinkSpan";
import Link from "next/link";
import IndigoSpan from "@/app/components/IndigoSpan";
import Image from "next/image";

const Plus = ({ isBlack }) => {
    const teamwork = "/icons/colors_icon/teamwork.png";
    const optional = "/icons/colors_icon/optional.png";
    const advice = "/icons/colors_icon/advice.png";
    return (
        <Panel isBlack={isBlack}>
            <h2 className="mb-16">Cosa offro in più?</h2>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row gap-2 items-center">
                    <div className="min-w-[200px] flex justify-center">
                        <Image src={optional} alt="custom" width={96} height={96} />
                    </div>
                    <div className="">Ad ogni lavoro che eseguo, previa analisi delle esigenze e della situazione del cliente, offro servizi opzionali che possano aggiungere valore alla sua richiesta.</div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 items-center">
                    <div className="min-w-[200px] flex justify-center">
                        <Image src={advice} alt="custom" width={96} height={96} />
                    </div>
                    <div className="">Offro la mia consulenza sempre gratuitamente, cercando di evitare di vendere a tutti i costi un prodotto, se sono consapevole che esso non offrirebbe il valore di cui il cliente ha bisogno. Cerco piuttosto di capire a fondo se le mie competenze (e idee) possano davvero soddisfarlo.</div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 items-center">
                    <div className="min-w-[200px] flex justify-center">
                        <Image src={teamwork} alt="custom" width={96} height={96} />
                    </div>
                    <div className="">Essendo un freelancer, mi interfaccio costantemente con una rete di professionisti e collaboratori ai quali appoggiarmi qualora il lavoro commissionatomi ecceda le mie risorse di competenze e tempo. Collaboro con altri freelancer specializzati in attività parallele alla mia, in modo da alzare ulteriormente la qualità del servizio che offro quando si presenta l'opportunità. </div>
                </div>

            </div>

        </Panel>
    )
}

export default Plus