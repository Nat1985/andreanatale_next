import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const PointModal = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1000); // Imposta il timer a 1 secondo

        return () => clearTimeout(timer); // Pulisce il timer quando il componente viene smontato
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-white bg-opacity-50 z-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} // Anima l'uscita con dissolvenza
                        transition={{
                            type: "spring",
                            stiffness: 40,
                            damping: 20,
                            duration: 0.5 // Durata dell'animazione (puoi regolarla se necessario)
                        }}
                    >
                        <Image src='/icons/win.png' width={200} height={200} />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PointModal;