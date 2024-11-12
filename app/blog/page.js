"use client"

import { useEffect, useRef, useState } from "react";
import Feed from "./components/Feed";
import Parser from "rss-parser";
import useBlogStore from "../zustand/blogStore";
import useMainStore from "../zustand/mainStore";

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

    useEffect(() => {
        if(feed) {
            console.log(feed)
        }
    }, [feed])

    return (
        <main className="flex flex-col items-center pt-32 bg-rose-200">
            <h3 className='mb-32 text-center'>Blog</h3>
            {
                feed && feed
            }
        </main>
    )
}