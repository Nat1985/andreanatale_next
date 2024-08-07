import Panel from "@/app/components/Panel";
import BallsContainer from "./components/BallsContainer";
import GameCopy from "@/app/components/GameCopy";

const TapGame = () => {
    return (
        <Panel>
            <GameCopy>Prima di proseguire, colpisci la pallina rosa</GameCopy>
            <BallsContainer />
        </Panel>
    )
}

export default TapGame;