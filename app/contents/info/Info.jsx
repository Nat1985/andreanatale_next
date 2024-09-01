import IndigoSpan from "@/app/components/IndigoSpan";
import Panel from "@/app/components/Panel";
import PinkSpan from "@/app/components/PinkSpan";

const Info = ({ isBlack }) => {
    return (
        <Panel isBlack>
            <p>
                Sviluppo <PinkSpan>e-commerce</PinkSpan>, <IndigoSpan>gestionali aziendali</IndigoSpan>, <PinkSpan>Saas</PinkSpan> e <IndigoSpan>marketplace</IndigoSpan>, <b>personalizzando completamente qualsiasi progetto</b>, sia dal punto di vista strutturale che stilistico, soddisfacendo come meglio posso le direttive dei miei clienti
            </p>
        </Panel>
    )
}

export default Info;