import { useEffect, useState } from "react";
import useMainStore from "../zustand/mainStore";

const useScrollPosition = () => {
    const { yPosition, setYPosition } = useMainStore();
    useEffect(() => {
        const handleScroll = () => {
            setYPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [setYPosition])
    return yPosition;
}

export default useScrollPosition;