import React from 'react'
import Image from 'next/image'

function WorkCard({image, title, type, }) {
    return (
        <div className='flex flex-col lg:flex-row sm:items-center justify-center'>
            {/* IMAGE */}
            <div><Image src={data.image} width={512} height={512} layout='responsive' className='rounded-3xl sm:max-w-[500px] sm:min-w-[340px]' /></div>
            {/* INFO */}
            <div className='bg-white backdrop-blur-sm bg-opacity-40 rounded-3xl p-8 sm:max-w-[400px] mt-[-40px] lg:ml-[-40px] flex flex-col gap-2 md:shadow-lg'>
                <h3 className='hidden sm:block'>{data.title}</h3>
                <h4 className='sm:hidden'>{data.title}</h4>
                <div className='flex relative mt-4'>
                    <div className='absolute left-[-30px] top-16 transform rotate-90 text-cyan-600'>{data.type}</div>
                    <div className='ml-16 flex flex-col'>
                        <div className='text-sm text-cyan-300'>{data.summary}</div>
                        <div className='font-light'>{data.text}</div>
                        <div>Discover</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard