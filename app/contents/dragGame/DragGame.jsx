"use client"

import Quote from "@/app/components/Quote";
import Panel from "../../components/Panel";

import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import DragCard from "@/app/blog/components/DragCard";
import Image from "next/image";
import GameCopy from "@/app/components/GameCopy";
import useMainStore from "@/app/zustand/mainStore";

const DragGame = () => {

    const [items, setItems] = useState([
        { id: 3, value: <DragCard text="…su misura per il cliente.”" /> },
        { id: 0, value: <DragCard text="“Sono fissato con la…" /> },
        { id: 2, value: <DragCard text="… web sono sempre progettati… " /> },
        { id: 1, value: <DragCard text="…sartorialità. I miei applicativi…" /> },
    ]);

    // Condizione di vittoria
    useEffect(() => {
        console.log('items: ', items)
        if (
            items[0].id === 0 &&
            items[1].id === 1 &&
            items[2].id === 2 &&
            items[3].id === 3
        ) {
            setTimeout(() => {
                setIsWin(true);
            }, 1000)

        }
    }, [items])

    // Aggiornamento punteggio Zustand
    const { addPoints, isDrag, setIsDrag } = useMainStore();
    const [isWin, setIsWin] = useState(false)
    useEffect(() => {
        if (isWin && !isDrag) {
            addPoints(1);
            setIsDrag();
        }
    }, [isWin])
    return (
        <Panel>
            <div className="h-[293px] flex flex-col justify-center">
                {
                    !isDrag &&
                    <GameCopy>Riordina i tasselli</GameCopy>
                }
                {
                    !isDrag && items &&
                    <Reorder.Group values={items} onReorder={setItems} className="flex flex-col gap-2">
                        {
                            items.map((element) => (
                                <Reorder.Item value={element} key={element.id}>
                                    <div>{element.value}</div>
                                </Reorder.Item>
                            ))

                        }
                    </Reorder.Group>
                }

                {/* Fine gioco */}
                {
                    isDrag &&
                    <div className="h-full flex flex-col pt-8">
                        <Quote author="Andrea">
                            Sono fissato con la sartorialità. I miei applicativi web sono sempre progettati su misura per il cliente.
                        </Quote>
                        <div className='h-full flex flex-col items-center justify-center gap-4'>
                            <Image src='/icons/full_badge.png' width={48} height={48} />
                        </div>
                    </div>
                }
            </div>

        </Panel>
    )
}

export default DragGame;