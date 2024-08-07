import Panel from "../../components/Panel"

const Stack = () => {
    console.log('panel: ', Panel)
    return (
        <Panel>
            <h1>STACK</h1>
            <ul className="text-xl flex gap-2 flex-wrap leading-none">
                <li className="p-1 bg-pink-500 rounded text-white">Html/Css</li>
                <li className="p-1 bg-indigo-800 rounded text-white">Javascript</li>
                <li className="p-1 bg-slate-500 rounded text-white">React</li>
                <li className="p-1 bg-indigo-800 rounded text-white">NextJs</li>
                <li className="p-1 bg-pink-500 rounded text-white">React Native</li>
                <li className="p-1 bg-indigo-800 rounded text-white">NodeJs</li>
                <li className="p-1 bg-slate-500 rounded text-white">MongoDb</li>
                <li className="p-1 bg-indigo-800 rounded text-white">Phaser</li>
                <li className="p-1 bg-pink-500 rounded text-white">Construct</li>
                <li className="p-1 bg-indigo-800 rounded text-white">Rive</li>
                <li className="p-1 bg-slate-500 rounded text-white">Godot</li>
            </ul>
            
        </Panel>

    )
}

export default Stack;

