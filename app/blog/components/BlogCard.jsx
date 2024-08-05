"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

const BlogCard = ({ index, creator, title, link, pubDate, contentEncodedSnippet, categories }) => {
    const [textFirstWords, setTextFirstWords] = useState(null)
    useEffect(() => {
        if (contentEncodedSnippet) {
            setTextFirstWords(contentEncodedSnippet.slice(0, 500));
        }
    }, [contentEncodedSnippet])
    return (
        <Link href={link}><div className={`flex flex-col gap-2 border-2 ${index % 2 === 0 ? 'border-indigo-800' : 'border-pink-500'} rounded p-4 cursor-pointer md:hover:bg-slate-200`}>
            <h2 className={index % 2 === 0 ? 'text-indigo-800' : 'text-pink-500'}>{title}</h2>
            <div className="w-full truncate italic">"{textFirstWords}</div>
            <h5>Scritto da {creator}</h5>
            <div className="text-[8pt] mt-0">il {pubDate}</div>
            <div className="flex gap-1 items-center text-xs">
                <ul className="flex items-center flex-wrap gap-1">
                    <li>Categorie:</li>
                    {
                        categories.map((element, index) => (<li key={index} className="p-1 border rounded">{element}</li>))
                    }
                </ul>
            </div>
        </div></Link>
    )
}

export default BlogCard;