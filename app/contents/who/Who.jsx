import PinkSpan from "@/app/components/PinkSpan";
import Panel from "../../components/Panel";
import IndigoSpan from "@/app/components/IndigoSpan";
import Image from "next/image";

const Who = ({ isBlack }) => {
    const scissor = "/icons/colors_icon/scissor.png";
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
                Sviluppo <b>applicativi web</b> moderni e sartoriali per <b>liberi professionisti</b> e <b>piccole aziende</b>.
            </p>


        </Panel>
    )
}

export default Who;