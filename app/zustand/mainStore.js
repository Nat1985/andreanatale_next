import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useMainStore = create(devtools((set) => ({
    // Burger menu state
    isOpen: false,
    setBurger: (action) => set({ isOpen: action })
})))

useMainStore.subscribe((state) => {
    // Possibilità di eseguire codice ogni volta che i valori degli stati cambiano
})

export default useMainStore;