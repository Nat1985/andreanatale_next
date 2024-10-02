"use client"

import Panel from "@/app/components/Panel";
import useMainStore from "@/app/zustand/mainStore";
import { useEffect, useState } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";


const ConditionalContact = () => {
    const { score, totalGames } = useMainStore();
    const [getContact, setGetContact] = useState(false);
    useEffect(() => {
        if (score === totalGames) {
            setGetContact(true)
        }
    }, [score, totalGames])
    return (
        <Panel>
            {
                getContact ? (
                    <div className="flex flex-col gap-8 items-center text-center pt-16">
                        <h2 className="text-pink-500">Complimenti!</h2>
                        <h3>Hai collezionato tutte le medagliette :)</h3>
                        <div className="flex gap-1 p-2 border-2 border-dashed border-slate-300 rounded-xl">
                            <Image src="/icons/full_badge.png" width={48} height={48} />
                            <Image src="/icons/full_badge.png" width={48} height={48} />
                            <Image src="/icons/full_badge.png" width={48} height={48} />
                            <Image src="/icons/full_badge.png" width={48} height={48} />
                            <Image src="/icons/full_badge.png" width={48} height={48} />
                        </div>
                        <p>La gamification è un'arma molto potente per catturare l'attenzione degli utenti.</p>
                        <p>Facendo giocare gli utenti si può raggiungere qualsiasi obiettivo. Se hai qualche idea (o se vuoi essere aiutato a trovare quella giusta per la tua azienda):</p>
                        <ContactForm />
                    </div>

                ) : (
                    <div className="flex flex-col gap-8 items-center text-center pt-16">
                        <Image src="/icons/stop.png" width={128} height={128} />
                        <h3 className="text-pink-500">Non puoi ancora contattarmi</h3>
                        <h5>Non hai collezionato abbastanza medagliette!</h5>
                        <Image src="/icons/full_badge.png" width={48} height={48} />
                        <p>Torna indietro, risolvi i mini-game e naviga il sito per ottenerle. Poi torna qui :)</p>
                    </div>
                )
            }
        </Panel>
    )
}

export default ConditionalContact