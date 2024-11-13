import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getFormattedDate } from '@/app/utils/getFormattedDate';

function PostCard({ creator, title, link, pubDate, contentEncodedSnippet, categories, image, }) {
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
        <div className='flex flex-col lg:flex-row sm:items-center justify-center'>
            {/* IMAGE */}
            <div className='rounded-3xl overflow-hidden'><Image src={image} width={512} height={512} layout='responsive' className='sm:max-w-[500px] sm:min-w-[340px] transform transition duration-300 hover:scale-110 ease-in-out' /></div>
            {/* INFO */}
            <div className='bg-white backdrop-blur-sm bg-opacity-40 rounded-3xl p-8 sm:max-w-[400px] mt-[-40px] lg:ml-[-40px] flex flex-col gap-2 md:shadow-lg'>
                <h4 className='hidden sm:block'>{title}</h4>
                <h5 className='sm:hidden'>{title}</h5>
                <div className='flex mt-4'>
                    <div className='flex flex-col'>
                        <div className='font-light'>{textFirstWords}</div>
                        <div className='bg-white w-fit my-4 px-3 pxy-6 rounded-full flex gap-2 transform transition duration-300 hover:scale-110'>
                            <a href={link} target="_blank" className='text-xl'>Read</a>
                            <Image src="/icons/arrow-up-right.svg" alt="email" width={12} height={12} />
                        </div>
                    </div>
                </div>
                <div className='text-cyan-600 flex gap-1 flex-wrap'>
                    {
                        categories.map((element, index) => (
                            <div key={index} className='px-2 border border-cyan-600 rounded-full font-light'>{element}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PostCard