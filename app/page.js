import Memory from "./contents/memory_game/Memory";
import Info from "./contents/info/Info";
import Potential from "./contents/potential/Potential";
import Who from "./contents/who/Who";
import TapGame from "./contents/tap_game/TapGame";
import DragGame from "./contents/dragGame/DragGame";
import Makinario from "./contents/makinario/Makinario";

export default function Home() {
    return (
        <main className="mt-4 flex flex-col gap-4 lg:gap-0">
            <Who key={0} isBlack />,
    <TapGame />,
    <Potential isBlack />,
    <Memory />,
    <Info isBlack />,
    <DragGame />,
    <Makinario isBlack />
        </main>
    );
}