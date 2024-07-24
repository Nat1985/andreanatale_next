import create from 'zustand';

const useBurgerStore = create((set) => ({
    isOpen: false,
    toggleBurger: () => set((state) => {
        const newState = !state.isOpen;
        console.log({newState})
        return { isOpen: newState }
    })
}))

export default useBurgerStore;