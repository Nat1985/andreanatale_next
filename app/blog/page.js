"use client"

import { useEffect, useState } from "react";
import Feed from "./components/Feed";
import { proxy } from "../routes/api/rssProxy";

export default function Blog() {
    const url = 'https://medium.com/feed/@andreanatale85'
    const proxyUrl = `/routes/api/rssProxy?url=${url}`;
    const [feed, setFeed] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchToRssProxy()
    }, [])

    // Funzione che esegue la chiamata al proxy
    const fetchToRssProxy = async () => {
        try {
            const response = await fetch(proxyUrl);
            if (!response.ok) {
                setError(`Errore nella rihiesta al proxy: ${response.statusText}`)
            }
            const text = await response.text();
            setFeed(text)
        } catch (error) {
            console.error(`Errore durante la richiesta al feed RSS: ${error}`)
            setError(error)
        }
    }
    return (
        <main className="mt-4 flex flex-col gap-4">
            <Feed feed={feed} error={error} isLoading={isLoading} />
        </main>
    )
}