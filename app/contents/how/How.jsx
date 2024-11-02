import Quote from "@/app/components/Quote";
import Panel from "@/app/components/Panel"
import PinkSpan from "@/app/components/PinkSpan";
import Link from "next/link";
import IndigoSpan from "@/app/components/IndigoSpan";
import Image from "next/image";

const How = ({ isBlack }) => {
    const custom = "/icons/colors_icon/custom.png";
    const usability = "/icons/colors_icon/usability.png";
    const scopes = "/icons/colors_icon/scopes.png";
    const faceToFace = "/icons/colors_icon/face_to_face.png";
    return (
        <Panel isBlack={isBlack}>
            <h2 className="mb-16">Perché dovresti scegliermi?</h2>
            <div className="flex flex-col gap-8 md:text-start">
                <div className="flex flex-col md:flex-row gap-2 items-center">
                    <div className="min-w-[200px] flex justify-center">
                        <Image src={custom} alt="custom" width={96} height={96} />
                    </div>
                    <div className="">Progetto ogni applicativo da zero, <b>personalizzando</b> logica e struttura secondo le esigenze del cliente, in modo da consegnare un prodotto <b>completamente su misura</b>.</div>
                    {/* <div className="">Ogni applicativo viene progettato completamente <b>su misura</b> secondo le esigenze del cliente.</div> */}
                </div>

                <div className="flex flex-col md:flex-row gap-2 items-center">
                    <div className="min-w-[200px] flex justify-center">
                        <Image src={usability} alt="custom" width={96} height={96} />
                    </div>
                    <div className="">Do molta importanza all'<b>usabilità</b> di qualsiasi applicativo e investo tempo e risorse per offrire qualità anche a livello stilistico e di UX</div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 items-center">
                    <div className="min-w-[200px] flex justify-center">
                        <Image src={scopes} alt="custom" width={96} height={96} />
                    </div>
                    <div className="">Cerco di trasmettere più valore possibile nel servizio che offro, prestando attenzione agli <b>obiettivi dell'azienda</b>. Non mi limito a consegnare un applicativo web, ma mi assicuro che con esso la realtà lavorativa dei miei clienti possa trarne il <b>massimo vantaggio</b>.</div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 items-center">
                    <div className="min-w-[200px] flex justify-center">
                        <Image src={faceToFace} alt="custom" width={96} height={96} />
                    </div>
                    <div className="">Oltre ad occuparmi dei processi di sviluppo, mi interfaccio <b>personalmente</b> con il cliente dall'inizio alla fine della collaborazione, cercando di instaurare un rapporto di <b>comunicazione trasparente</b> e assumendomi tutte le responsabilità del mio lavoro.</div>
                </div>

            </div>

        </Panel>
    )
}

export default How