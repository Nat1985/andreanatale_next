import GameCopy from "@/app/components/GameCopy";
import Panel from "../../components/Panel";
import CardContainer from "./components/CardContainer";

const Memory = () => {
    return (
        <Panel>
            <GameCopy>Prima di proseguire, risolvi questo memory</GameCopy>
            <CardContainer />
        </Panel>
    )
}

export default Memory;