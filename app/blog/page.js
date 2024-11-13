"use client"

import { useEffect, useRef, useState } from "react";
import Feed from "./components/Feed";
import Parser from "rss-parser";
import useBlogStore from "../zustand/blogStore";
import useMainStore from "../zustand/mainStore";
import PostSection from "./components/PostSection";

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

    // Reverse sugli items
    const [mappedFeedItems, setMappedFeedItems] = useState(null);
    useEffect(() => {
        const newObject = feed && feed.items.slice().map(item => ({
            ...item,
            contentEncodedSnippet: item["content:encodedSnippet"] || "",
        }));
        setMappedFeedItems(newObject)
    }, [feed])

    return (
        <main className="flex flex-col items-center bg-rose-200 pt-32 lg:pt-64">
            <h3 className='mb-32 text-center'>Blog</h3>
            {
                mappedFeedItems && mappedFeedItems.map((element, index) => (
                    <PostSection key={index} data={element} isEven={index % 2 ? true : false} />
                ))
            }
        </main>
    )
}