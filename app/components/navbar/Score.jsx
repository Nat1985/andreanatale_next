"use client"

import useMainStore from "@/app/zustand/mainStore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PointModal from "../PointModal";

const Score = () => {

    // Creo gli elementi da renderizzare (badge vuoto o badge pieno)
    const [badgeType] = useState({
        empty: <Image src='/icons/empty_badge.png' width={24} height={24} />,
        full: <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 20
            }}
        >
            <Image src='/icons/full_badge.png' width={24} height={24} />
        </motion.div>
    })

    // Creo lo stato che conterrà gli elementi da renderizzare e importo i dati del punteggio da Zustand
    const [badgesRender, setBadgeRender] = useState(null);
    const { totalGames, score } = useMainStore();

    // Utilizzando i dati di Zustand, ad ogni punto rispetto ai giochi totali renderizzo un badge pieno
    // Altrimenti un badge vuoto
    // Salvo l'array completo nello stato badgesRender
    // Oltre a questo richiamo la modal utilizzando il componente dedicato
    const [isModalVisible, setIsModalVisible] = useState(false);
    useEffect(() => {
        let newArray = [];
        for (let i = 0; i < totalGames; i++) {
            score > i ? newArray.push(badgeType.full) : newArray.push(badgeType.empty)
        }
        setBadgeRender(newArray);
        if (score > 0) {
            setIsModalVisible(true);
            setTimeout(() => {
                setIsModalVisible(false);
            }, 2000)
        }
    }, [totalGames, score])

    return (
        <div className="flex">
            {isModalVisible && <PointModal />}
            {
                badgesRender && badgesRender.length > 0 &&
                badgesRender.map((element, index) => {
                    return <div key={index}>{element}</div>
                })
            }
        </div>
    )
}

export default Score;