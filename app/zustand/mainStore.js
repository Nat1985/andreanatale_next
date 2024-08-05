import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useMainStore = create(devtools((set) => ({
    // Burger menu state
    isOpen: false,
    setBurger: (action) => set({ isOpen: action }),

    // Scroll position state
    yPosition: 0,
    setYPosition: (position) => set({ yPosition: position })
})))

export default useMainStore;