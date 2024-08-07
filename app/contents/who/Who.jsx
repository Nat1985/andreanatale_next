import PinkSpan from "@/app/components/PinkSpan";
import Panel from "../../components/Panel";

const Who = () => {
    return (
        <Panel>
            <p className="text-pink-500">
                Ciao, mi chiamo
            </p>
            <h1 className="text-indigo-800">
                Andrea.
            </h1>
            <h5>
                Sono un <PinkSpan>Creative Developer</PinkSpan>
            </h5>
            <h5>
                Sviluppo applicativi web e videogiochi B2B.
            </h5>
        </Panel>
    )
}

export default Who;