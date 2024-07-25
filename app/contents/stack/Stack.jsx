import Panel from "../../components/Panel"

const Stack = () => {
    console.log('panel: ', Panel)
    return (
        <Panel>
            <h1 className="text-pink-500">MY STACK</h1>
            <ul className="text-xl">
                <li>Html/Css</li>
                <li>Javascript</li>
                <li>React</li>
                <li>React Native</li>
                <li>NodeJs</li>
                <li>MongoDb</li>
                <li>Phaser</li>
                <li>Construct 3</li>
                <li>Rive</li>
                <li>Godot</li>
            </ul>
            
        </Panel>

    )
}

export default Stack;

