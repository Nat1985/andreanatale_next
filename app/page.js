import Memory from "./contents/memory_game/Memory";
import Who from "./contents/who/Who";
import TapGame from "./contents/tap_game/TapGame";
import DragGame from "./contents/dragGame/DragGame";
import What from "./contents/what/What";
import How from "./contents/how/How";
import Plus from "./contents/plus/Plus";
import ScrollPlaceholder from "./components/ScrollPlaceholder";

export default function Home() {
    return (
        <main className="mt-4 flex flex-col gap-4 lg:gap-0">
            <ScrollPlaceholder />
            <Who key={0} isBlack />,
            <What />,
            <TapGame isBlack />,
            {/* <Potential isBlack />, */}
            <How />,
            <DragGame isBlack />,
            <Plus />,
            <Memory isBlack />
        </main>
    );
}