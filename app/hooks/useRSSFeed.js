"use client"

import { useState, useEffect } from "react";
import Parser from "rss-parser";


const useRSSFeed = (url) => {
    const [feed, setFeed] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFeed = async () => {
            const parser = new Parser();
        try {
            const data = await fetch(url);
            const text = await data.text();
            const parseFeed = await parser.parseString(text);
            setFeed(parseFeed);
        } catch (error) {
            setError(error);
        }finally {
            setIsLoading(false)
        }
        }
        fetchFeed();
    }, [url])

    return (feed, error, isLoading)
}

export default useRSSFeed;