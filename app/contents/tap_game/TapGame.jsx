"use client"

import Panel from "@/app/components/Panel";
import BallsContainer from "./components/BallsContainer";
import GameCopy from "@/app/components/GameCopy";
import useWindowWidth from "@/app/hooks/useWindowWidth";

const TapGame = () => {
    const windowWidth = useWindowWidth();
    return (
        <Panel>
            <BallsContainer />
        </Panel>
    )
}

export default TapGame;


