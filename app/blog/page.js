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

    // Assegno un punto alla scoperta di questa sezione
    // Controllo blogDiscoverd in Zustand e se non è true assegno un punto a 'score' e imposto blogDiscovered true
    // useRef per far eseguire la condizione soltanto la prima volta che il componente viene montato e non sempre
    const initialEffect = useRef(true);
    const { addPoints, isBlogDiscovered, setBlogDiscovered } = useMainStore();
    useEffect(() => {
        if (initialEffect.current && isBlogDiscovered === false) {
            addPoints(1);
            setBlogDiscovered();
            initialEffect.current = false;
        }
    }, [isBlogDiscovered]);

    return (
        <main className="mt-4 flex flex-col gap-4">
            <ScrollPlaceholder />
            <h2 className="text-center mb-4">I miei <span className="text-indigo-800">articoli</span></h2>
            <Feed feed={feed} error={error} isLoading={isLoading} />
        </main>
    )
}