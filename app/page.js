import Memory from "./contents/memory_game/Memory";
import Info from "./contents/info/Info";
import Potential from "./contents/potential/Potential";
import Who from "./contents/who/Who";
import TapGame from "./contents/tap_game/TapGame";
import LinkedinLink from "./contents/linkedin/LinkedinLink";
import YoutubeLink from "./contents/youtube/YoutubeLink";
import Instagram from "./contents/instagram/Instagram";
import Email from "./contents/email/Email";
import DragGame from "./contents/dragGame/DragGame";
import Makinario from "./contents/makinario/Makinario";

const componentsList = [
    <Who key={0} isBlack />,
    <TapGame key={1} />,
    <Potential key={2} isBlack />,
    <Memory key={3} />,
    <Info key={4} isBlack />,
    <DragGame key={5} />,
    <Makinario key={6} isBlack />,
    <Instagram key={7} />,
    <LinkedinLink key={8} isBlack />,
    <YoutubeLink key={9} />,
    <Email key={10} isBlack />
]

export default function Home() {
    return (
        <main className="mt-4 flex flex-col gap-4 lg:gap-0">
            {
                componentsList && componentsList.map((element, index) => {
                    return <div key={index}>{element}</div>
                })
            }
        </main>
    );
}