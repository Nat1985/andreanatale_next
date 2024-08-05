"use client"

import { useEffect, useState } from "react";
import Feed from "./components/Feed";
import Parser from "rss-parser";
import useBlogStore from "../zustand/blogStore";

const parser = new Parser();

export default function Blog() {
    const url = 'https://medium.com/feed/@andreanatale85'
    const proxyUrl = `api/rssProxy?url=${url}`;
    const { error, isLoading, feed, setError, setFeed } = useBlogStore();

    useEffect(() => {
            fetchToRssProxy()
    }, [])

    // Funzione che esegue la chiamata al proxy e poi parsifica i dati prima di salvarli in Zustand
    const fetchToRssProxy = async () => {
        try {
            const response = await fetch(proxyUrl);
            if (!response.ok) {
                setError(`Errore nella richiesta al proxy: ${response.statusText}`)
            }
            const text = await response.text();
            // Parsifico i dati
            const feedData = await parser.parseString(text);
            setFeed(feedData)
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