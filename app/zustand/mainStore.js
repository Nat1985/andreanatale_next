import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useMainStore = create(devtools((set) => ({
    // Burger menu state
    isOpen: false,
    setBurger: (action) => set({ isOpen: action }),

    // Scroll position state
    yPosition: 0,
    setYPosition: (position) => set({ yPosition: position }),

    // User Score
    totalGames: 6,
    score: 0,
    isBlogDiscovered: false,
    isVideogamesDiscovered: false,
    isPortfolioDiscovered: false,
    isTap: false,
    isMemory: false,
    isDrag: false,
    addPoints: (points) => set((state) => ({ score: state.score + points })),
    setBlogDiscovered: () => set({ isBlogDiscovered: true }),
    setVideogamesDiscovered: () => set({ isVideogamesDiscovered: true }),
    setPortfolioDiscovered: () => set({ isPortfolioDiscovered: true }),
    setIsTap: () => set({ isTap: true }),
    setIsMemory: () => set({ isMemory: true }),
    setIsDrag: () => set({ isDrag: true }),
})))

useMainStore.subscribe((state) => {
    // Possibilità di eseguire codice ogni volta che i valori degli stati cambiano
})

export default useMainStore;