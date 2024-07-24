import create from 'zustand';

const useBurgerStore = create((set) => ({
    isOpen: false,
    toggleBurger: () => set((state) => ({ isOpen: !state.isOpen }))
}))

export default useBurgerStore;