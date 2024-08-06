import { create } from "zustand";
import { devtools } from 'zustand/middleware';

const useBlogStore = create(devtools((set) => ({
    // Feed state
    isLoading: true,
    error: null,
    feed: null,

    // Action
    setFeed: (data) => set({ feed: data, isLoading: false, error: null }),
    setError: (error) => set({ error, isLoading: false }),
    getPostById: (id) => {
        const posts = get().feed.items;
        return posts.filter((post, index) => index === id)
    }
})))

export default useBlogStore;