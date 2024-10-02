"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { getFormattedDate } from "@/app/utils/getFormattedDate";

const BlogCard = ({ index, creator, title, link, pubDate, contentEncodedSnippet, categories }) => {
    const [textFirstWords, setTextFirstWords] = useState(null)
    useEffect(() => {
        if (contentEncodedSnippet) {
            setTextFirstWords(contentEncodedSnippet.slice(0, 200));
        }
    }, [contentEncodedSnippet])

    const [formattedDate, setformattedDate] = useState(null);
    useEffect(() => {
        if (pubDate) {
            setformattedDate(getFormattedDate(pubDate))
        }
    }, [pubDate])
    return (
        <Link href={link} target="_blank"><div className={`w-full md:w-[300px] flex flex-col items-start gap-2 border-2 ${index % 2 === 0 ? 'border-indigo-800' : 'border-pink-500'} rounded p-4 cursor-pointer md:hover:bg-slate-200`}>
            <h3 className={`${index % 2 === 0 ? 'text-indigo-800' : 'text-pink-500'} text-start`}>{title}</h3>
            <div className="w-full truncate italic text-wrap text-start h-[300px] md:max-h-[82px]">"{textFirstWords}...</div>
            {/* <h5>Scritto da {creator}</h5> */}
            {formattedDate && <div className="text-[8pt] mt-0">il {formattedDate}</div>}
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