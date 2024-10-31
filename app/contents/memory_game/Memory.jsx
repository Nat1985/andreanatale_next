import GameCopy from "@/app/components/GameCopy";
import Panel from "../../components/Panel";
import CardContainer from "./components/CardContainer";

const Memory = ({isBlack}) => {
    return (
        <Panel isBlack={isBlack}>
            <CardContainer />
        </Panel>
    )
}

export default Memory;