"use client"

import useRSSFeed from "../hooks/useRSSFeed";
import Feed from "./components/Feed";

export default function Blog() {
    const url = 'api/rss';
    const { feed, error, isLoading } = useRSSFeed(url);
    return (
        <main className="mt-4 flex flex-col gap-4">
            <Feed feed={feed} error={error} isLoading={isLoading} />
        </main>
    )
}