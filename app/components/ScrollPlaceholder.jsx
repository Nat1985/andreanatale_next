"use client"

import useMainStore from "../zustand/mainStore"

const ScrollPlaceholder = () => {
    const { yPosition } = useMainStore();
    return (
        <div>
            {yPosition < 80 && <div className="h-0"></div>}
            {yPosition >= 80 && <div className="h-16 md:h-[108px]"></div>}
        </div>
    )
}

export default ScrollPlaceholder