"use client"

import Panel from "@/app/components/Panel";
import BallsContainer from "./components/BallsContainer";
import GameCopy from "@/app/components/GameCopy";
import useWindowWidth from "@/app/hooks/useWindowWidth";

const TapGame = ({ isBlack}) => {
    const windowWidth = useWindowWidth();
    return (
        <Panel isBlack={isBlack}>
            <BallsContainer />
        </Panel>
    )
}

export default TapGame;


